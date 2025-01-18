// 1 -Criando uma variável e apontanndo para a tag do HTML responsável  pelo título.

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto'

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 0 e 15.';

let listaDeNumerosSorteados = []; // criando uma lista vazia
let numeroLimite = 15;            // número limite  para gerar a lista e número 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ;

//2 - Simplificando o codigo acima com função.
//criando uma função para leitura das tegs do HTML

function exibirTexto (tag,texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
//Funcao para exibir o texto abaixo
function exibirMensagemInicial(){
    exibirTexto('h1','Jogo do número secreto!');
    exibirTexto('p','Escolha um número entre 1 e 15.');
}
exibirMensagemInicial();

//3 - Criando uma função para o botão Chutar (HTML: button onclick="verificarChute())
function verificarChute() { 
    let chute = document.querySelector('input').value   //Pega o número informado pelo usuário:     
//Verificar se o número informado é o mesmo do número secreto.    
    if(chute == numeroSecreto) {
        exibirTexto ('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!' //Ajusta o plural da palavra tentativa
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}` // Inclui o numero de tentativas e a mensagem para o usuário.
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

//4-Função para gerar número aleatório 
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