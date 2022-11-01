import { ObjectId } from "mongodb";

interface itemsQuant {
    itemId: ObjectId,
    price: number, // Price per item at the sales date
    quant: number
}

interface address {
    street: string,
    houseNumber: string,
    postalCode: string,
    city: string,
    country: string
}

interface client {
    id: ObjectId,
    vatId: string,
    address: address
}

interface sale {
    id: ObjectId,
    items: Array<itemsQuant>,
    client: client,
    status: "Payment Pending" | "Payment Failed" | "Canceled" | "Processing" | "Shipped" | "Completed" | "Refunded"
    date: Date
}


export { sale };