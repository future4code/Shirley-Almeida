import { 
    IStatusPaymentModel,
    IStatusPaymentModelData
 } from "../models/IStatusPaymentModel";

 import { Database } from "../data/DataBase";

 export class StatusPaymentRepository
 extends Database implements IStatusPaymentModel {
    private TABLE_NAME_PURCHASE = "Purchase" 
    private TABLE_NAME_USER = "User"

    public async status(data: IStatusPaymentModelData) {
        const [foundUser] = await
        Database.connectionDatabase(this.TABLE_NAME_USER)
        .select("name_user").where("id_user", data.idUser);

        if (!foundUser) return false;
        
        const result = await
        Database.connectionDatabase(this.TABLE_NAME_USER)
         .select("id_buy", "amount", "buy_type")
        .innerJoin(
            `${this.TABLE_NAME_PURCHASE}`,
            `User.id_user`,
            `Purchase.id_buy_ref`
        ).where("id_user", data.idUser);

        const addStatus = result.map((i) => {
            i.status = true
            return i
        })

        const resultObj = {
            nameUser: foundUser?.name_user,
            buys: addStatus,
        };

        return resultObj;
    };
 };