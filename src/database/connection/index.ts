import { MongoClient } from "mongodb";
import details from "./details.json";

async function generateConnection(): Promise<MongoClient> {
    const client = new MongoClient(details.uri);
    return client;
}

export { 
    generateConnection
};