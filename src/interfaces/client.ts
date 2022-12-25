import { ObjectId } from "mongodb";
import { Address } from "./general";

interface Client {
    _id: ObjectId | undefined,
    name: string, // Legal Name
    dob: string,
    email: string,
    vatId: string,
    address: Address
}

export { Client };