import { Router } from "express"

import createUserController from "../controllers/createUserControllers"
import listUsersControllers from "../controllers/listUsersControllers"
import  updateUserControllers from "../controllers/updateUserControllers"
import deleteUserControllers from "../controllers/deleteUserControllers"

const router = Router()


router.get("", listUsersControllers);
router.post("", createUserController);
router.put("/:id", updateUserControllers);
router.delete("/:id", deleteUserControllers)

export default router