//1. Leia o código abaixo: 

/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}  */

// a) Explique o que o código faz. Qual o teste que ele realiza? 
//Resposta: Ele pediu para que eu apresentasse um número, garantindo que 
// seria divisível por numero par para passar no teste. 
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//Resposta: Numero par 
// c) Para que tipos de números a mensagem é "Não passou no teste"?
//Resposta: Numeros ímpars 

//______________________________________//____________________________________________

//2. O código abaixo foi feito por uma pessoa desenvolvedora, 
//contratada para automatizar algumas tarefas de um supermercadolet fruta = prompt("Escolha uma fruta")

/* let fruta = prompt("escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

// a) Para que serve o código acima?
//Resposta: Para precificar o preço da fruta 

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//Resposta: O preço da fruta, Maçã é, R$ 2.25.

// c) Considere que um usuário queira comprar uma `Pêra`, 
// qual seria a mensagem impressa no console se retirássemos o `break` 
// que está logo acima do `default` (o `break` indicado pelo comentário 
//"BREAK PARA O ITEM c.")?
// Resposta: Ele irá imprimir 5
//________________________________________//________________________________________

// Leia o código abaixo:

/* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem) */

/*a) O que a primeira linha está fazendo?
Resposta: Se um numero for maior que 0

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal?
 E se fosse o número -10?
Resposta: Se for 10 será Esse numero passou no teste. Se for -10 será undefined
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.*/

//____________________________________________//____________________________________________

// Exercícios de escrita de código. 

/* Faça um programa que pergunta ao usuário qual a idade dele
 e imprima no console se ele/ela pode dirigir (apenas maiores de idade). */

/* const idade = Number(prompt("Qual sua idade?"))

if (idade >=18) {
   console.log("Ele(a) pode dirigir")
} else {
    console.log("Ele(a) não pode dirigir")

} */

//_______________________________________________//____________________________________

/* 2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
Utilize o bloco if/else */

/*  let turno = prompt("Qual turno você estuda? (M , V ou N)")

 if (turno === "M") {
    console.log("Bom dia!")
 } else if (turno === "V") {
     console.log("Boa Tarde!")
 } else if  (turno === "N") {
 console.log("Boa noite!")
} */

//____________________________________________//_________________________________________

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora. 

/* let turno = prompt("Qual turno você estuda? (M , V ou N)")

switch(turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V": 
        console.log("Boa tarde!")
        break
    case "N": 
        console.log("Boa Noite!")
        break
    default:
        console.log("Seja bem vindo!")
} */

//__________________________________________//____________________________________________

/* 4. Considere a situação: você vai ao cinema com um amigo ou amiga, 
porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
**e** se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou 
amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem:
 `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("` */

/* let cinema = prompt("Qual gênero de filme iremos assistir?")
let ingresso = Number(prompt("Digite o valor do ingresso:"))

if (cinema === "Fantasia" && ingresso < 15) {

    console.log("Bom filme!")
}

else {
    console.log("Escolha outro filme!")

} */


