import { 
    ICreateTourDogModal,
    ICreateTourDogModalData
 } from "../models/ICreateTourDogModal";

 import { Database } from "../data/DataBase";

 export class CreateTourDogRepository
 extends Database implements ICreateTourDogModal {
    #TABLE_NAME = "Create_tour";

    async create (data: ICreateTourDogModalData) {
        await 
        Database.connectionDatabase(this.#TABLE_NAME)
        .insert(data);
    };

    async findTour (id: string) {
        const [ foundTour ] = await
        Database.connectionDatabase(this.#TABLE_NAME)
        .where("id", id);

        return foundTour;
    };
 };