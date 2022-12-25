import { ObjectId} from "mongodb";
import * as db from "../database";
class roles {
    
    /**
     * Returns all roles available
     * @function
     * @param {ObjectId} [id] Database Id of the role.
     * @param {string} [role] The author of the book.
     * @returns {object|null} Returns role or if it doesnt exsit returns null/false
     */
    public static async getRoles() {
        const initialDbClient = await db.generateConnection();
        try {
            const dbClient = initialDbClient.db("people").collection("roles");
            const result = await dbClient.find({}, { projection: {"_id": 0}}).toArray();
            return result;
        } catch (error) {
            console.log("Error: " + error);
            return false;
        } finally {
            initialDbClient.close();
        }
    }


    /**
     * Returns a role 
     * @function
     * @param {ObjectId} [id] Database Id of the role.
     * @param {string} [role] The author of the book.
     * @returns {object|null} Returns role or if it doesnt exsit returns null/false
     */
    public static async getRole(id?: ObjectId, role?: string) {
        const initialDbClient = await db.generateConnection();
        try {
            const dbClient = initialDbClient.db("people").collection("roles");
            if (typeof id != "undefined") {
                const resultId = dbClient.find({"_id": id}, { projection: {"_id": 0, "type": 0}});
                return resultId;
            } else if (typeof role != "undefined") {
                role = db.sanitizeInput(role);
                const resultRole = dbClient.find({"role": role});
                return resultRole;
            } else {
                return null;
            }
        } catch (error) {
            console.log("Error: " + error);
            return false;
        }
    }

    /**
     * Checks if user has a role (or a role inside a group)
     * @function
     * @param {ObjectId} uid User Id.
     * @param {string} role Role to check.
     * @returns {boolean} Returns true/false if user has role or not
     */
    public static async checkUserRole(uid: ObjectId, role: string) {
        const initialDbClient = await db.generateConnection();
        try {
            const dbClient = initialDbClient.db("people").collection("employees");
            const user = await dbClient.findOne({"_id": uid, "roles": role});
            return user;
        } catch (error) {
            console.log("Error: " + error);
            return false;
        } finally {
            initialDbClient.close();
        }
    }

    
}

export { roles };