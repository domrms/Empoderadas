var palavraSorteada = document.querySelector("div.box h1")
const botaoSortear = document.querySelector("div.box button")
var loader = document.getElementById('loader');
let palavras = ["Pergunta level 3","Sem bônus","Mais 2 minutos","Dobras bônus do dado - 1 rodada"]
let sorteio = Math.floor(Math.random()*palavras.length)
roleta = [];

for(i = 0; i <= 3; i++){
  roleta.push(i)
}

botaoSortear.addEventListener("click", () => {

    palavraSorteada.innerHTML = loader.style.display = "Sorteando...";
    setTimeout(function(){
        palavraSorteada.innerHTML = palavras[roleta[Math.floor(Math.random() * roleta.length)]];
      }, 5000);
      
})
