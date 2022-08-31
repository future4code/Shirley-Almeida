import  express  from "express";

import { CreateUserControllers } from "../controllers/UserControllers/CreateUserControllers";

export const userRouters = express.Router()

const createUserControllers = new CreateUserControllers()

userRouters.post("/register", createUserControllers.createController)