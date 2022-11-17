import { ObjectId } from "mongodb";


interface Address {
    street: string,
    houseNumber: string,
    postalCode: string,
    city: string,
    country: string
}

interface Client {
    _id: ObjectId | undefined,
    name: string, // Legal Name
    dob: string,
    email: string,
    vatId: string,
    address: Address
}

export { Address, Client };