import { Client } from "../validation/interfaces/client.js";
import * as db from "../../database/index.js";
import { Document, WithId } from "mongodb";

class clients {
    public static async createClient(newClient: Client) {
        
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
        const initalClient = await db.generateConnection();
        try {
            const client = await db.selectDb(initalClient);
            const clientById = await client.collection("clients").findOne({"_id": clientId});
            
            return clientById;
        } catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            initalClient.close();
        }
    }

    private static async getClientByName(clientName: Client["name"]): Promise< WithId<Document> | null | false > {
        const initalClient = await db.generateConnection();
        try {
            const client = await db.selectDb(initalClient);
            const clientByName = await client.collection("clients").findOne({"name": clientName});
            return clientByName;
        } catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            initalClient.close();
        }
    }

    private static async getClientByVatId(clientVatId: Client["vatId"]): Promise< WithId<Document> | null | false > {
        const initalClient = await db.generateConnection();
        try {
            const client = await db.selectDb(initalClient);
            const clientByVatId = await client.collection("clients").findOne({"VatId": clientVatId});
            return clientByVatId;
        } catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            initalClient.close();
        }
    }
}

export { clients };