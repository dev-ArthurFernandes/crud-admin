import { Router } from "express";
import { createUserController } from "../controller";
import { ensureData } from "../middlewares";

const userRouter = Router()

userRouter.post('', ensureData, createUserController)

export default userRouter