import { Document, WithId } from "mongodb";
import * as db from "../database/index";
import { WarehouseInfo } from "../interfaces/inventory/warehouse";

class warehouse {
    public static async createWarehouse(warehouse: WarehouseInfo): Promise<boolean> {
        const initialDbClient = await db.generateConnection();
        try {
            const dbClient = await initialDbClient.db("logistics").collection("warehouses");
            const warehouses = await dbClient.countDocuments({"_id": warehouse._id});
            if (warehouses != 0) {
                const createWarehouse = await dbClient.insertOne(warehouse as object);
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
            initialDbClient.close();
        }
        // You shouldn't be getting here
        return false;
    }

    public static async getWarehouse(code: WarehouseInfo["_id"]): Promise<WithId<Document> | null | false > {
        const initialDbClient= await db.generateConnection();
        try {
            const dbClient = await initialDbClient.db("logistics").collection("warehouses");
            const warehouses: number = await dbClient.countDocuments({"_id": code});
            if (warehouses > 0) {
                const warehouse = await dbClient.findOne({"_id": code});
                return warehouse;
            } else {
                return false;
            }
        }
        catch (err) {
            console.log("Error: " + err);
            return false;
        } finally {
            initialDbClient.close();
        }
    }
}


export { warehouse };