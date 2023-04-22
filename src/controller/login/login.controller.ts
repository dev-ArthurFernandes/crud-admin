import { Request, Response } from "express";
import { ILogin } from "../../interfaces";
import {loginService} from "../../services";


const loginController = async (req: Request, res: Response): Promise<Response> => {

    const loginData: ILogin = req.body

    const token = await loginService(loginData)

    return res.json({
        token: token
    })
}

export default loginController