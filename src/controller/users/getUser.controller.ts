import { Request, Response } from "express";
import { IUserResponse } from "../../interfaces";
import { getUserService } from "../../services";


const getUserController = async (req: Request, res: Response): Promise<Response> =>{

    const userId: number = res.locals.userId

    const user: IUserResponse = await getUserService(userId)

    return res.json(user)
}

export default getUserController