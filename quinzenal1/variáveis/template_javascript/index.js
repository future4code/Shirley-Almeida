const meuNome = "Shirley"
let minhaIdade = 38

console.log(typeof meuNome)
console.log(typeof minhaIdade)
// No primeiro momento deu erro, pois eu não declarei as variáveis com valor. 
// ao imprimir após os valores, apareceu o tipo de variável no console. 

const nome = prompt("Qual seu nome?")
const idade = prompt("E qual a sua idade?")

console.log ("Olá" , nome, "Você tem" , idade, "anos")

let hojeEstaSol = true 
let suaCamisaEhBranca = false
let gostaDeDoce = true

console.log("Hoje está sol! =" , hojeEstaSol)
console.log("Sua Camisa é branca! =" , suaCamisaEhBranca)
console.log("Ela gosta de doce! =" , gostaDeDoce)

let a = 10
let b = 25

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 

let c = a
 a = b
 b = c 

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 