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

    const altura = Number(prompt("Qual a sua altura?"))
    const largura = Number(prompt("Digite uma largura"))

    console.log(altura*largura)
  }
  multiplicacao(altura , largura)


// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui

  const anoAtual = prompt("Digite o ano atual:")
  const anoNascimento = prompt("Digite o ano do seu nascimento:")

  console.log(anoAtual-anoNascimento)

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui

  const peso = Number(prompt("Digite seu peso:"))
  const altura = Number(prompt("Digite sua altura:"))
  
    imc2 = (altura * altura)
    imc = peso / imc2
  
  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {

  // escreva seu código aqui

const nome = prompt("Digite seu nome:")
const idade = Number(prompt("Digite sua idade:"))
const email = prompt("Digite seu email")

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

 let cor1 = prompt("Digite sua primeira cor favorita:")
 let cor2 = prompt("Digite sua segunda cor favorita:")
 let cor3 = prompt("Digite sua terceira cor favorita:")

let cores = [cor1 , cor2 , cor3]

 console.log(cores)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

  let palavra = prompt("Digite uma palavra:")

  console.log(palavra.toLocaleUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui

  let custoTeatro = Number(prompt("Digite o valor do teatro:"))
  let valorIngresso = Number(prompt("Digite o valor de cada ingresso:"))

  console.log(custoTeatro/valorIngresso)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui

  let palavra1 = prompt("Digite uma palavra:")
  let palavra2 = prompt("Digite outra palavra:")

  console.log(palavra1.length===palavra2.length)
  
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

  let string1 = prompt("Digite uma palavra:")
  let string2 = prompt("Digite outra palavra:")

  console.log(string1.toLocaleUpperCase()===string2.toLocaleUpperCase())

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
 
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento:"))
  let anoRg = Number(prompt("Digite o ano do seu RG:"))

  let idade = anoAtual - anoNascimento
  let documento = anoAtual - anoRg

  let faixaEtaria1 = idade <= 20 && documento >= 5
  let faixaEtaria2 = idade >= 20 && idade <= 50 &&  documento >= 10
  let faixaEtaria3 = idade > 50 && documento >= 15

  console.log(faixaEtaria1 || faixaEtaria2 || faixaEtaria3)

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  const ano = prompt("Digite um ano")

  bissexto1 = (ano % 400) == 0
  bissexto2 = ((ano % 4 == 0) && (ano % 100 != 0))
  bissextoNao = ano && bissexto1 && bissexto2

console.log (bissextoNao || bissexto1 || bissexto2)
     
}

// Exercício 12  
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

const idade = Number(prompt("Você tem mais de 18 anos (S/N)"))
let ensino = prompt("Você tem ensino médio? (S/N)")
let dispo = prompt("Você tem disponibilidade de horário? (S/N)")

let respostas = idade === "S" && ensino === "S" && dispo === "S"

console.log(respostas)

}