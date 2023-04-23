import format from "pg-format";
import { IUserResponse, IUserUpdate } from "../../interfaces";
import { client } from "../../database";
import { returnUserSchema } from "../../schemas";


const updateUser = async (payload: IUserUpdate, id: number): Promise<IUserResponse> => {

    const queryString: string = format(`
        UPDATE
            users
        SET(%I) = ROW(%L)
        WHERE
            id = ${id}
        RETURNING *;
    `,
        Object.keys(payload),
        Object.values(payload)
    )

    return returnUserSchema.parse((await client.query(queryString)).rows[0])

}

export default updateUser