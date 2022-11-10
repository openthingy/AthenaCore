import { InsertOneResult, WithId } from "mongodb";
import * as db from "../../database/index.js";
import { WarehouseInfo } from "../interfaces/inventory/warehouse.js";

class warehouse {
    public async createWarehouse(warehouse: WarehouseInfo): Promise<boolean> {
        try {
            const client = await db.generateConnection();
            const warehouses: number = await client.collection("warehouses").countDocuments({"_id": warehouse._id});
            if (warehouses != 0) {
                const createWarehouse: InsertOneResult<Document> = await client.collection("warehouses").insertOne(warehouse as object);
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

    public async getWarehouse(code: WarehouseInfo["_id"]): Promise<WithId<Document | null> | null | false > {
        try {
            const client = await db.generateConnection();
            const warehouses: number = await client.collection("warehouses").countDocuments({"_id": code});
            if (warehouses > 0) {
                const warehouse = await client.collection("warehouses").findOne({"_id": code} as object);
                return warehouse;
            } else {
                return false;
            }
        }
        catch (err) {
            console.log("Error: " + err);
            return false;
        }
    }
}


export { warehouse };