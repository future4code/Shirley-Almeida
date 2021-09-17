// 1. Leia o código abaixo

/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10)) */

/* a) o que vai ser impresso no console: Resposta: 10 e 50

   b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e
 `minhaFuncao(10)`? O que apareceria no console?  - Resposta: Apenas retornaria com a função return, mas para enxergar, teria que ter o console.*/

 //_______________________________________________________________//___________________________________________________________________________

 //2. Leia o código abaixo

/*  let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
 */
// a. Explique o que essa função faz e qual a sua utilidade 
/* b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura
     ii.  CENOURA é bom pra vista
     iii. Cenouras crescem na terra */

     //________________________________________________________//_____________________________________________________________________________

     /* 1. Escreva as funções explicadas abaixo:

    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

    ```
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    ```
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, 
    apenas imprime essa mensagem. */
    
    // function semParametro() {

    //   return
    // }
    // console.log(`Eu sou Shirley, tenho 38 anos, moro em São Paulo e sou estudante `)

       
    
 /*    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
    o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 
    Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

    ```
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
    ```
    - Exemplo
        Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

        `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."` */

        // function parametro() {

        // const nome = prompt("Digite seu nome:")
        // const idade = Number(prompt("Digite sua idade"))
        // const cidade = prompt("Digite sua cidade")
        // const profissao = prompt("Digite sua profissão") 

        // console.log(`Eu sou ${nome}, tenho ${idade} anos, moro ${cidade} e sou ${profissao}.`) 
        // }
        // parametro()
     
    // 2. Escreva as funções explicadas abaixo: 
    /* a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado.
        Invoque a função e imprima no console o resultado.*/
    
        // function doisParametros(entradas) {

        //     parametro = ("Digite um parametro:")

        //     console.log(doisParametros())

        //             }
        

     /*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.*/
            
            // function doisParametros(parametro1 , parametro2) {
            // const soma = (parametro1 + parametro2)

            // }
            // console.log(doisParametros())

    /* c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
     d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
        juntamente com uma versão dela em letras maiúsculas. */
        

/* 3. 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
Por fim, mostre no console o resultado das operações:

    ```
    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10
    ``` */

// const soma2 = (num, num2) => { return +num+num2 }
// const sub = (num, num2) => { return num-num2}
// const div = (num, num2) => { return "Divisão: "+num/num2+"\n" }
// const mult = (num, num2) => { return "Multiplicação: "+num*num2+"\n" }
// const valor1 = Number(prompt("Digite o primeiro valor"))
// const valor2 = Number(prompt("Digite o segundo valor"))

// console.log("Números inseridos: "+valor1+" e "+valor2+"\n"+"Soma:",soma2(valor1, valor2),"\n"+"Subtração:", sub(valor1, valor2),"\n"+mult(valor1, valor2)+ div(valor1, valor2))

