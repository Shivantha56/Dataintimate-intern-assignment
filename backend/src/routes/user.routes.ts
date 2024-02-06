import express from "express";
import * as UserController from '../service/user.service'

const router = express.Router();

//save user routes
router.post('/', UserController.saveUser )