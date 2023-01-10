import { ObjectId } from "mongodb";
import { Address } from "./general";

interface Client {
    _id: ObjectId,
    name: string,
    email: string,
    vatId: string,
    address: {
        billing: Address,
        shipping: Address
    }
}

export { Client };