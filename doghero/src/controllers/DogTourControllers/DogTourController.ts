import { Request, Response } from "express";

import { 
    CreateTourDogRepository,
 } from "../../repositories/Create-tour-dog-repository";
 
import { 
    CreateTourDogCase,
 } from "../../useCases/CreateTourDogCase/CreateTourDogCase";

import { ShowRepository } from "../../repositories/Show-repository";
 
import { ShowCase } from "../../useCases/CreateTourDogCase/ShowCase"; 

import { CustomError } from "../../errors/CustomError";

export class DogTourController {
    async create (req: Request, res: Response) {
       try {
        let { 
            duration, 
            price, 
            quantityPets,
            latitude,
            longitude,
         } = req.body;

         const createTourDogRepository =
         new CreateTourDogRepository();

         const createTourDogCase =
         new CreateTourDogCase(createTourDogRepository);

         if ( quantityPets === 0 ) quantityPets = 1;

         const result = await createTourDogCase.create({
            duration, 
            price, 
            quantityPets,
            latitude,
            longitude,
         });

         return res.status(201).json(result);
       } catch (error: any) {
        return error instanceof CustomError 
        ? res.status(error.statusCode).send(error.message)
        : res.status(500).send(error.message || error.sqlMessage)
       };
    };

    async findShowDog (req: Request, res: Response) {
      try {
         const { id } = req.params;

         const showRepository = new ShowRepository();
         const showCase = new ShowCase(showRepository);

         const result = await showCase.find({id});
         
         return res.status(200).json(result);
      } catch (error: any) {
         return error instanceof CustomError 
         ? res.status(error.statusCode).send(error.message)
         : res.status(500).send(error.message || error.sqlMessage)
      }
    };
};