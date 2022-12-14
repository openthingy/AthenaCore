import * as db from "../database";
import nodemailer from "nodemailer";
import * as fs from "fs";


class email {
    public static async plain(to: string, subject: string, body: string) {
        // Get the credentials from the database
        const dbClient = await db.generateConnection();
        let smtpConfig;
        try {
            const configCollection = dbClient.db("config").collection("notifications");
            smtpConfig = await configCollection.findOne({"type": "smtp"});
            if (!smtpConfig) {
                console.log("No SMTP credentials detected on the DB");
                return false;
            }
        } catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            dbClient.close();
        }

        const transporter = nodemailer.createTransport({
            host: smtpConfig.host,
            port: smtpConfig.port,
            secure: smtpConfig.secure, // true for 465, false for other ports
            auth: {
                user: smtpConfig.user,   
                pass: smtpConfig.password
            }
        });

        const message = {
            from: smtpConfig.sender,
            to: to,
            subject: subject,
            text: body
        };

        try {
            const sentMail = await transporter.sendMail(message);
            console.log("Email sent with id " + sentMail.messageId);
            return true;
        } catch (err) {
            console.error("Error sending email:", err);
            return false;
        } finally {
            transporter.close();
        }
        
    }

    public static async html(to: string, subject: string, template: string, text: string) {
        // Get the credentials from the database
        const dbClient = await db.generateConnection();
        let smtpConfig;
        try {
            const configCollection = dbClient.db("config").collection("notifications");
            smtpConfig = await configCollection.findOne({"type": "smtp"});
            if (!smtpConfig) {
                console.log("No SMTP credentials detected on the DB");
                return false;
            }
        } catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            dbClient.close();
        }

        const transporter = nodemailer.createTransport({
            host: smtpConfig.host,
            port: smtpConfig.port,
            secure: smtpConfig.secure, // true for 465, false for other ports
            auth: {
                user: smtpConfig.user,   
                pass: smtpConfig.password
            }
        });

        // Read the template
        let templateFile: string;
        try {
            templateFile = fs.readFileSync("./template/" + template + ".html", "utf8");
            templateFile.replace("{{title}}", subject);
            templateFile.replace("{{body}}", text);
        } catch (err) {
            console.error("Error while reading the template " + template + ":", err);
            return false;
        }

        const message = {
            from: smtpConfig.sender,
            to: to,
            subject: subject,
            plain: text,
            html: templateFile
        };

        try {
            const sentMail = await transporter.sendMail(message);
            console.log("Email sent with id " + sentMail.messageId);
            return true;
        } catch (err) {
            console.error("Error sending email:", err);
            return false;
        } finally {
            transporter.close();
        }
        
    }
}

export { email };