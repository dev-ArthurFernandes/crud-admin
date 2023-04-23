import { QueryConfig } from "pg";
import { ILogin } from "../../interfaces";
import { client } from "../../database";
import { AppError } from "../../AppError";
import * as bcrypt from "bcryptjs";
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

    const queryResult = await client.query(queryConfig)

    if(!queryResult.rowCount){
        throw new AppError("Wrong email/password", 401)
    }

    const user = queryResult.rows[0]

    const validPassword: boolean = await bcrypt.compare(payload.password,user.password)

    if(!user.active){
        throw new AppError("Wrong email/password", 401)
    }

    if(!validPassword){
        throw new AppError("Wrong email/password", 401)
    }

    const token: string = jwt.sign(
        {
            admin: user.admin
        },
        String(process.env.SECRET_kEY),
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(user.id)
        }
    )

    return token

}

export default loginService