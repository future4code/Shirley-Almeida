/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    let usuario=[];
    let pc=[];
    
    let iniciar = confirm("Bem-vindo ao jogo Blackjack! \n Deseja iniciar uma próxima rodada?") 
   
    if(iniciar){
      let cartasInicio = false;
      while(!cartasInicio){
       usuario.push(comprarCarta())
       usuario.push(comprarCarta())
       pc.push(comprarCarta())
       pc.push(comprarCarta())
       if(usuario[0].valor==11 && usuario[1] == 11 || pc[0].valor==11 && pc[1].valor==11) { 
          usuario=[] 
          pc=[] }
          else{ cartasInicio=true}
      }

      let comprar=true
      while(comprar){
      let text=""
      let ponto = 0;
      let comprarMais
      for(let cartas of usuario ){
      text = cartas.texto+"";
      ponto = cartas.valor; 
   }

   ponto>21 ? comprar = false : comprarMais = confirm( `Suas cartas são ${text}. A carta revelada do computador é ${pc[0].texto}.` +
   "\n"+ 
   "Deseja comprar mais uma carta?")
   comprarMais ? usuario.push(comprarCarta()) : comprar = false
}

let pontosUsuario = 0;
let textoUsuario="";
let pontosPC = 0;
let textoPC  = '';
for (const cartas of usuario) {
   pontosUsuario += cartas.valor
   textoUsuario += cartas.texto+''
}
   for (const cartas of pc) {
      pontosPC+=cartas.valor
      textoPC+=cartas.texto + ''
   }


if (pontosUsuario<=21) {
   while (pontosPC<pontosUsuario&& pontosPC <=21) {
      cartasPC.push(comprarCarta())
      for (const cartas of pc) {
         pontosPC+=cartas.valor
         textoPC+=cartas.texto + ''
      }
   }
}
let resultado=''
pontosUsuario > pontosPC && pontosUsuario <= 21 ? res="O jogador é o vencedor!" : pontosPC > pontosUsuario && pontosPC <= 21 ? 
resultado = "O computador é o vencedor!" : pontosPC > 21 && pontosUsuario <= 21 ? 
resultado="O jogador é o vencedor!" : pontosUsuario > 21 && pontosPC <= 21 ? 
resultado= "O computador é o vencedor!" : resultado="Empatou!"
alert( `Usuario - Cartas: ${textoUsuario} - Pontuação: ${pontosUsuario}` + 
"\n" + 
`Computador - Cartas: ${textoPC} - Pontuação: ${pontosPC}` + 
"\n" + 
resultado)
}else{alert("Fim de jogo")} 