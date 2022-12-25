import { Employee } from "../interfaces/people";
import { employee } from "../people/employee";

async function addEmployee() {
    const employeeData: Employee = {
        id: "123",
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
        return true;
    } else {
        return false;
    }
}

addEmployee();