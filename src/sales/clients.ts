import { Client } from "../interfaces/client";
import * as db from "../database/index";

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

    public static async getClient(id?: Client["_id"], name?:  Client["name"], vatId?: Client["vatId"]) {
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

    private static async getClientByID(clientId: Client["_id"]) {
        const dbClient = await db.generateConnection();
        try {
            const clientsCollection = dbClient.db("sales").collection("clients");
            const clientById = await clientsCollection.findOne({"_id": clientId}) as Client | null;
            return clientById;
        } catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            dbClient.close();
        }
    }

    private static async getClientByName(clientName: Client["name"]) {
        const dbClient = await db.generateConnection();
        try {
            const clientsCollection = dbClient.db("sales").collection("clients");
            const clientByName = await clientsCollection.findOne({"name": clientName}) as Client | null;
            return clientByName;
        } catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            dbClient.close();
        }
    }

    private static async getClientByVatId(clientVatId: Client["vatId"]) {
        const dbClient = await db.generateConnection();
        try {
            const clientsCollection = dbClient.db("sales").collection("clients");
            const clientByVatId = await clientsCollection.findOne({"VatId": clientVatId}) as Client | null;
            return clientByVatId;
        } catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            dbClient.close();
        }
    }
}

export { clients };