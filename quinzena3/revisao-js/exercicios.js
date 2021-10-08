// EXERCÍCIO 01
function inverteArray(array) {

  let arrayInvertido = []

  for (let i = array.length - 1; i >= 0; i--) {

    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  let numerosPares = []
  for (let item of array) {
    if (item % 2 == 0) {
      let elevado2 = item * item
      numerosPares.push(elevado2)
    }
  }
  return numerosPares
}


// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let nPares = []
  for (let item of array) {
    if (item % 2 == 0) {
      nPares.push(item)
    }
  }
  return nPares
}


// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let arrayMaior = array[0]

  for (let i = 0; i < array.length; i++) {
    let numero = array[i]
    if (numero > arrayMaior) {
      arrayMaior = numero

    }

  }
  return arrayMaior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {

  let qArray = array.length
  return qArray
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  booleano1 && booleano2 && !booleano4
    (booleano1 && booleano2) || !booleano3
      (booleano2 || booleano3) && (booleano4 || booleano1)
  !(booleano2 && booleano3) || !(booleano1 && booleano3)
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const respostas = [booleano1, booleano2, booleano3, booleano4]
  return respostas

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let retornaNumerosPares = []
  for (let i = 0; i < n; i++) {

    retornaNumerosPares.push(i * 2)

  }

  return retornaNumerosPares

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'

  if (a === b && b === c) {
    return 'Equilátero'
  }
  if (a === b || a === c || b === c) {
    return 'Isósceles'
  }
  if (a !== b && b !== c && c !== a) {
    return 'Escaleno'
  }

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }

  let maior
  let menor

  if (num1 > num2) {
    maior = num1
    menor = num2

  } else {
    menor = num1
    maior = num2
  }

  let divisivel = (maior % menor) === 0

  let valordif = (maior - menor)

  let objeto =
  {
    maiorNumero: maior,
    maiorDivisivelporMenor: divisivel,
    diferenca: valordif

  }
  return objeto

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  const novaArray = []

  for(item of array){
    let contador = 0
    for (itemComparado of array){
      if(item > itemComparado){
        contador ++
      }
    }
    novaArray[contador] = item    
  }
return [novaArray[novaArray.length-2], novaArray[1], ]
}
  

// EXERCÍCIO 11
function ordenaArray(array) {
  novoArray = []

  for (item of array) {
    let contador = 0
    for (itemComparado of array) {
      if (item > itemComparado) {
        contador = contador + 1
      }
    }
    novoArray[contador] = item
  }
    return novoArray
}
  // EXERCÍCIO 12
  function filmeFavorito() {

    let object = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: 'David Frankel',
      atores: ('Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci')
    }


  }

  // EXERCÍCIO 13
  function imprimeChamada() {
    // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  }

  // EXERCÍCIO 14
  function criaRetangulo(lado1, lado2) {

  }

  // EXERCÍCIO 15
  function anonimizaPessoa(pessoa) {
    return { ...pessoa, nome: "ANÔNIMO" }
  }


  // EXERCÍCIO 16A
  function maioresDe18(arrayDePessoas) {

  }

  // EXERCÍCIO 16B
  function menoresDe18(arrayDePessoas) {

  }

  // EXERCÍCIO 17A
  function multiplicaArrayPor2(array) {

  }

  // EXERCÍCIO 17B
  function multiplicaArrayPor2S(array) {

  }

  // EXERCÍCIO 17C
  function verificaParidade(array) {

  }

  // EXERCÍCIO 18A
  function retornaPessoasAutorizadas(pessoas) {

  }

  // EXERCÍCIO 18B
  function retornaPessoasNaoAutorizadas(pessoas) {

  }

  // EXERCÍCIO 19A
  function ordenaPorNome(consultasNome) {

  }

  // EXERCÍCIO 19B
  function ordenaPorData(consultasData) {

  }

  // EXERCÍCIO 20
  function calculaSaldo(contas) {

  }
