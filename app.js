var palavraSorteada = document.querySelector("div.box h1")
const botaoSortear = document.querySelector("div.box button")
var loader = document.getElementById('loader');
let palavras = ["+1 min","+2 min","Elimine 2 respostas incorretas - Pergunta Extra","+3 min"]
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
