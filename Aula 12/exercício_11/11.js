// 11 - Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das notas obtidas, 
// imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado. 
// Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.

let n1, n2, n3, n4, media;
let aluno;

aluno = "Kleber"
n1 = 10
n2 = 5
n3 = 8
n4 = 6

media = (n1 + n2 + n3 + n4) / 4;

if (media >= 7) {
    console.log(`Aluno ${aluno}, parabéns! Você foi aprovado com média: ${media.toFixed(2)}`);
} else {
    console.log(`Aluno ${aluno}, você foi reprovado com média: ${media.toFixed(2)}`);
}