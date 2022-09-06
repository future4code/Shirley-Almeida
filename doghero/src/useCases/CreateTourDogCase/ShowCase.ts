import { IShowModal } from "../../models/IShowModal";

import { ErrorTourNotFound } from "../../errors/DogTourErros";

export class ShowCase {
    constructor(
        private showModal: IShowModal
    ){};

    async find ( request: {id: string} ) {
        const resultFound = await
        this.showModal.find(request.id);

        if ( !resultFound ) {
            throw new ErrorTourNotFound();
        };


        return resultFound;
    };
};