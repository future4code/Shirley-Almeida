```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  const salario = 2000
  const comissao = 100
  const percentual = 0.05
  
  let valorDaComissao = (qtdeCarrosVendidos * comissao) + (valorTotalVendas * percentual)
  const salarioMes = salario + valorDaComissao
  
  return salarioMes


}```