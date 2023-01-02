import { ObjectId } from "mongodb";
import { Client } from "./client";
import { Address } from "./general";
import { TaxRate } from "./taxes";

interface Item {
    // Net Price - no taxes
    // Gross Price - taxes included
    itemId: ObjectId,
    netPrice: number,
    quant: number,
    tax: TaxRate, // in percentage (23 = 23%)
    grossPrice: number
}

interface Sale {
    _id: ObjectId,
    items: Array<Item>,
    client: Client,
    address: { // Could be the Client default addresses
        billing: Address,
        shipping: Address
    },
    paymentMethod: string,
    date: Date
    registeredBy: Client["_id"]
}

export { Sale };