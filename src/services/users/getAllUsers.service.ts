import { client } from "../../database";
import { UsersArray } from "../../interfaces";
import { returnUserSchema, userSchema } from "../../schemas";


const getAllUsersServices = async (): Promise<UsersArray> => {

    const queryString: string = `
        SELECT
            *
        FROM
            users;
    `

    return (await client.query(queryString)).rows.map((user) => {
        return returnUserSchema.parse(user)
    })
}

export default getAllUsersServices