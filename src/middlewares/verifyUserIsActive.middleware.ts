import { Request, Response, NextFunction } from "express";
import { client } from "../database";
import { IUserResponse } from "../interfaces";
import { userSchema } from "../schemas";
import { AppError } from "../AppError";


const verifyUserIsActive = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userId: number = parseInt(req.params.id)

    const queryString: string = `
        SELECT
            *
        FROM
            users
        WHERE   
            id = ${userId}
    `

    const user = (await client.query(queryString)).rows[0]

    if(user.active){
        throw new AppError('User already active')
    }
    
    return next()
}

export default verifyUserIsActive