// Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO.

let a = prompt("Digite o primeiro valor booleano (true/false):") === 'true'; 
let b = prompt("Digite o segundo valor booleano (true/false):") === 'true'; 

if (a && b) {
    console.log("A e B são VERDADEIROS.");
} else {
    console.log("Um ou ambos são FALSOS.");
}