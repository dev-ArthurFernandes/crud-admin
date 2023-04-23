import { Router } from "express";
import { loginController } from "../controller";
import { ensureData } from "../middlewares";
import { loginSchem } from "../schemas";


const loginRouter = Router()

loginRouter.post('', ensureData(loginSchem),loginController)

export default loginRouter