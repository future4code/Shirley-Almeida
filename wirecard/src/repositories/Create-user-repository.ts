import { Database } from "../data/DataBase"

import {
    ICreateUserModel,
    ICreateUserModelData,
} from "../models/ICreateUserModel"

export class CreateUserRepository
    extends Database implements ICreateUserModel {
    private TABLE_NAME = "User"

    public async create(data: ICreateUserModelData) {
        const { idUser, nameUser, email, cpf } = data
        await Database.connectionDatabase(this.TABLE_NAME)
            .insert({
                id_user: idUser, 
                name_user: nameUser, 
                email, 
                cpf, 
            })
    }

    public async findUser (email: string) {
        const [foundUser] = await Database.connectionDatabase(this.TABLE_NAME)
        .where("email", email)
        
        return !!foundUser
    }
}
