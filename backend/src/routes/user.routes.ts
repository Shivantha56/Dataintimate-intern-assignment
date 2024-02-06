import express from "express";
import * as UserController from '../service/user.service'
import multer  from 'multer'
const upload = multer({storage:multer.memoryStorage()})


const router = express.Router();

//save user routes
router.post("/", upload.single('avatar'),UserController.saveUser );

//get generated token for user
router.post("/token",UserController.getToken)

export default router