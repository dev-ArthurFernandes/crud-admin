import { Request, Response, NextFunction } from "express";
import { client } from "../database";
import { AppError } from "../AppError";


const validateId = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const id: number = parseInt(req.params.id)

    const queryString: string = `
        SELECT
            *
        FROM    
            users
        WHERE
            id = ${id}
    `

    const queryResutl = (await client.query(queryString)).rowCount? true : false

    if(!queryResutl){
        throw new AppError("User not found", 404)
    }

    return next()
}

export default validateId