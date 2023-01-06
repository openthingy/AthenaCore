import { ObjectId } from "mongodb";
import { Client } from "../interfaces/client";
import { Address } from "../interfaces/general";
import { Item } from "../interfaces/logistics/items";
import { Sale } from "../interfaces/sales";
import { clients } from "./clients";

class sales {
    public static async createSale(items: Array<Item>, client: Client["_id"], billingAddress?: Address, shippingAddress?: Address) {
        // Get Client data
        const clientData = await clients.getClient(client);
        if (!client) { return false; } // Client doesnt exist or error
        
        const sale: Sale = {
            _id: new ObjectId(),
            items: items,
            client: clientData,
            address
        };
        return sale;
    }
}

export { sales };