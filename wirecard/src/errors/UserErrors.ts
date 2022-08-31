import { CustomError } from "./CustomError";

export class VerifyIfContainRequestValues 
extends CustomError {
  constructor () {
    super (
      "Verifique se não está faltando o nome, cpf e email!", 
       406
      );
  };
};

export class CheckIfEmailIsCorrect 
extends CustomError {
  constructor (public email: string) {
    super (
      `Esse email não segue o padrão correto: ${email}!`, 
       409
      );
  };
};

export class VerifyIfExistUser 
extends CustomError {
  constructor () {
    super (
      "Esse email já está cadastrado no sistema!", 
       406
      );
  };
};