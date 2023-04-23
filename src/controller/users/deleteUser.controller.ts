import { Request, Response} from 'express';
import { deleteUserService } from '../../services';


const deleteUserController = async (req: Request, res: Response): Promise<Response> => {

    const userId: number = parseInt(req.params.id)

    await deleteUserService(userId)

    return res.status(204).send()
}

export default deleteUserController