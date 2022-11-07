import { MongoClient, Db } from "mongodb";
import details from "./details.json" assert {"type": "json"};

async function generateConnection(): Promise<Db> {
    const client = new MongoClient(details.uri);
    await client.connect();
    return client.db(details.db);
}

export { 
    generateConnection
};