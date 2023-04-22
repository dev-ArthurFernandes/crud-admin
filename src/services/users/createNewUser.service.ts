import { client } from "../../database";
import { IUserRequest, IUserResponse } from "../../interfaces";
import format from "pg-format";
import { returnUserSchema } from "../../schemas/user.schemas";

const createUserService = async (payload: IUserRequest): Promise<IUserResponse> => {
    
    const queryString: string = format(`
        INSERT INTO 
            user(%I)
        VALUSE(%L)
        RETURNING *;
    `,
        Object.keys(payload),
        Object.values(payload)
    )

    const queryResult: IUserResponse = returnUserSchema.parse((await client.query(queryString)).rows[0]) 

    return queryResult
}

export default createUserService