import nodemailer from "nodemailer";
import * as db from "../database";

async function load() {
    // Get the credentials from the database
    const dbClient = await db.generateConnection();
    let smtpConfig; // Global
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

    // Test SMTP connection
    const transporter = nodemailer.createTransport({
        host: smtpConfig.host,
        port: smtpConfig.port,
        secure: smtpConfig.secure, // true for 465, false for other ports
        auth: {
            user: smtpConfig.user,   
            pass: smtpConfig.password
        }
    });

    try {
        // Test the connection
        await transporter.verify();
        console.log("SMTP connection successful");
        return true;
    } catch (err) {
        console.error("Error connecting to SMTP server:", err);
        return false;
    }
}

export { load };