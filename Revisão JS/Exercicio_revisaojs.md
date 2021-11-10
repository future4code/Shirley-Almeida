<!-- Exercício 1 -->
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

let salario = 2000


let comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05) 
let salReceber = (comissao + salario)
return salReceber
}

<!-- Exercício 2 -->

function calculaPrecoTotal(quantidade) {
 
let precoMaca

if(quantidade < 12){
  precoMaca  = 1.30
    
}else { precoMaca = 1 

}
 return quantidade * precoMaca
}

<!-- Exercício 3 -->

function calculaNota(ex, p1, p2) {

    let media = ((ex * 1) + (p1 * 2) + (p2 * 3)) / 6   
    
    if (media >= 9) {
      return  'A'
    }else if (media < 9 && media >= 7.5){
      return  'B'
    } else if (media < 7.5 && media >= 6){
      return 'C'
    } else {
      return 'D'
    }   
  }

  <!-- Exercício 4  -->

  function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
   
  const quantidade = arrayDeNumeros.filter((numero) => numero === numeroEscolhido)
  let resposta  = quantidade.length;

  if(resposta !== 0){
    resposta = `O número ${numeroEscolhido} aparece ${resposta}x`
    }else{
    resposta = "Número não encontrado"
  } return resposta
}

<!-- Exercício 5 -->

function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 const pet = animais.map((item)=> {
    return item.nome


  
 })
 return pet
}

<!-- Exercício 6 -->

function filtraTarefas() {
    const tarefas = [
      { titulo: "Fazer Remember", status: "done", tempo: 30 },
      { titulo: "Fazer Challange", status: "todo", tempo: 30 },
      { titulo: "Assistir Aula", status: "done", tempo: 120 },
      { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
      { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
      { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
      { titulo: "Fazer desafio", status: "doing", tempo: 60 },
      { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
      { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
      { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
      { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
      { titulo: "Assistir Novela", status: "todo", tempo: 90 }
   ]
  
    const atvTerminadas = tarefas
    .filter(item => item.status === 'done') 
    .map(pronto => pronto.titulo) 
    
     
        return atvTerminadas
 }