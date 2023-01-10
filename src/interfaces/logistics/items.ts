import { ObjectId } from "mongodb";
import { TaxRate } from "../taxes";

interface Item {
    // Net Price - no taxes
    // Gross Price - taxes included
    _id: ObjectId,
    itemId: number,
    name: string,
    ean: string, //EAN might start by 0 for a number would eliminate that
    description: string,
    characteristics: Array<ItemCharacteristics>,
    netPrice: number,
    quant: number,
    tax: TaxRate, // in percentage (23 = 23%)
    grossPrice: number
}

interface ItemCharacteristics{
    name: string,
    description: string | undefined, // Description is optional
    value: string,
    display: boolean
}

export { Item, ItemCharacteristics };