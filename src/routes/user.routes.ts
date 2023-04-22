import { Router } from "express";
import {
    createUserController,
    getAllUsersController,
    getUserController,
    updateUserController
} from "../controller";
import {
    ensureData, validateId, verifyUser
} from "../middlewares";
import { updateUserSchema, userSchema } from "../schemas";
const userRouter = Router()

userRouter.post('', ensureData(userSchema), createUserController)

userRouter.get('', verifyUser, getAllUsersController)
userRouter.get('/profile', verifyUser, getUserController)

userRouter.patch('/:id', validateId, verifyUser, ensureData(updateUserSchema),updateUserController)

export default userRouter