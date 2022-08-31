import { CustomError } from "./CustomError";

export class VerifyIfContainRequestValues 
extends CustomError {
  constructor () {
    super (
      "Verifique se não está faltando o id do usuário a quantidade e o tipo da transação!", 
       406
      );
  };
};

export class ErrorNotExistUser
extends CustomError {
  constructor () {
    super (
      `Usuário não enconstrado!`, 
       409
      );
  };
};

export class VerifyBuyType 
extends CustomError {
  constructor () {
    super (
      "O método de transação só pode ser credit card ou ticket!", 
       406
      );
  };
};