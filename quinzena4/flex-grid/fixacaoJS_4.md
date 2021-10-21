```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  
  const quantidade = arrayDeNumeros.filter((numero) => numero === numeroEscolhido)
  let resposta  = quantidade.length;

  if(resposta !== 0){
    resposta = `O número ${numeroEscolhido} aparece ${resposta}x`
    }else{
    resposta = "Número não encontrado"
  } return resposta
}
```