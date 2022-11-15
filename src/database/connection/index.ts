import { MongoClient, Db } from "mongodb";
import details from "./details.json";

async function generateConnection(): Promise<MongoClient> {
    const client = new MongoClient(details.uri);
    return client;
}

async function selectDb(client: MongoClient): Promise<Db> {
    await client.connect();
    return client.db(details.db);
}

export { 
    generateConnection,
    selectDb
};