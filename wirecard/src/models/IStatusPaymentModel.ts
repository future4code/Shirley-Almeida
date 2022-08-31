export interface IStatusPaymentModelData {
    idUser: string;
};

interface IPaymentModelData {
    idBuy: string;
    buyType: string;
    amount: number;
    status: boolean;
}

interface IOutputModelData {
    nameUser: string;
    buys: IPaymentModelData[];
};

export interface IStatusPaymentModel {
    status: (data: IStatusPaymentModelData)
    => Promise<IOutputModelData | boolean>;
};