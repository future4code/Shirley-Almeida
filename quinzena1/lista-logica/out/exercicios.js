// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
const altura = prompt("Qual a sua altura")
const largura = prompt("Digite uma largura")

console.log (altura*largura)

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui

  const anoAtual = Number(prompt("Digite o ano atual"))
  const idade = Number(prompt("Digite sua idade"))

  console.log(anoAtual-idade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt("Digite seu peso:"))
  const altura = Number(prompt("Digite sua altura:"))
  const calculo1 = (altura * altura)
  const imc = (peso / calculo1)

  console.log(imc)

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui

  const nome = prompt("Digite seu nome")
  const idade = Number(prompt("Digite sua idade"))
  const email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

let cor1 = prompt("Digite sua cor favorita")
let cor2 = prompt("Digite sua segunda cor favorita")
let cor3 = prompt("Digite sua terceira cor favorita")

let cores = [cor1 , cor2, cor3]

console.log(cores)

}


// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

const palavra = prompt("Digite uma palavra")

console.log(palavra.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
let custo = Number(prompt("Qual o valor do ingresso?"))
let valor = Number(prompt("Qual a quantidade de lugares?"))

console.log(custo / valor)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
let string1 = prompt("Digite uma palavra:")
let string2 = prompt("Digite outra palavra:")

console.log(string1.length===string2.length)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let palavra1 = prompt("Digite uma palavra:")
  let palavra2 = prompt("Digite outra palavra:")

  let palavras = palavra1.toLocaleUpperCase() === palavra2.toLocaleUpperCase()


  console.log(palavras)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui

  let anoAtual = Number(prompt('Digite o ano atual: '))
  let anoNasc = Number(prompt('Digite seu ano de nascimento: '))
  let anoIdentidade = Number(prompt("Digite o ano de emissão da sua carteira de identidade: "))

  let idade = anoAtual - anoNasc
  let validadeIdentidade = anoAtual - anoIdentidade

  let faixaEtaria1 = idade <= 20 && validadeIdentidade >= 5
  let faixaEtaria2 = idade >= 20 && idade <= 50 &&  validadeIdentidade >= 10
  let faixaEtaria3 = idade > 50 && validadeIdentidade >= 15

  console.log(faixaEtaria1 || faixaEtaria2 || faixaEtaria3)
  
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  const checagemAno = prompt("Digite um ano")

  bissexto1 = (checagemAno % 400) == 0
  bissexto2 = ((checagemAno % 4 == 0) && (checagemAno % 100 != 0))
  bissextoNao = checagemAno && bissexto1 && bissexto2

console.log (bissextoNao || bissexto1 || bissexto2)


}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

let idade = (prompt("Você tem mais de 18 anos? (sim / não"))
let escolaridade = prompt("Você possui ensino médio completo?(sim /nao)")
let horarios = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

let respostas = idade === "sim" && escolaridade === "sim" && horarios === "sim"

console.log(respostas)
}