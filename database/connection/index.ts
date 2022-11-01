import { Db, MongoClient } from "mongodb";
import details from "./details.json" assert {"type": "json"};

async function generateConnection(): Promise<MongoClient|Db> {
    const client = new MongoClient(details.uri);
    await client.connect();
    return client.db(details.db);
}

export { 
    generateConnection
};