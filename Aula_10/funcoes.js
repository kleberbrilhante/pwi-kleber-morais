//funções para criar uma função basta chamar a palavra function

function soma() {
    return 2 + 5; // logica
}

// se executar, não vai ocorrer nada, pois a função não foi chamada chamando a
// função

console.log(soma());

// aprimorando a função


//SOMA
function SomaII(n1, n2) {
    console.log('O resultado da soma de', n1, '+', n2, '=', n1 + n2) // logica já com a chamada da função
}
SomaII(5, 9)

//Subtração
function subtracao(n1, n2) {
    console.log('O resultado da subtração de', n1, '-', n2, '=', n1 - n2)
}
subtracao(2, 1)

//Divisão
function divisao(n1, n2) {
    console.log('O resultado da divisão de', n1, '/', n2, '=', n1 / n2)
}
divisao(10, 2)

//Multiplicação
function multiplicacao(n1, n2) {
    console.log('O resultado da multiplicação de', n1, '*', n2, '=', n1 * n2)
}
multiplicacao(8, 2)

//Potencia
function potencia(n1, n2) {
    console.log('O resultado da potencia de', n1, '^', n2, '=', n1 ^ n2)
}
potencia(10, 2)


//Declarando Funções Anônima ou Arrow Function

const PotenciaII = (x,y) => {
    let result = x^y;
    return`${x} elevado a ${y} é igual a ${result}`;
}

console.log(PotenciaII(2,3))