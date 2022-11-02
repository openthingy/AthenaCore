import { InsertOneResult } from "mongodb";
import * as db from "../../../database/index.js";
import { address } from "../../interfaces/client.js";

async function createWarehouse(code: string, address: address): Promise<boolean> {
    try {
        const client = await db.generateConnection();
        const warehouses: number = await client.collection("warehouses").countDocuments({"code": code});
        if (warehouses != 0) {
            const createWarehouse: InsertOneResult<Document> = await client.collection("warehouses").insertOne({"code": code, "address": address});
            if (createWarehouse.acknowledged) {
                return true;
            } else {
                throw new Error("Something went wrong while inserting a warehouse");
            }
        }
    }
    catch (err) {
        console.log("Error: " + err);
        return false;
    }
    // You shouldn't be getting here
    return false;
}

export { createWarehouse };