import { Address } from "./general";

interface Employee {
    id: string,
    name: string,
    dob: Date,
    address: Address,
    vatId: string,
    ssn: string,
    email: string,
    phoneNumber: string,
    password: string
    roles: Array<string>
}

export { Employee };