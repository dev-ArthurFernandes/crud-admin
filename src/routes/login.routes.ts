import { Router } from "express";
import { loginController } from "../controller";


const loginRouter = Router()

loginRouter.post('', loginController)

export default loginRouter