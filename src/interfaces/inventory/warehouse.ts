import { Address } from "../client";

interface WarehouseInfo {
    _id: string,    // ID is the Code for the warehouse (ex. OPOSC-01 aka Porto Santa Catarina 01)
    name: string,
    address: Address
}
export { WarehouseInfo };