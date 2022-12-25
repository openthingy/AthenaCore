import { Address } from "./general";

interface Employee {
    id: string,
    name: string,
    dob: Date,
    address: Address,
    vatId: string,
    ssn: string,
    title: string,
    email: string,
    phoneNumber: string | null, // Not required as not all employees have a company phone number
    password: string
    roles: Array<string>
}

export { Employee };