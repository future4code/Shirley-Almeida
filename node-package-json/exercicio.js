// a) Responda como comentário no seu código: 
// como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// Resposta: 

// b) Crie um programa que receba seu nome e sua idade. 
// Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

const nome = process.argv[2]
const idade = process.argv[3]

console.log(`Olá, ${nome} você tem ${idade} anos.`)