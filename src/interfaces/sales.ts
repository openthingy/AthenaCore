import { ObjectId } from "mongodb";
import { Client } from "./client";
import { Address } from "./general";
import { taxRate } from "./taxes";

interface Item {
    itemId: ObjectId,
    price: number,
    quant: number,
    tax: taxRate // in percentage (23 = 23%)
}

interface Sale {
    _id: ObjectId,
    items: Array<Item>,
    client: Client,
    address: {
        billing: Address,
        shipping: Address
    },
    status: string,
    date: Date
}

export { Sale };