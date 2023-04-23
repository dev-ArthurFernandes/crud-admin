import { QueryConfig } from "pg";
import { ILogin } from "../../interfaces";
import { client } from "../../database";
import { AppError } from "../../AppError";
import { compare } from "bcryptjs";
import jwt from 'jsonwebtoken';
import 'dotenv/config'

const loginService = async (payload: ILogin): Promise<string> => {

    const queryString: string =`
        SELECT 
            *
        FROM
            users
        WHERE
            email = $1
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [payload.email]
    }

    const user = (await client.query(queryConfig)).rows[0]

    const email: string | null = user.email || null

    const password: string | null = user.password || null


    if(!email || !(await compare(password!, payload.password))){
        throw new AppError("Wrong email/password", 401)
    }

    const token: string = jwt.sign(
        {
            admin: user.admin
        },
        String(process.env.SECRET_KEY),
        {
            expiresIn: String(process.env.EXPIRES_IN),
            subject: user.id
        }
    ) 

    return token

}

export default loginService