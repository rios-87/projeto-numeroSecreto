//1-Criar uma função que exibe "Olá, mundo!" no console.

function saudacao() {
    alert ('Olá Mundo')
    console.log('Olá Mundo!');
}
saudacao();

//2-Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nomeUsuario (nome){
    console.log(`Olá, ${nome}.`);
}
nomeUsuario('Rebert');

//3-Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function exibeDobro (numero){
   return numero*2;
}

let multiplica = exibeDobro(5);
console.log( multiplica );

//4-Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaDeTres (um,dois,tres){
 return (um + dois + tres) / 3;
}

let resultado = mediaDeTres (7,8,9);
console.log(resultado);

//5-Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior (primeiro,segundo){
   return primeiro > segundo ? primeiro :segundo;
} 

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

//6-Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplica (numeroInformado){
    return numeroInformado * numeroInformado
}

let resultado2 = numeroInformado(2);
console.log( resultado2);