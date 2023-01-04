import { ObjectId } from "mongodb";
import { Employee } from "../interfaces/people";
import { employee } from "../people/employee";

console.log("Test 2: Inserting a employee");
const employeeData: Employee = {
    _id: new ObjectId(),
    empId: "123",
    name: "John Doe",
    dob: new Date("1990-01-01"),
    address: {
        street: "123 Main St",
        houseNumber: "42",
        postalCode: "10001",
        city: "New York",
        country: "USA"
    },
    title: "Software Engineer",
    vatId: "123456",
    ssn: "123-45-6789",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    password: "password",
    roles: ["employee"]
};

const insertedId = await employee.createEmployee(employeeData);
if (insertedId) {
    console.log("Test 2: Success");
    process.exit();
} else {
    console.log("Test 2: Failure");
    process.exit(1);
}
