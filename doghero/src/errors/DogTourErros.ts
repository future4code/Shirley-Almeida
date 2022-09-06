import { CustomError } from "./CustomError";

export class ErrorRequestBody extends CustomError {
    constructor(){
        super(
            "Verifique se não esta faltando nenhuma informação!.",
            406,
        );
    };
};


export class ErrorDuractionHours extends CustomError {
    constructor(){
        super(
            "o tempo de duração não pode ser maior que 30 ou 60 minutos!.",
            406,
        );
    };
};

export class ErrorDuraction30 extends CustomError {
    constructor(){
        super(
            "O preço para 30 minutos é 25 reais fixo!.",
            406,
        );
    };
};

export class ErrorDuraction60 extends CustomError {
    constructor(){
        super(
            "O preço para 60 minutos é 35 reais fixo!.",
            406,
        );
    };
};

export class ErrorTourNotFound extends CustomError {
    constructor(){
        super(
            "Esse passeio não existe ou não foi encontrado!.",
            406,
        );
    };
};