import { Request, Response } from "express";
import { IUserRequest, IUserResponse } from "../../interfaces";
import { createUserService } from "../../services";

const createUserController =async (req:Request, res: Response): Promise<Response> => {
    
    const userData: IUserRequest = req.body

    const queryResult: IUserResponse = await createUserService(userData)

    console.log("Criou com sucesso!")
    return res.status(201).json(queryResult)
}

export default createUserController