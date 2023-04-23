import { z } from "zod";
import { 
    userSchema,
    returnUserSchema,
    updateUserSchema
} from "../schemas/user.schemas";

type IUserRequest = z.infer<typeof userSchema>

type IUserResponse = z.infer<typeof returnUserSchema>
 
type UsersArray = Array<IUserResponse>

type IUserUpdate = z.infer<typeof updateUserSchema>

export {
    IUserRequest,
    IUserResponse,
    UsersArray,
    IUserUpdate
}