import { Request, Response, NextFunction} from "express";
import { client } from "../database";
import { AppError } from "../AppError";
import jwt from 'jsonwebtoken';
import { IUserResponse } from "../interfaces";

const verifyUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    var token = req.headers.authorization

    if(!token){
        throw new AppError("Missing Bearer Token", 401)
    }

    token = token.split(' ')[1]

    jwt.verify(token, String(process.env.SECRET_KEY), (error, decoded: any) => {

        if(error){
            throw new AppError(error.message, 401)
        }

        res.locals.userId = decoded.sub

        if(decoded.admin){
            return next()
        }
    })

    const userId: number = res.locals.userId

    var queryString: string = `
        SELECT
            *
        FROM
            users
        WHERE
            id = ${userId}
    `

    const user: IUserResponse | null = (await client.query(queryString)).rows[0]

    if(!user){
        throw new AppError("User not found", 404)
    }

    if(!user.active){
        throw new AppError("User not active")
    }

    if(userId === res.locals.userId){
        return next()
    }

    throw new AppError("Insufficient Permission", 403)
}

export default verifyUser