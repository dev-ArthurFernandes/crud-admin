import { client } from "../../database";
import { UsersArray } from "../../interfaces";


const getAllUsersServices = async (): Promise<UsersArray> => {

    const queryString: string = `
        SELECT
            *
        FROM
            users;
    `

    return (await client.query(queryString)).rows
}

export default getAllUsersServices