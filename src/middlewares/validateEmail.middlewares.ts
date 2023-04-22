import { Request, Response, NextFunction } from "express";
import { client } from "../database";
import { AppError } from "../AppError";
import { QueryConfig } from "pg";


const validateEmail = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const email: string | null= req.body.email || null

    if(!email){
        return next()
    }

    const queryString: string = `
        SELECT
            *
        FROM
            users
        WHERE
            email = $1
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [email]
    }

    const queryResult: boolean = (await client.query(queryConfig)).rowCount? true : false
    
    if(queryResult){
        throw new AppError(409, "E-mail already registered")
    }

    return next()
}

export default validateEmail