  /* 
  
Bônus
Próximo
Bônus
Todos os exercícios devem ser realizados utilizando reduce e, se necessário, use outra HOF. A informação será citada no enunciado.

1 - Dada uma matriz, transforme em um array.
  */
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () =>  arrays.reduce((acc, arr)=> acc.concat(arr),[]);

// console.log(flatten())

//

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
/* 
2 - Crie uma string com os nomes de todas as pessoas autoras.
*/
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
  const string = books.reduce((acc, { author }) => `${acc} ${author.name},`, "")
  return string.replace(/.$/, '.')
}

// console.log(reduceNames())


/*
3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
 */
// const expectedResult = 43;

const averageAge = () => books.reduce((acc, { author, releaseYear }) => (acc + releaseYear - author.birthYear), 0)/books.length


// console.log(averageAge())


/* 
4 - Encontre o livro com o maior nome.
 */
// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

const longestNamedBook = () => books.reduce((acc, item)=> acc.name.length > item.name.length ? acc : item)

console.log(longestNamedBook())
