export interface ICreateTourDogModalData {
    id: string;
    status: string;
    appointment_data: Date;
    price: number;
    duration: number;
    quantity_pets: number;
    latitude: string;
    longitude: string;
    start_walk: number;
    finish_walk:number;
};

interface IOutpuDataFindTour {
    duration: number;
    start_walk: number;
    finish_walk:number;
};

export interface ICreateTourDogModal {
    create: (data: ICreateTourDogModalData)
    => Promise<void>;

    findTour: (id: string) => Promise<IOutpuDataFindTour>; 
};