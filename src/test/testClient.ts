import { ObjectId } from "mongodb";
import { Client } from "../interfaces/client";
import { clients } from "../sales/clients";


const client: Client = {
    _id: new ObjectId(),
    name: "John Smith",
    email: "john@smith.com",
    vatId: "1234567890",
    address: {
        street: "Main St",
        houseNumber: "1",
        postalCode: "12345",
        city: "New York",
        country: "USA",
    },
};

async function test() {
    const result = await clients.createClient(client);
    console.log(result);
    console.log("Getting the client");
    const getResult = await clients.getClient(new ObjectId());
    if (getResult) {
        console.log(getResult.address.city);
    }
}

test();
