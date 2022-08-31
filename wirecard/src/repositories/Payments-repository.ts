import {
    IPaymentModel, 
    IPaymentModelData
} from "../models/IPaymentModel"

import { Database } from "../data/DataBase" 

export class PaymentRepository
extends Database implements IPaymentModel{
    private TABLE_NAME_PURCHASE = "Purchase" 
    private TABLE_NAME_USER = "User"

    public async payment ({
        idBuy,
        buyType,
        amount,
        idUser
    }: IPaymentModelData) {
        await Database.connectionDatabase(this.TABLE_NAME_PURCHASE)
        .insert({
            id_buy: idBuy,
            amount,
            buy_type: buyType,
            id_buy_ref: idUser,
        })
    }
 
    public async findUser(idUser: string){
        const [foundUser] = await 
        Database.connectionDatabase(this.TABLE_NAME_USER)
        .where("id_user", idUser)

        return !!foundUser
    }
}