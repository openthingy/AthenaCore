import { ObjectId } from "mongodb";
import { Client } from "./client";
import { Address } from "./general";

interface ItemsQuantity {
    itemId: ObjectId,
    price: number, // Price per item at the sales date
    quant: number
}

interface Sale {
    _id: ObjectId,
    items: Array<ItemsQuantity>,
    client: Client,
    shippingAddress: Address | undefined
    status: "Payment Pending" | "Payment Failed" | "Canceled" | "Processing" | "Shipped" | "Completed" | "Refunded"
    date: Date
}

export { Sale };