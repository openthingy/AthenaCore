import * as db from "../database/connection/index.js";

console.log("Test 1: Record insertion");
const initialClient = await db.generateConnection();
try {
    const client = await db.selectDb(initialClient);
    const insertRecord = await client.collection("user").insertOne({"a": "a"});
    console.log(insertRecord);
    process.exit();
} catch (error) {
    process.exit(1);
}
