import * as conn from "../database/connection/index.js";

console.log("Test 1: Record insertion");
try {
    const client = await conn.generateConnection();
    const insertRecord = await conn.setDb(client).collection("user").insertOne({"a": "a"});
    console.log(insertRecord);
    process.exit();
} catch (error) {
    process.exit(1);
}
