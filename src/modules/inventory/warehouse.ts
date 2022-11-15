import { Document, InsertOneResult, WithId } from "mongodb";
import * as db from "../../database/index.js";
import { WarehouseInfo } from "../validation/interfaces/inventory/warehouse.js";

class warehouse {
    public async createWarehouse(warehouse: WarehouseInfo): Promise<boolean> {
        const initialClient = await db.generateConnection();
        try {
            const client = await db.selectDb(initialClient);
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
        } finally {
            initialClient.close();
        }
        // You shouldn't be getting here
        return false;
    }

    public async getWarehouse(code: WarehouseInfo["_id"]): Promise<WithId<Document> | null | false > {
        const initialClient = await db.generateConnection();
        try {
            const client = await db.selectDb(initialClient);
            const warehouses: number = await client.collection("warehouses").countDocuments({"_id": code});
            if (warehouses > 0) {
                const warehouse = await client.collection("warehouses").findOne({"_id": code});
                return warehouse;
            } else {
                return false;
            }
        }
        catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            initialClient.close();
        }
    }
}


export { warehouse };