import createUserController from "./users/createNewUser.controller";
import getAllUsersController from "./users/getAllUsers.controller";
import getUserController from "./users/getUser.controller";
import updateUserController from "./users/updateUser.controller";
import deleteUserController from "./users/deleteUser.controller";
import recoverUserController from "./users/recoverUser.controller";

import loginController from "./login/login.controller";

export {
    createUserController,
    getAllUsersController,
    getUserController,
    loginController,
    updateUserController,
    deleteUserController,
    recoverUserController
}