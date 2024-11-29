//Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, 
//deverá somar os dois valores, 
//caso contrário devera multiplicar A por B. 
//Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela. feito

let a,
    b,
    c

a = 10
b = 10

if (a == b) {

    c = a + b
    console.log("a Soma de A e B é: ", c)
} else {
    c = a * b
    console.log("A multiplicação de A e B é: ", c)
}