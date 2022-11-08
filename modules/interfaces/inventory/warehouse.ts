import { address } from "../client.js";

interface WarehouseInfo {
    _id: string,    // ID is the Code for the warehouse (ex. OPOSC-01 Porto Santa Catarina 01)
    name: string,
    address: address
}
export { WarehouseInfo };