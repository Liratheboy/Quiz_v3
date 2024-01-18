const pergunta1 = document.getElementById('container_p1');
const pergunta2 = document.getElementById('container_p2');
const pergunta3 = document.getElementById('container_p3');
const pergunta4 = document.getElementById('container_p4');
const pergunta5 = document.getElementById('container_p5');
const pergunta6 = document.getElementById('container_p6');
const pergunta7 = document.getElementById('container_p7');
const pergunta8 = document.getElementById('container_p8');
const pergunta9 = document.getElementById('container_p9');
const pergunta10 = document.getElementById('container_p10');

function altcerta() {
  alert('Alternativa correta!')
} 
function alterrada(){
  alert('Alternativa errada!')
}

function mudarPergunta1(){  

  pergunta1.style.display = "none";
  pergunta2.style.display = "block";
}

function mudarPergunta2(){  
  
  pergunta2.style.display = "none";
  pergunta3.style.display = "block";
}

function mudarPergunta3(){  

  pergunta3.style.display = "none";
  pergunta4.style.display = "block";
}

function mudarPergunta4(){  

  pergunta4.style.display = "none";
  pergunta5.style.display = "block";
}

function mudarPergunta5(){  

  pergunta5.style.display = "none";
  pergunta6.style.display = "block";
}

function mudarPergunta6(){  

  pergunta6.style.display = "none";
  pergunta7.style.display = "block";
}

function mudarPergunta7(){  

  pergunta7.style.display = "none";
  pergunta8.style.display = "block";
}

function mudarPergunta8(){  

  pergunta8.style.display = "none";
  pergunta9.style.display = "block";
}

function mudarPergunta9(){  

  pergunta9.style.display = "none";
  pergunta10.style.display = "block";
}

function mudarPergunta10(){  
  pergunta10.style.display = "none";

  var remover = document.querySelector('link_iniciar');
  remover.remove();

  var el = document.createElement("link");

  el.classList = "link_telaFinal";
  el.setAttribute("href", "tela_final.css");
  el.setAttribute("rel", "stylesheet");
  var head = document.querySelector("head");
  head.appendChild(el);
  
}

function telaInicial(){
  var remover = document.querySelector('link_iniciar');
  remover.remove();

  var el = document.createElement("link");

  el.classList = "link_Telainicial";
  el.setAttribute("href", "tela_inicial.css");
  el.setAttribute("rel", "stylesheet");
  var head = document.querySelector("head");
  head.appendChild(el);
}

function jogarNovamente(){

}

function iniciarJogo(){
  var remover = document.querySelector('.link_telainicial');
  remover.remove();

  var el = document.createElement("link");

  el.classList = "link_iniciar";
  el.setAttribute("href", "jogo.css");
  el.setAttribute("rel", "stylesheet");
  var head = document.querySelector("head");
  head.appendChild(el);
}