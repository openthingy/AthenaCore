import { ObjectId } from "mongodb";
import { client, address } from "./client.js";

interface itemsQuant {
    itemId: ObjectId,
    price: number, // Price per item at the sales date
    quant: number
}

interface sale {
    id: ObjectId,
    items: Array<itemsQuant>,
    client: client,
    shippingAddress: address | undefined
    status: "Payment Pending" | "Payment Failed" | "Canceled" | "Processing" | "Shipped" | "Completed" | "Refunded"
    date: Date
}

export { sale };