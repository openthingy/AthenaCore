import { ObjectId } from "mongodb";
import { TaxRate } from "../taxes";

interface Item {
    // Net Price - no taxes
    // Gross Price - taxes included
    itemId: ObjectId,
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