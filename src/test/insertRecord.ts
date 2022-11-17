import * as db from "../database/connection/index";

console.log("Test 1: Record insertion");
const initialClient = await db.generateConnection();
try {
    const client = await initialClient.db("test").collection("user");
    const insertRecord = await client.insertOne({"a": "a"});
    console.log(insertRecord);
    process.exit();
} catch (error) {
    process.exit(1);
}
