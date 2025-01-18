let listaDeNumerosSorteados = []; // criando uma lista vazia.
let numeroLimite = 100;            // número limite  para gerar a lista e número aletorio.
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ;

//função para poder ultilizar os comando de texto do HTML.
function exibirTexto (tag,texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2}); //Comando para poder a pagina narrar o texto.
}

//função para poder exibiir os textos.
function exibirMensagemInicial(){
    exibirTexto('h1','Jogo do número secreto!');
    exibirTexto('p','Escolha um número entre 1 e 100.');
}
exibirMensagemInicial();


function verificarChute() { 
    let chute = document.querySelector('input').value
    
    if(chute == numeroSecreto) {
        exibirTexto ('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!' 
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}` 
        exibirTexto ('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p','O número secreto é menor.');
        } else {
            exibirTexto('p','O número secreto é maior.');
        }
      tentativas++;
      limparCampo();
    }
           
    console.log(numeroSecreto + ' Núemero gerado aleatório.');
    console.log(chute + ' Número informado.');
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return  gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}