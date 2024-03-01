// programar o index usando o JavaScript
// no index, as funções precisam dos parênteses para indicar que é uma função!! ex: <button onclick="verificarChute()"....

// se usa colchetes "[]" para fazer listas (array)
// o primeiro sempre será o índice 0.... ex: [0,1,2]
//
// ex:  let numeros = [7,10,22]
//      numeros.length              (para saber a quantidade de índices se usa *length*)
//      3
//      numeros [0]                 (para pegar o índice em específico)
//      7   
//      
//     let primeiro = numeros [0]                   (para pegar o primeiro)
//     let ultimo = numeros [numeros.length - 1]    (para pegar o ultimo)
//
// obs: para números, nao se usa aspas...apenas para nomes! ex: ["felipe","ana"]
let listaDeNumerosSorteados = []; // tem que ser na primeira linha para ser lido antes que tudo 

let numeroSecreto = gerarNumeroAleatorio (); 
let tentativas = 1;

exibirMensagemInicial (); // chamando a função em qualquer lugar para ela ser lida antes 

// function = funções (function *nome* (*paramentro*) {})
function gerarNumeroAleatorio () { 
    let numeroEscolhido = parseInt (Math.random() * 10 + 1);    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {      // *includes* função que verifica se o elemento está na lista
        return gerarNumeroAleatorio();                           // para pedir que outro número seja gerado // *retornar a função gerarNumeroAleatorio*
    } else { 
        listaDeNumerosSorteados.push (numeroEscolhido); // para definir o que vai vir dentro da lista // *push* final da lista
        console.log (listaDeNumerosSorteados)
        return numeroEscolhido;  
    }
}

function limparCampo() { // limpar o campo depois de chutar um numero
    chute = document.querySelector ("input") // pegar apenas o "input"
    chute.value = " ";                            // pegar o valor do "input" e deixar ele vazio
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial(); // se usa ao invés de: exibirTextoNaTela("h1", "Jogo do número secreto"); 
}                            // e exibirTextoNaTela("p", "Escolha um número entre 1 e 10");             

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

function exibirMensagemInicial () { // criar a função para não repetir o codigo em outras funções (verificarChute)/(reiniciarJogo)
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}


function verificarChute() { // tudo o que tiver dentro do *verificarChute* é sobre o "input"
    let chute = document.querySelector ("input").value; // selecionar o *input* e pegar apenas o "valor" dele (texto digitado)
    if (chute == numeroSecreto) {                       // se o *chute* for igual o *numeroSecreto* (booleano = verdadeiro/falso)
        exibirTextoNaTela ("h1","Acertou!");              // para mudar o texto quando acertar
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // if e else para fazer o texto certo
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ("p", mensagemTentativas); // (não da para usar template string (``) apenas string ("";''))
        document.getElementById ("reiniciar").removeAttribute ("disabled"); // buscar o *id* no index; nome do id; remover o atributo; nome do atributo
    } else { 
        if (chute > numeroSecreto) {
            exibirTextoNaTela ("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela ("p", "O número secreto é maior");
        } 
        tentativas++;         // tentativas = tentativas + 1; (somar o número de tentativas mais a primeira)
        
    } 
    limparCampo()
        
}

