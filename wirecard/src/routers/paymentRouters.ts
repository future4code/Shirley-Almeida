import express from 'express'

import { PaymentController } from '../controllers/BuyControllers/PaymentController'
import { StatusPaymentController } from '../controllers/BuyControllers/StatusPaymentController'


export const paymentRouters = express.Router()

const paymentController = new PaymentController()
const statusPaymentController = new StatusPaymentController();

paymentRouters.get('/:idUser', statusPaymentController.status)
paymentRouters.post('/:idUser', paymentController.payment)
