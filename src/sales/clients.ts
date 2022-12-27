import { Client } from "../interfaces/client";
import * as db from "../database/index";
import { Document, WithId } from "mongodb";

class clients {
    public static async createClient(newClient: Client) {
        const initialDbClient = await db.generateConnection();
        try {
            const dbClient = initialDbClient.db("sales").collection("clients");
            const result = await dbClient.insertOne(newClient);
            return result;
        } catch (error) {	
            console.log("Error: " + error);
        } finally {
            initialDbClient.close();
        }
        console.log(newClient);
    }

    public static async getClient(id?: Client["_id"], name?:  Client["name"], vatId?: Client["vatId"]): Promise< WithId<Document> | null | false > {
        if (typeof id != "undefined") {
            return this.getClientByID(id);
        } else if (typeof name != "undefined") {
            return this.getClientByName(name);
        } else if (typeof vatId != "undefined") {
            return this.getClientByVatId(vatId);
        } else {
            throw TypeError("No option selected, usage ex.: getClient(undefined, 'OPENTHINGY LDA', undefined)");
        }
    }

    private static async getClientByID(clientId: Client["_id"]): Promise< WithId<Document> | null | false > {
        const initalDbClient = await db.generateConnection();
        try {
            const dbClient = initalDbClient.db("sales").collection("clients");
            const clientById = await dbClient.findOne({"_id": clientId});
            return clientById;
        } catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            initalDbClient.close();
        }
    }

    private static async getClientByName(clientName: Client["name"]): Promise< WithId<Document> | null | false > {
        const initialDbClient = await db.generateConnection();
        try {
            const dbClient = initialDbClient.db("sales").collection("clients");
            const clientByName = await dbClient.findOne({"name": clientName});
            return clientByName;
        } catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            initialDbClient.close();
        }
    }

    private static async getClientByVatId(clientVatId: Client["vatId"]): Promise< WithId<Document> | null | false > {
        const initialDbClient = await db.generateConnection();
        try {
            const dbClient = initialDbClient.db("sales").collection("clients");
            const clientByVatId = await dbClient.findOne({"VatId": clientVatId});
            return clientByVatId;
        } catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            initialDbClient.close();
        }
    }
}

export { clients };