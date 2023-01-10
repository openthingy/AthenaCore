import { ObjectId } from "mongodb";

interface TaxRate {
    _id: ObjectId,
    countryCode: string,
    type: "percentage" | "fixed", // only 2 possible options
    taxPercentage: number,
    title: string,
    description: string
}

export { TaxRate };