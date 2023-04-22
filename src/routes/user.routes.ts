import { Router } from "express";
import { createUserController } from "../controller";
import { ensureData, validateEmail } from "../middlewares";
import { userSchema } from "../schemas/user.schemas";

const userRouter = Router()

userRouter.post("", ensureData(userSchema), validateEmail, createUserController)

export default userRouter