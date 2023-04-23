import { Request, Response } from 'express';
import { recoverUserService } from '../../services';
import { IUserResponse } from '../../interfaces';


const recoverUserController = async (req: Request, res: Response): Promise<Response> => {

    const userId: number = parseInt(req.params.id)

    const user: IUserResponse = await recoverUserService(userId)

    return res.json(user)
}

export default recoverUserController