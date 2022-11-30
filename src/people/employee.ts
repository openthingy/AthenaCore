import { ObjectId } from "mongodb";
import * as db from "../database";

class employee {
    /**
     * Get all employees
     * @function
     * @returns {object|null} Returns all employees
     */
    public static async getEmployees() {
        const initialDbClient = await db.generateConnection();
        try {
            const dbClient = initialDbClient.db("people").collection("employees");
            const result = await dbClient.find({}).toArray();
            return result;
        } catch (error) {
            console.log("Error: " + error);
        } finally {
            initialDbClient.close();
        }
    }

    /**
     * Get a specific employee using Id or email
     * @function
     * @param {ObjectId} [uid] User Id.
     * @param {string} [role] Role to check.
     * @returns {object|null} Returns the employee if it exists
     */
    public static async getEmployee(id?: ObjectId, email?: string) {
        if (typeof id != "undefined") {
            return this.getEmployeeById(id);
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
     * @param {ObjectId} uid User Id.
     * @returns {object|null} Returns the specific employee
     */
    private static async getEmployeeById(id: ObjectId) {
        const initialDbClient = await db.generateConnection();
        try {
            const dbClient = initialDbClient.db("people").collection("employees");
            const result = await dbClient.findOne({"_id": id});
            return result;
        } catch (error) {	
            console.log("Error: " + error);
            return false;
        } finally {
            initialDbClient.close();
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
        const initialDbClient = await db.generateConnection();
        try {
            const dbClient = initialDbClient.db("people").collection("employees");
            const result = await dbClient.findOne({"email": email});
            return result;
        } catch (error) {	
            console.log("Error: " + error);
        } finally {
            initialDbClient.close();
        }
    }

    /**
     * Get employee roles and groups
     * @function
     * @param {ObjectId} id Employee Database Id
     * @returns {object|null} Returns the roles for an employee
     */
    public static async getEmployeeRoles(id: ObjectId) {
        
        const initialDbClient = await db.generateConnection();
        try {
            const dbClient = initialDbClient.db("people").collection("employees");
            const result = await dbClient.findOne({"id": id}, { projection: {"roles": 1}});
            return result;
        } catch (error) { 
            console.log("Error: " + error);
            return false;
        } finally {
            initialDbClient.close();
        }
    }

}

export { employee };