import { Request, Response } from 'express';
import { IUserUpdate } from '../../interfaces';
import { updateUser } from '../../services';


const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const updateData: IUserUpdate = req.body

    const userId: number = parseInt(req.params.id)

    const newUser = await updateUser(updateData, userId)

    return res.json(newUser)
}

export default updateUserController