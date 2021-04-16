// --------------------
// FIRST CLASS CITIZENS
// --------------------

function somar(num1, num2) {
    return num1 + num2;
}

let resultado = somar(4, 6);

console.log(resultado);
console.log(somar(10, 5));

// exemplo 1
const executar = somar;
console.log(executar(8, 7));

// exemplo 2
function subtrair(num1, num2) {
    return num1 - num2;
}

function faz_algo(num1, num2, funcao) {
    return funcao(num1, num2);
}

console.log(faz_algo(5, 5, somar));
console.log(faz_algo(8, 3, subtrair));

// exemplo 3
function outra(z) {
    return z;
}

const retorno = outra(somar);
console.log(retorno(8, 2));

function mensagem() {
    console.log('Evolua seu lado Geek!');
}

mensagem();

let valores = [1, 3.4, true, somar];

for(let i = 0; i < valores.length; i++) {
    console.log(typeof(valores[i]));
}