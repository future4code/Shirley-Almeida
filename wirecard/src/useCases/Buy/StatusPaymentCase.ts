import { IStatusPaymentModel } from "../../models/IStatusPaymentModel";

import { ErrorNotExistUser } from "../../errors/PaymentError"

interface IStatusPaymentRequest {
    idUser: string;
};

export class StatusPaymentCase {
    constructor(
        private statusPaymentModel: IStatusPaymentModel
    ){}

    public async status(request: IStatusPaymentRequest) {
        const {idUser} = request;

        const result = await this.statusPaymentModel
        .status({idUser});

        if (!result) throw new ErrorNotExistUser();

        return result;
    };
};