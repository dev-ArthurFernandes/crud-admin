import { Router } from "express";
import userRouter from "./user.routes";
import loginRouter from "./login.routes";


const router = Router()

router.use('/users', userRouter)
router.use('/login', loginRouter)

export default router