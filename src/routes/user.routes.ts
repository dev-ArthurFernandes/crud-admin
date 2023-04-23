import { Router } from "express";
import {
    createUserController,
    getAllUsersController,
    getUserController,
    updateUserController,
    deleteUserController,
    recoverUserController
} from "../controller";
import {
    ensureData,
    validateEmail,
    validateId,
    verifyUser,
    verifyUserIsActive
} from "../middlewares";
import {
    updateUserSchema,
    userSchema
} from "../schemas";

const userRouter = Router()

userRouter.post('', ensureData(userSchema), validateEmail, createUserController)

userRouter.get('', verifyUser, getAllUsersController)
userRouter.get('/profile', verifyUser, getUserController)

userRouter.patch('/:id', validateId, verifyUser, ensureData(updateUserSchema), updateUserController)

userRouter.delete('/:id', validateId, verifyUser, deleteUserController)

userRouter.put('/:id/recover', validateId, verifyUser, verifyUserIsActive, recoverUserController)

export default userRouter