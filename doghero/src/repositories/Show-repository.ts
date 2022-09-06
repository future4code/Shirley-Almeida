import { IShowModal } from "../models/IShowModal";

import { Database } from "../data/DataBase";

export class ShowRepository extends Database
implements IShowModal {
    #TABLE_NAME = "Create_tour";

    async find (id :string) {
        const [ found ] = await Database
        .connectionDatabase(this.#TABLE_NAME)
        .select("appointment_data" ,"duration", "start_walk", "finish_walk")
        .where("id", id);

        return found;
    };
};