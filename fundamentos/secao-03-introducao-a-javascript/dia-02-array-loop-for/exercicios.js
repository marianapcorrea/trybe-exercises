console.log("It's alive");
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */
/* 
Lidando com arrays

Percorra o array imprimindo todos os valores contidos nele com a função console.log().*/
/* for (let number of numbers) {
    console.log(number);
} */

//Some todos os valores contidos no array e imprima o resultado.
/* let numbers_sum = 0;
for (let number of numbers) {
    numbers_sum += number;
}
console.log(numbers_sum);
 */
//Calcule e imprima a média aritmética dos valores contidos no array.
/* let numbers_sum = 0;
let numbers_media;
for (let number of numbers) {
    numbers_sum += number;
}
numbers_media = numbers_sum / numbers.length;
console.log(numbers_media); */

//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
/* if (numbers_media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}
 */
//Utilizando for, descubra o maior valor contido no array e imprima-o.
/* let highestValue = 0;
for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > highestValue) {
        highestValue = numbers[i];
    }   
}
console.log("highestValue: " + highestValue); */

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
/* let odd_sum = 0;
for (let number of numbers) {
    if (number % 2 !== 0) {
        odd_sum += 1;
    }
}
if (odd_sum === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(odd_sum);
} */

//Utilizando for, descubra o menor valor contido no array e imprima-o.
/* let lowerNumber = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < lowerNumber) {
        lowerNumber = numbers[i];
    }
}
console.log(lowerNumber);
 */

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
/* let new_array = [];
for (let i = 1; i <= 25; i += 1) {
    new_array.push(i);
}
console.log(new_array); */

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
/* let dividedByTwo = [];
for (let number of new_array) {
    dividedByTwo.push(number / 2);
}
console.log(dividedByTwo); */

/* Lógica de programação e algoritmos
Crie um algoritmo que imprima na tela o fatorial de 10. */
/* let number = 4;
let fatorial = 1;
for (i = number; i > 0; i -= 1) {
    fatorial *= i;
}
console.log(fatorial);
 */

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
let word = "tryber";
let reordenedWord = "";

for (let i = 1; i < word.length; i += 1) {
    reordenedWord += word[word.length - 1 - i];
    console.log(reordenedWord);
}

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
/* let array = ["java", "javascript", "python", "html", "css"];
let biggestWord = array[0];
let smallestWord = array[0];

for (let word of array) {
    if (word.length > biggestWord.length) {
        biggestWord = word;
    }
}
for (let word of array) {
    if (word.length < smallestWord.length) {
        smallestWord = word;
    }
}
console.log(biggestWord);
console.log(smallestWord);
 */
