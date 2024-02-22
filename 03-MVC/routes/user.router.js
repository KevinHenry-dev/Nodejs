import express from "express"
import { verifieToken } from "../middlewares/auth.js"

import { sign, updateUser, deleteUser, getUserById, getUsers, signup } from "../controllers/users.controller.js"

const router = express.Router()

router.post("/signup", signup)
router.post("/sign", sign)
router.get("/all", getUsers)
router.get("/get/:id", getUserById)
router.delete("/delete/:id", verifieToken, deleteUser)
router.put("/update/:id", verifieToken, updateUser)




export default router 