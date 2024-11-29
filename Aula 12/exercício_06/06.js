// 6 - Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.

let num = parseFloat(prompt("Digite um valor:"));
let reajuste = num * 0.05 + num;

console.log
(`Valor original: ${num}`);

console.log
(`Valor com reajuste de 5%: ${reajuste}`);