import { ObjectId } from "mongodb";
import { Client } from "../interfaces/client";
import { Address } from "../interfaces/general";
import { Item } from "../interfaces/logistics/items";
import { Employee } from "../interfaces/people";
import { Sale } from "../interfaces/sales";
import { clients } from "./clients";

class sales {
    public static async createSale(items: Array<Item>, client: Client["_id"], employee: Employee["_id"],billingAddress?: Address, shippingAddress?: Address) {
        // Get Client data
        const clientData = await clients.getClient(client);
        if (clientData == null || clientData == false) {
            return false;
        }

        if (typeof billingAddress == "undefined") {
            billingAddress = clientData.address.billing;
        }
        if (typeof shippingAddress == "undefined") {
            shippingAddress = clientData.address.shipping;
        }

        // Calculate the gross total

        const sale: Sale = {
            _id: new ObjectId(),
            items: items,
            client: clientData,
            address: {
                billing: billingAddress,
                shipping: shippingAddress
            },
            grossTotal: 1,
            netTotal: 1,
            taxesTotal: 1,
            paymentMethod: "Multibanco",
            date: new Date(),
            registeredBy: new ObjectId()
        };
        return sale;
    }
}

export { sales };