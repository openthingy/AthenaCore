import { ObjectId } from "mongodb";
import * as db from "../database";
import { Employee } from "../interfaces/people";

class employee {
    /**
     * Create a new employee
     * @function
     * @param {Employee} employee Employee object
     * @returns {ObjectId|null} Returns the employee Id if it was created
     */
    public static async createEmployee(employee: Employee) {
        const dbClient = await db.generateConnection();
        try {
            const empCollection = dbClient.db("people").collection("employees");
            const newEmployee = await empCollection.insertOne(employee);
            if (newEmployee.acknowledged)   {
                return newEmployee.insertedId;
            } else {
                return false;
            }
        } catch (error) {
            console.log("Error: " + error);
            return false;
        } finally {
            dbClient.close();
        }
    }

    /**
     * Get all employees
     * @function
     * @returns {object|null} Returns all employees
     */
    public static async getEmployees() {
        const dbClient = await db.generateConnection();
        try {
            const empCollection = dbClient.db("people").collection("employees");
            const result = await empCollection.find({}).toArray();
            return result;
        } catch (error) {
            console.log("Error: " + error);
        } finally {
            dbClient.close();
        }
    }

    /**
     * Get a specific employee using Id or email
     * @function
     * @param {ObjectId} [id]          Internal Database Id.
     * @param {Employee["id"]} [empId] Internal Database Id.
     * @param {Employee["email"]} [id] Internal Database Id.
     * @returns {object|null} Returns the employee if it exists
     */
    public static async getEmployee(id?: ObjectId, empId?: Employee["id"], email?: Employee["email"]) {
        if (typeof id != "undefined") {
            return this.getEmployeeById(id);
        } else if (typeof empId != "undefined") {
            return this.getEmployeeByEmpId(empId);
        } else if (typeof email != "undefined") {
            return this.getEmployeeByEmail(email);
        } else {
            throw Error("No option selected, usage ex.: getEmployee(undefined, email@example.com");
        }
    }

    /**
     * Get a specific employee using Id
     * @function
     * @private
     * @param {ObjectId} id User Id.
     * @returns {object|null} Returns the specific employee
     */
    private static async getEmployeeById(id: ObjectId) {
        const dbClient = await db.generateConnection();
        try {
            const empCollection = dbClient.db("people").collection("employees");
            const result = await empCollection.findOne({"_id": id});
            return result;
        } catch (error) {	
            console.log("Error: " + error);
            return false;
        } finally {
            dbClient.close();
        }
    }

    /**
     * Get a specific employee using the Employee Id
     * @function
     * @private
     * @param {Employee["id"]} empid Employee Id.
     * @returns {object|null} Returns the specific employee
     */
    private static async getEmployeeByEmpId(empId: Employee["id"]) {
        const dbClient = await db.generateConnection();
        try {
            const empCollection = dbClient.db("people").collection("employees");
            const result = await empCollection.findOne({"id": empId});
            return result;
        } catch (error) {	
            console.log("Error: " + error);
            return false;
        } finally {
            dbClient.close();
        }
    }

    /**
     * Get a specific employee using email
     * @function
     * @private
     * @param {string} email Employee email
     * @returns {object|null} Returns the specific employee
     */
    private static async getEmployeeByEmail(email: string) {
        const dbClient = await db.generateConnection();
        try {
            const empCollection = dbClient.db("people").collection("employees");
            const result = await empCollection.findOne({"email": email});
            return result;
        } catch (error) {	
            console.log("Error: " + error);
        } finally {
            dbClient.close();
        }
    }

    /**
     * Get employee roles and groups
     * @function
     * @param {ObjectId} id Employee Database Id
     * @returns {object|null} Returns the roles for an employee
     */
    public static async getEmployeeRoles(id: ObjectId) {
        
        const dbClient = await db.generateConnection();
        try {
            const empCollection = dbClient.db("people").collection("employees");
            const result = await empCollection.findOne({"id": id}, { projection: {"roles": 1}});
            return result;
        } catch (error) { 
            console.log("Error: " + error);
            return false;
        } finally {
            dbClient.close();
        }
    }

}

export { employee };