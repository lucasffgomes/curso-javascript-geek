// ------------------
// CONJUNTOS COM SET
// ------------------

// declarando um conjunto
let cursos = new Set();

// adicionando valor
cursos.add('Programação para Leigos');
cursos.add('Algoritmos e Lógica de Programação');

// adicionar valores concatenados
cursos.add('programação em C').add('Programação em Java').add('Programação em Python');

cursos.add('Banco de Dados');
cursos.add('Programação Web com Django Framework');

console.log(cursos);

// acessando tamanho de conjuntos
console.log(cursos.size);

console.log(cursos.has('Banco de Dados'));

// deletar elementos de um conjunto
cursos.delete('Programação para Leigos');

