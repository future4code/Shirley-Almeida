import { request } from "express";
import { ICreateTourDogModal } from "../../models/ICreateTourDogModal";

import { generateId } from "../../utils/generationId";

import { 
    ErrorDuraction30,
    ErrorDuraction60,
    ErrorDuractionHours,
    ErrorRequestBody,
 } from "../../errors/DogTourErros";

import { 
    ValidateEmptyPropertiesOutput,
    validateEmptyProperties,
 } from "../../utils/validateEmptyProperties";

interface ICreateTourDogRequest {
    price: number;
    duration: number;
    quantityPets: number;
    latitude: string;
    longitude: string;
};

export class CreateTourDogCase {
    constructor(
        private readonly createTourDogModal: ICreateTourDogModal
    ){};

    async create (request: ICreateTourDogRequest) {
        let { 
            duration, 
            price, 
            quantityPets,
            latitude,
            longitude,
         } = request;

        const validationResult: ValidateEmptyPropertiesOutput = 
        validateEmptyProperties(request);

        if ( !validationResult.isValid ) {
            throw new ErrorRequestBody();
        };

        if ( duration !== 30 && duration !== 60 ){
            throw new ErrorDuractionHours();
        };


        if ( duration === 30 ) {
            if (price > 25 || price < 25) {
                throw new ErrorDuraction30();
            };
        };

        if ( duration === 60 ) {
            if (price > 35 || price < 35) {
                throw new ErrorDuraction60();
            };
        };

        if ( duration === 30 && quantityPets >= 2 ) {
            request.price = (quantityPets * 15) + price;
        };

        if ( duration === 60 && quantityPets >= 2 ) {
            request.price = (quantityPets * 20) + price;
        };

        const data = new Date();

        const id = generateId();
        const hour = data.getHours();
        const minutes = data.getMinutes();
        const hourAndMinutes = Number(`${hour}.${minutes}`);

        await this.createTourDogModal.create({
            id,
            status: "complete",
            appointment_data: new Date(),
            price: price,
            duration: duration,
            quantity_pets: quantityPets,
            latitude: latitude,
            longitude: longitude,
            start_walk: hourAndMinutes,
            finish_walk: duration === 60 ? hourAndMinutes + 1 : hourAndMinutes + 0.30,
        });

        return request;
    };
};