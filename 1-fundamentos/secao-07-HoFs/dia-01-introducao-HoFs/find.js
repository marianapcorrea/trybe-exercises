// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

console.log(numbers.find((n)=>(n%3===0 && n%5===0)))

//Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

console.log(names.find((name) => name.length ===5))

//Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

console.log(musicas.find((music) => music.id ==='31031685'))