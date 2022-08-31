import { Request, Response } from "express-serve-static-core" 

import {CreateUserRepository} from "../../repositories/Create-user-repository"
import {CreateUserCase} from "../../useCases/User/CreateUserCase"

import {CustomError} from "../../errors/CustomError"

export class CreateUserControllers {
    public async createController(req:Request, res:Response){
        try {
            const {
                nameUser, 
                email, 
                cpf, 
            } = req.body

            const createUserRepository = 
            new CreateUserRepository()
            
            const createUserCase =
            new CreateUserCase(createUserRepository)

            await createUserCase.createUser({
                nameUser, 
                email, 
                cpf,  
            })

            return res.status(201).json({message: `Usuário ${nameUser} criado com sucesso.`})
            
        } catch (error:any) {
         return error instanceof CustomError ?
         res.status(error.statusCode).send(error.message)
         :
         res.status(500).send(error.message || error.sqlMessage) 
        }
    }
}