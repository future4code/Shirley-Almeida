// ***************** Interpretação de Código ********************

// 1) O que vai ser impresso no console: 
// Resposta: Nome e apelido e undefined 

/* 2) . 
Resposta: 

['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']
0: "Amanda Rangel"
1: "Laís Petra"
2: "Letícia Chijo"
length: 3
[[Prototype]]: Array(0)
*/

// 3)
/* (2) [{…}, {…}]
0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
length: 2
[[Prototype]]: Array(0)

*/

/* Escrita de código : 

1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
*/

//A)
/* const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
 */
// const nomePets = pets.map ((item)=> {
//     return item.nome 

// })
//     console.log(nomePets)

//B)

/* const dogs = pets.filter((item) => {
    return item.raca === "Salsicha"
})
console.log(dogs) */

//C) 

/* const filtraDogs = pets.filter((item)=> {
 if (item.raca === "Poodle") {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)

 }
return

}) */

// //2)   Dado o seguinte array de produtos, realize as 
//        operações pedidas nos itens abaixo utilizando as 
//        funções de array map e filter: 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  //A)

//  const mercado = produtos.map ((item)=> {
//     return item.nome 

//  }) 
//  console.log(mercado)

//  //B) 
//  voltaNomes=produtos.map((item)=>{
// 	const nomes=item.nome
// 	const precoDesc=item.preco*5/100
// 	return ({nome:nomes , preco:precoDesc})
// })
// console.log(voltaNomes)

// //C) 

// const quitanda = produtos.filter((item) => {
//     return item.categoria === "Bebidas"
// })
// console.log(quitanda)

//D) 

/* const chamaYpe = produtos.filter((item => {
    const prod1 = item.nome
    const cat = item.categoria
    const valor = item.preco
    if (prod1.includes("Ypê")) {

        return ({ nome: prod1, categoria: cat, preco: valor })
    }
}))
    console.log(chamaYpe)
 */
 
//E) 
/* 
let checaNomeValor=produtos.map((item)=>{
	const nomes=item.nome
	const valor=item.preco
	return ({nome:nomes , preco:valor})
}).filter((ypes,index)=>{
	const nomes=ypes.nome
	const valor=ypes.preco
	if(ypes.nome.includes("Ypê")){
		ypes[index]=`COMPRE ${nomes} POR ${valor}`
		return ypes[index]
	}

})
console.log(checaNomeValor)
 */
    
    