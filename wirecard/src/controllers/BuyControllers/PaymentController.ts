import { Request, Response } from "express-serve-static-core";

import { PaymentRepository } from "../../repositories/Payments-repository";

import { PaymentCase } from "../../useCases/Buy/PaymentCase";

import { CustomError } from "../../errors/CustomError";

export class PaymentController {
    public async payment(req: Request, res: Response) {
        try { 
            const {idUser} = req.params
            const {
                buyType, 
                amount,
            } = req.body 

            const paymentRepository = 
            new PaymentRepository()

            const paymentCase =
            new PaymentCase(paymentRepository)

           const result =  await paymentCase.payment({
                buyType,
                amount, 
                idUser,
            })

            return res.status(201).json(result)


            
        } catch (error:any) {
            return error instanceof CustomError ?
            res.status(error.statusCode).send(error.message)
            :
            res.status(500).send(error.message || error.sqlMessage)    
        }
    }
}