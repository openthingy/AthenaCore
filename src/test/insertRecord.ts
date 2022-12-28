import * as db from "../database/connection/index";

console.log("Test 1: Record insertion");
const dbClient = await db.generateConnection();
try {
    const testUserCollection = await dbClient.db("test").collection("user");
    const insertRecord = await testUserCollection.insertOne({"a": "a"});
    console.log(insertRecord);
    process.exit();
} catch (error) {
    console.error("Something went wrong");
    process.exit(1);
} finally {
    dbClient.close();
}
