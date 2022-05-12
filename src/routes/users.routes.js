import { Router } from "express"

import createUserController from "../controllers/createUserControllers"
import listUsersControllers from "../controllers/listUsersControllers"
import  updateUserControllers from "../controllers/updateUserControllers"
import deleteUserControllers from "../controllers/deleteUserControllers"
import userLoginControllers from "../controllers/userLoginControllers"
import verifyEmailAvaibalitityMiddleware from "../middlewares/verifyEmailAvaibility.middleware"
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware"

const router = Router()


router.get("", listUsersControllers);
router.post("", verifyEmailAvaibalitityMiddleware, createUserController);
router.put("/:id", verifyAuthTokenMiddleware, updateUserControllers);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserControllers)
router.post("/login", userLoginControllers)

export default router