import { Request, Response } from "express-serve-static-core";

import { 
    StatusPaymentRepository
 } from "../../repositories/Status-payment-repository";
 import { 
     StatusPaymentCase
 } from "../../useCases/Buy/StatusPaymentCase";

 import { CustomError } from "../../errors/CustomError";

 export class StatusPaymentController {
    public async status (req: Request, res: Response){
        try {
            const { idUser } = req.params;

            const statusPaymentRepository =
            new StatusPaymentRepository();

            const statusPaymentCase =
            new StatusPaymentCase(statusPaymentRepository);
            
            const result = await 
            statusPaymentCase.status({idUser})

            return res.status(200).json(result);
        } catch (error: any) {
            return error instanceof CustomError ?
            res.status(error.statusCode).send(error.message)
            :
            res.status(500).send(error.message || error.sqlMessage)  
        }
    };
 };