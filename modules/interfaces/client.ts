import { ObjectId } from "mongodb";

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

export { address, client };