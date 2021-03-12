var precos = [4.66, 3.78, 9.78, 1.34, 5.32];
var soma = 0;

// com for comum
for(var i = 0; i < precos.length; i++) {
    soma = soma + precos[i];
}

console.log(soma);

soma = 0;

// com foreach
precos.forEach(function(valor) {
    soma += valor;
});

console.log(soma)


// reduce
function somar(anterior, atual) {
    return anterior + atual;
}

var ret = precos.reduce(somar);
console.log(ret);

/*
    como funciona o reduce?
    [4.66, 3.78, 9.78, 1.34, 5.32]

    primeira execucao:
        - pega os dois primeiros valores (indice 0 e indice 1), soma e retorna este valor;
    nas demais execucoes:
        - pega o retorno da execucao anterior e o proximo valor (indice 2...)

    1ª = 4.66 + 3.78 -> 8.44
    2ª = 8.44 + 9.78 -> 18.22
    3ª = 18.22 + 1.34 -> 19.56
    4ª = 19.56 + 5.32 -> 24.88
*/

// exemplo map/reduce
function adicionar_taxa(valor) {
    return valor + 5;
}

var ret = precos.map(adicionar_taxa).reduce(somar);
console.log(ret);


// exemplo filter/map/reduce
function preco_maior_que_4(valor) {
    return valor > 4;
}

ret = precos.filter(preco_maior_que_4).map(adicionar_taxa).reduce(somar);
console.log(ret);
