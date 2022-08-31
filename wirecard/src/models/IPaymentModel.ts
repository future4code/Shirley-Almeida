export interface IPaymentModelData {
    idBuy: string;
    buyType: string;
    amount: number;
    idUser: string;
}

export interface IPaymentModel {
    payment: (paymentMethod: IPaymentModelData)
    => Promise<void>; 
    findUser: (idUser: string) => Promise<boolean>;
}