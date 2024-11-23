/* declaração de função */
function soma() {
    return 2 + 5;
}
console.log(soma());

function somaII(n1, n2) {
    console.log(n1 + n2)
}

somaII(4, 9)
somaII(45, 95)

function somaII(n1, n2) {
    console.log('O resultado da soma de', n1, '+', n2, 'é', n1 + n2
    )
}

function somaII(n1 ,n2){
    console.log('O resultado da subtração', n1, '-', n2, 'é',n1 - n2)
}

function somaII(n1 , n2){
console.log('O resultado da multiplicação', n1, '*', 'é' , n1*n2)
}

function somaII(n1, n2){
    console.log('O resultado da Divisão' , n1, '/', 'é' , n1/n2)
}

function somaII(n1 ,n2){
    console.log('O resultado da pontecia', n1, '^', 'é', n1^n2)
}
const potencia = (x, y) =>{
    let result = x^y;
    result `${x} elevado a ${y} é igual a ${result}`;
}

console.log(potencia(2, 3))