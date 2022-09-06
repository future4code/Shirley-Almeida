interface IOutputShowData {
    id: string;
    appointment_data: Date;
    duration: number;
    start_walk: number;
    finish_walk:number;
};

export interface IShowModal {
    find: (id: string) => Promise<IOutputShowData>;
};