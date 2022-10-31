import { MongoClient } from "mongodb";
import { url, collection } from "./example.details.json";

async function generateConnection(){
    const client = new MongoClient(url);
    await client.connect();
    const conn = client.db(collection);
    return conn;
}

export { generateConnection };