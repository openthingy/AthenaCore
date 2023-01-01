import { ObjectId } from "mongodb";

interface taxRate {
    _id: ObjectId,
    countryCode: string,
    taxPercentage: number,
    title: string,
    description: string
}

export { taxRate };