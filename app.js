let numeroSecreto = gerarNumeroAleatorio ();

// ao invés de fazer: 
// let titulo = document.querySelector("h1");  | retorna o primeiro elemento que corresponde ao seletor especificado dentro do documento
// titulo.innerHTML =  "Jogo do número secreto"; | inner = dentro ; innetHTML = dentro do HTML
// e: 
// let paragrafo = document.querySelector ("p"); 
// paragrafo.innerHTML = "Escolha um número entre 1 e 10"; /
// se faz (para não repetir):

function exibirTextoNaTela (tag, texto) { 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");


function verificarChute() { 
    let chute = document.querySelector ("input").value; // selecionar o *input* e pegar apenas o "valor" que ele dá
    console.log(chute == numeroSecreto); // para verificar se o *chute* é igual ao numeroSecreto*
}

function gerarNumeroAleatorio () { // para retornar a função *parseInt..." na variavel la em cima (*númeroSecreto*) 
    return  parseInt (Math.random() * 10 + 1);
    
}

