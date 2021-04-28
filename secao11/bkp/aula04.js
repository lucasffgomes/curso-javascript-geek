// --------------
// USANDO FOR OF
// --------------

let nome = 'Geek University';

for(let letra of nome) {
    console.log(letra);
}

let numeros = [1, 2, 3, 4, 5];

for(let numero of numeros) {
    console.log(numero * 2);
}

// -----------------

for(let indice in numeros) {
    console.log(`Índice: ${indice}, Valor: ${numeros[indice]}`);
}

// -----------------

let cursos = new Map([
    [1, 'Programação para Leigos'],
    [2, 'Algoritmo e Lógica de Programação'],
    [3, 'Programação em C'],
    [4, 'Programação em Java'],
    [5, 'Programação Python'],
    [6, 'banco de Dados'],
    [7, 'Programação Web com Django Framework']
]);

for(let curso of cursos) {
    console.log(`${curso[0]} - ${curso[1]}`);
}

// cache/valor
for(let curso of cursos) {
    console.log(curso);
}

// -----------------

// somente a chave
for(let chave of cursos.keys()) {
    console.log(chave);
}

// -----------------

// somente o valor
for(let valor of cursos.values()) {
    console.log(valor);
}

// -----------------

// chave e valor
for(let [chave, valor] of cursos.entries()) {
    console.log(`${chave} - ${valor}`);
}

// -----------------

let conjunto = new Set([1, 2, 3, 4, 5, 5]);

for(let numero of conjunto) {
    console.log(numero);
}
