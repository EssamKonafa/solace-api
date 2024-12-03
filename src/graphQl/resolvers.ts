import fs from "fs"
import database from "./_db.json";
const db = database.data.user

// Defining GraphQL resolvers to handle queries and mutations
export const resolvers = {

    // Resolver for the Query type
    Query: {
        async user() {
            try {
                return db;
            } catch (error) {
                console.error("Error fetching user data", error);
                throw new Error("Unable to fetch user data.");
            }
        },
    },
    // Resolver for the Mutation type
    Mutation: {
        async updateUser(_: any, args: any) {
            console.log(args);
            try {
                // Conditionally updating fields in the database if they exist in the input
                if (args.edit.firstName !== undefined) db.firstName = args.edit.firstName;
                if (args.edit.fatherName !== undefined) db.fatherName = args.edit.fatherName;
                if (args.edit.grandfatherName !== undefined) db.grandfatherName = args.edit.grandfatherName;
                if (args.edit.familyName !== undefined) db.familyName = args.edit.familyName;
                if (args.edit.nationalId !== undefined) db.nationalId = args.edit.nationalId;
                if (args.edit.maritalStatus !== undefined) db.maritalStatus = args.edit.maritalStatus;
                if (args.edit.dependants !== undefined) db.dependants = args.edit.dependants;

                // Writin the updated data back to the JSON file
                fs.writeFileSync('./_db.json', JSON.stringify(db, null, 2));
                return db;
            } catch (error) {
                console.error("Error updating user", error);
                throw new Error("Unable to update user data.");
            }
        },
    },
};