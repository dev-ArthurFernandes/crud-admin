import { Router } from "express";
import {
    createUserController,
    getAllUsersController,
    getUserController
} from "../controller";
import {
    ensureData, verifyUser
} from "../middlewares";

const userRouter = Router()

userRouter.post('', ensureData, createUserController)

userRouter.get('', verifyUser, getAllUsersController)
userRouter.get('/profile', verifyUser, getUserController)

export default userRouter