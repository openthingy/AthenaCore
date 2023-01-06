import { ObjectId } from "mongodb";
import { Client } from "./client";
import { Address } from "./general";
import { Item } from "./logistics/items";
import { Employee } from "./people";

interface Sale {
    _id: ObjectId,
    items: Array<Item>,
    client: Client,
    address: { // Could be the Client default addresses
        billing: Address,
        shipping: Address
    },
    grossTotal: number, // Gross Price - taxes included
    netTotal: number, // Net Price - no taxes
    taxesTotal: number, // Total in taxes
    paymentMethod: string,
    date: Date
    registeredBy: Employee["_id"]
}

export { Sale };