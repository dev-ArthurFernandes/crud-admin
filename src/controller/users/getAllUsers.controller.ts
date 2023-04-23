import { Request, Response } from "express";
import { UsersArray } from "../../interfaces";
import { getAllUsersServices } from "../../services";



const getAllUsersController = async (req: Request, res: Response): Promise<Response> => {

    const users: UsersArray = await getAllUsersServices() 

    return res.json(users)
}

export default getAllUsersController