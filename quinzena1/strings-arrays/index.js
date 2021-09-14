//1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

// let array 
// console.log('a.', array) - Resposta: Undefined 

// array = null
// console.log('b.', array) - Resposta: Null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c.', array.length) - Resposta: 11

// let i = 0
// console.log('d.', array[i]) - Resposta: 0

// array[i+1] = 19
// console.log('e.', array)

// const valor = array[i+6]
// console.log**('f.', valor)**

//_____________________________________________________//__________________________________________

//Leia o código abaixo com atenção 

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//__________________________________________________//______________________________________________

//Exercícios de escrita de código
 
//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

// const nome = prompt("Qual seu nome?")
// const emmail = prompt("Qual seu e-mail?")

// console.log("O e-mail" , emmail , "foi cadastrado com sucesso. Seja bem-vindo(a)," , nome)

//____________________________________________________//_________________________________________________
// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    //a) Imprima na tela o array completo
    //b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    //c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

// let comidas = ["feijoada" , "churrasco" , "saladas" , "comida-japonesa" , "pizza"]

// console.log(comidas)

// console.log("Essas são as minhas comidas preferidas:" +(comidas)) // Verificar como colocar uma embaixo da outra. 

// let comidaPreferida = prompt("Digita sua comida preferida:")


//__________________________________________________//_____________________________________________________
// 3. Faça um programa, seguindo os passos: 

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// c) Imprima o array na tela
// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
// e) Remova da lista o item de índice que o usuário escolheu.
// f) Imprima o array na tela

// let tarefa = []
// let listaDeTarefas = tarefa 

// tarefa[0] = prompt ("Digite sua primeira tarefa a realizar")
// tarefa[1] = prompt ("Digite sua segunda tarefa a realizar")
// tarefa[2] = prompt ("Digite sua terceira tarefa a realizar")

// console.log(tarefa)
// listaDeTarefas = tarefa.splice(Number(prompt("numero")) , 1)
// console.log(tarefa)

//__________________________________________________//_____________________________________________________

