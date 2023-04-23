import { client } from "../../database";
import { IUserResponse } from "../../interfaces";
import { returnUserSchema } from "../../schemas";


const recoverUserService = async (userId: number): Promise<IUserResponse> => {

    const queryString: string = `
        UPDATE
            users
        SET("active") = ROW(true)
        WHERE   
            id = ${userId};
    `

    return returnUserSchema.parse((await client.query(queryString)).rows[0])
}

export default recoverUserService