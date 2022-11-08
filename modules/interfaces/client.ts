import { ObjectId } from "mongodb";


interface Address {
    street: string,
    houseNumber: string,
    postalCode: string,
    city: string,
    country: string
}

interface Client {
    _id: ObjectId
    name: string,
    vatId: string,
    address: Address
}

export { Address, Client };