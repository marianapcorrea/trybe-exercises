console.log("It's alive!");

let a = 15;
let b = 9;
let c = 21;
let d = -25;

/* 
Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
 */

console.log("Adição = " + (a + b));
console.log("Subtração = " + (a - b));
console.log("Multiplicação = " + a * b);
console.log("Divisão = " + a / b);
console.log("Resto = " + (a % b));

/*
 Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
 */

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

/*
Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados. 
*/
if (a > b && a > c) {
    console.log(a);
}
if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}

/* 
Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.
*/
if (d > 0) {
    console.log("Positivo");
}
if (d < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

/* 
 Utilize if/else para escrever um código que defina três variaveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo.

*/

let angA = 20;
let angB = 110;
let angC = -40;

if (angA + angB + angC == 180 && angA > 0 && angB > 0 && angC > 0) {
    console.log("True");
}
if (angA + angB + angC !== 180 && angA > 0 && angB > 0 && angC > 0) {
    console.log("False");
} else {
    console.log("Erro: insira um valor positivo");
}
