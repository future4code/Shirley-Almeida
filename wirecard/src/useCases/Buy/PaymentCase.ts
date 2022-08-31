import { IPaymentModel } from "../../models/IPaymentModel";

import { generateId } from "../../utils/generationId";

import {
    ErrorNotExistUser, 
    VerifyBuyType,
    VerifyIfContainRequestValues,
} from "../../errors/PaymentError"

interface IPaymentRequest {
    buyType: string;
    amount: number;
    idUser: string;
}

export class PaymentCase {
    constructor(
        private paymentModel: IPaymentModel
    ){}

    public async payment(request: IPaymentRequest){
        let {
            buyType, 
            amount,
            idUser,
        } = request

        if (!buyType || !amount || !idUser) {
            throw new VerifyIfContainRequestValues()
        }
        
      
        const foundUser = 
        await this.paymentModel.findUser(idUser)

        if (!foundUser){
            throw new ErrorNotExistUser() 
        }


        if (buyType !== "credit card" && buyType !== "ticket"){
            throw new VerifyBuyType()
        }

        const idBuy = generateId() 

        await this.paymentModel.payment({
            idBuy,
            buyType, 
            amount,
            idUser,
        })

        if (buyType === "ticket") return generateId()

        return "Transação efetuada com sucesso."
    }
}