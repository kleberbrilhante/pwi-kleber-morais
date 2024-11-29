//Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo. feito

let numero,
    verificador

numero = 5

verificador = numero / 2

if (Number.isInteger(verificador)) {
    if (verificador > 0) {
        console.log("Esse número é positivo")
    }
    if (verificador < 0) {
        console.log("Esse número é negativo")
    }
    console.log("Esse número é par")
} else {
    if (verificador > 0) {
        console.log("esse número é positivo")
    }
    if (verificador < 0) {
        console.log("esse número é negativo")
    }
    console.log("Número é impar")
}