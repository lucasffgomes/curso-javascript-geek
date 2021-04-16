// -------------------------------
// FUNÇÔES COM PARÂMETRO E RETORNO
// -------------------------------

function calcular_idade(ano_nascimento, nome) {
    const data = new Date();  // gera a data atual
    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento) {
    const data = new Date();
    const idade = data.getUTCFullYear() - ano_nascimento;

    console.log(idade);
}

let ret = calcular_idade(1975, 'Marcus');
console.log(ret);

calcular_idade2(1997);

const data = new Date();

console.log('Data completa: ' + data);
console.log('Ano: ' + data.getFullYear());
console.log('Mês: ' + data.getMonth());  // 0 -> janeiro, 1 -> fevereiro...
// 00 -> janeiro
// 01 -> fevereiro
// 02 -> março
// 03 -> abril
// 04 -> maio
// 05 -> junho
// 06 -> julho
// 07 -> agosto
// 08 -> setembro
// 09 -> outubro
// 10 -> novembro
// 11 -> dezembro

// FIQUE ESPERTO!

function somar(num1, num2) {
    return num1 + num2;
}

console.log(somar(4, 6));  // 10

console.log(somar(4));  // ?  NaN -> Not a Number