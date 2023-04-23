import { Request, Response, NextFunction } from 'express';
import { client } from '../database';
import { QueryConfig } from 'pg';
import { AppError } from '../AppError';


const validateEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const email: string = req.body.email

    const queryString: string = `
        SELECT
            *
        FROM
            users
        WHERE
            email = $1;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [email]
    }

    const queryResult: boolean = (await client.query(queryConfig)).rowCount? true : false

    if(queryResult){
        throw new AppError("E-mail already registered", 409)
    }

    return next()
}

export default validateEmail