/*const filme = {
nome: "Auto da Compadecida", 
ano: 2000, 
elenco: [
  "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
  "Virginia Cavendish"
  ], 
transmissoesHoje: [
  {canal: "Telecine", horario: "21h"}, 
  {canal: "Canal Brasil", horario: "19h"}, 
  {canal: "Globo", horario: "14h"}
  ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//a) O que vai ser impresso no console?
R:  Matheus Nachtergaele
Virginia Cavendish
Globo, 14h */


//_________________________//___________________________

//2. Leia o código abaixo

/* const filme = {
  nome: "Auto da Compadecida", 
  ano: 2000, 
  elenco: [
    "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    "Virginia Cavendish"
    ], 
  transmissoesHoje: [
    {canal: "Telecine", horario: "21h"}, 
    {canal: "Canal Brasil", horario: "19h"}, 
    {canal: "Globo", horario: "14h"}
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]) */

// a) O que vai ser impresso no console?

//_________________________________//________________________________

//2. Leia o código abaixo
/* const cachorro = {
  nome: "Juca", 
  idade: 3, 
  raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) */

//O que vai ser impresso no console?
/*Resposta:
Juca, 3, SRD
Juba, 3, SRD
Jubo, 3, SRD*/

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//Resposta: Copia as propriedades do objeto anterior. 
//_______________________________//___________________________________
// 3. Leia o código abaixo

/* function minhaFuncao(objeto, propriedade) {
  return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) */

//a) O que vai ser impresso no console?
// Resposta: False e undefined
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Resposta: Porque eu imprimi apenas backender e não existe altura. 

//________________________________________//_________________________________

//1. Resolva os passos a seguir 
/* a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
(um array que sempre terá exatamente três apelidos). Depois, escreva uma função que 
recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:  */


// Exemplo de entrada
/* const pessoa = {
nome: "Amanda", 
apelidos: ["Amandinha", "Mandinha", "Mandi"]
} 

 Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi" */

// const pessoa = {
//   nome: 'Shirley',
//   apelidos: ['Shi', 'Shirloca', 'Shir']
// }
// function receberPessoa(pessoa) {
//   console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} 
// ou ${pessoa.apelidos[2]}`)
// }

// receberPessoa(pessoa)

/*b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome,
 mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando
 como argumento o novo objeto*/

//  const novaPessoa = {
//   ...pessoa,
//   apelidos: ['Shi1', 'Shi2', 'Shi3'],
// }
// receberPessoa(novaPessoa)

/*
 2 - Resolva os passos a seguir: 
a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`
- Exemplo

    const pessoa = {
      nome: "Bruno", 
      idade: 23, 
      profissao: "Instrutor"
    }

    minhaFuncao(pessoa)

    Retorno: ["Bruno", 5, 23, "Instrutor", 9]
*/

// const pessoa1 = {

//   nome: "Shirley", 
//   idade: 18 ,
//   profissao: "Programadora"
// }

// const pessoa2 = {

//   nome: "John", 
//   idade: 20 ,
//   profissao: "Programador"
// }

// function recebeObjeto(pessoa1) {
// console.log([pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, 
//   pessoa1.profissao.length])

// }

// recebeObjeto(pessoa1)
// recebeObjeto(pessoa2)

//3. Resolva os passos a seguir:

/* a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

b) Crie três novos objetos que representem frutas de um sacolão. 
Eles devem ter as seguintes propriedades: 
nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

c) Crie uma função que **receba** 
um objeto fruta por **parâmetro** e 
coloque-a dentro do array de `carrinho`. 
Invoque essa função passando os três objetos criados. 

d) Imprima a variável carrinho e garanta que ela agora seja um array 
preenchido com três objetos */

// let carrinho = []

// let fruta1 = {

//   nome: 'banana',
//   dispo: true,
  
// }

// let fruta2 = {

//   nome: 'uva',
//   dispo: true,
  
// }

// let fruta3 = {

//   nome: 'morango',
//   dispo: true,
  
// }

// function sacolao() {
// carrinho.push(fruta1)  
// carrinho.push(fruta2)
// carrinho.push(fruta3)

// console.log(carrinho)
// }

// sacolao()