export interface ICreateUserModelData {
    idUser: string; 
    nameUser: string;
    email: string;
    cpf: string;
}

export interface ICreateUserModel {
    create: (data: ICreateUserModelData)
    => Promise<void>;

    findUser: (email: string) => Promise<boolean>;
}