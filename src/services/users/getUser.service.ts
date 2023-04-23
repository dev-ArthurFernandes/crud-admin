import { client } from "../../database"
import { IUserResponse } from "../../interfaces"
import { returnUserSchema } from "../../schemas/user.schemas"


const getUserService = async (userId: number): Promise<IUserResponse> => {

    const queryString: string = `
        SELECT
            *
        FROM
            users
        WHERE
            id = ${userId}
    `
    const queryResult: IUserResponse = returnUserSchema.parse((await client.query(queryString)).rows[0])

    return queryResult

}

export default getUserService