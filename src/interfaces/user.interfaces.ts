import { z } from "zod";
import { 
    userSchema,
    returnUserSchema
} from "../schemas/user.schemas";

type IUserRequest = z.infer<typeof userSchema>

type IUserResponse = z.infer<typeof returnUserSchema>
 
type UsersArray = Array<IUserResponse>

export {
    IUserRequest,
    IUserResponse,
    UsersArray
}