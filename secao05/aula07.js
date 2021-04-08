var numero = 42;
console.log(numero);

numero = numero + 18;
console.log(numero);

// Let
let outro_numero = 42;
console.log(outro_numero);

outro_numero = outro_numero + 18;
console.log(outro_numero);

let nome = 'Lucas';
console.log(nome);

nome = 'Gomes';
console.log(nome);

// LET -> forma mais moderna de declarar variaveis em JavaScript
// LET -> escopo local
// VAR -> escopo global

for(var i = 0; i < 5; i++) {
    var valor = i * 3;
    console.log(valor);
}

console.log(valor);
console.log(i);

const TAXA = 1.44;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

const curso = {nome: "Programação em JavaScript"};
console.log(curso.nome);

// nao pode alterar o valor de uma constante (CONST) !
// curso = 43; // erro

// pode-se realizar a mutação em dados contidos na constante
curso.nome = "Programção em Python";  // mutação
console.log(curso);


/*
dicas de como declarar variaveis em JavaScript

-a variavel pode ser alterada? se sim, use let.
-a variavel é constante? se sim, use const.
*/

const valor = 5;

for(let i = 0; i < valor; i++) {
    console.log(valor - i);
}

