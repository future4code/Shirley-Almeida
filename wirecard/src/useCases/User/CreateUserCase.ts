import { ICreateUserModel } from "../../models/ICreateUserModel";

import { generateId } from "../../utils/generationId"
import { validateEmail } from "../../utils/validateEmail"

import {
    CheckIfEmailIsCorrect,
    VerifyIfContainRequestValues,
    VerifyIfExistUser,
} from "../../errors/UserErrors"

interface ICreateUserRequest {
    nameUser: string;
    email: string;
    cpf: string;
}

export class CreateUserCase {
    constructor(
        private readonly createUserModel: ICreateUserModel
    ){}

    public async createUser (request: ICreateUserRequest){
        const {
            nameUser, 
            email,
            cpf,
        } = request

        if (!nameUser || !email || !cpf){
            throw new VerifyIfContainRequestValues()
        }
    

        if (!validateEmail(email)){
            throw new CheckIfEmailIsCorrect(email)
        }

        const foundUser = await this.createUserModel.findUser(email)
        
        if (foundUser){
            throw new VerifyIfExistUser()
        }

        const idUser = generateId()

        await this.createUserModel.create({
            idUser, 
            nameUser,
            email,
            cpf
        })
    }
}