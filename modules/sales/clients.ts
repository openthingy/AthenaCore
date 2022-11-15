import { Client } from "../interfaces/client.js";
import * as db from "../../database/index.js";
import { ObjectId, WithId } from "mongodb";

class clients {
    public static async createClient() {
        console.log("a");
    }

    public static async getClient(id?: Client["_id"], name?:  Client["name"], vatId?: Client["vatId"]) {
        if (typeof id != undefined) {
            this.getClientByID(id);
        }
        console.log("a");
    }

    private static async getClientByID(clientId: Client["_id"]): Promise<WithId<Document | null > | null> {
        const client = await db.generateConnection();
        const insertRecord = await client.collection("clients").findOne({"_id": clientId});
        console.log(insertRecord);
        return insertRecord;
    }
}

export { clients };