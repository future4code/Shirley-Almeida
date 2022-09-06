import  { Router }  from "express";

import { DogTourController } from "../controllers/DogTourControllers/DogTourController";

export const dogRouters = Router();

const dogTourController = new DogTourController();

dogRouters.get("/:id", dogTourController.findShowDog);
dogRouters.post("/create-tour", dogTourController.create);