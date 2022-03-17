
//1. O que o código abaixo está fazendo? Qual o resultado impresso no console? resultado: 10


// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)


//2. Leia o código abaixo:


// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }


// a) O que vai ser impresso no console? resposta: os numeros a partir do numero 18.

/* b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
é suficiente? Se não, o que poderia ser usado para fazer isso? */ // Resposta: Não, posso usar for passando a condição. 

//3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? Resposta: Iria escalonar os asteriscos em 1 , 2 , 3,  4


// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }


/* Exercícios de escrita de código**
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array            
    
    c) Por fim, imprima o array com os nomes dos bichinhos no console */

/*     let bichos = []
     let qBichos = Number(prompt("Quantos bichinhos você tem?"))

         if (qBichos <= 0) {
         console.log("Que pena! Você pode adotar um pet")
        
     } else { 

         for (i=0; i<qBichos; i++) {

         let pets = prompt("Digite o nome do seu" +(i+1)+ "º pet")
        bichos.push(pets)         
     }                 
      
     }

     console.log(bichos) */


/*   2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. 
        Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
      
      a) Escreva um programa que **imprime** cada um dos valores do array original.
      
      b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
      
      c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
      
      d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". 
      Depois, **imprima** este novo array.
      
      e) Escreva um programa que imprima no console o maior e o menor números contidos no array original */

// //A.
// let arrayOriginal = [35, 87, 30, 50]
// let imprimeArray = (array) => {
//     for (let imprimeArray of array) {
//         console.log(imprimeArray)
//     }
// }

// imprimeArray(arrayOriginal)

// //B. 
// let arrayDivido = (array) => {
//     for (let arrayDivido of array)

//         console.log(arrayDivido / 10)

// }
// arrayDivido(arrayOriginal)

// //C. 

// let novoArray = (array) => {
//     arrayPar = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {

//             arrayPar[i] = array[i]

//         }
//     }

//     console.log(arrayPar)
// }
// novoArray(arrayOriginal)

// //D. 

// let arrayString = (array) => {
//     crieArray = []
//     for (let i = 0; i < array.length; i++) {

//         crieArray[i] = array[i]

//         console.log(`"O elemento do índex ${i} é: ${crieArray[i]}"`)
//     }

// }

// arrayString(arrayOriginal)

// //E. 

// let maiorMenor = (array) => {

//     let maior = 0
//     let menor = Infinity
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maior) {
//             maior = array[i]
//         }
//         if (array[i] < menor) {
//             menor = array[i]


//         }
        
//     }
//     console.log("O maior elemento é " + maior + " e o menor é " + menor)
// }
// maiorMenor(arrayOriginal)

