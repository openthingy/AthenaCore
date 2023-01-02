import { ObjectId } from "mongodb";

interface TaxRate {
    _id: ObjectId,
    countryCode: string,
    taxPercentage: number,
    title: string,
    description: string
}

export { TaxRate };