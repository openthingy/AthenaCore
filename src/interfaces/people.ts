import { Address } from "./general";

interface People {
    name: string,
    dob: Date,
    address: Address,
    vatId: string,
    ssn: string,
    email: string,
    phoneNumber: string
}

export { People };