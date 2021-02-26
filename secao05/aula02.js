// [0][1][2][3][4][5]

// detalhes sobre arrays
// possuem tamanho infinito
// podemos colocar qualquer tipo de dado

// forma 1
var alunos = new Array('Lucas', 'Karen', 'Kaleb');
console.log(alunos);

// forma 2 [recomendada]
var notas = [1, 3, 5, 7, 9];
console.log(notas);

// array vazio
var dados = [];
console.log(dados);

// valor de um indice
console.log(notas[2]);

// alterando valor do indice
notas[2] = 12;
console.log(notas);

// inserindo elementos no final do array
var nomes = ["Paula", "Maria", "Alessandra"];
console.log(nomes);
nomes.push("Larissa");  // adiciona ao final do array
console.log(nomes);

// tamanho do array
console.log(nomes.length);

// ordernar os dados do array
var estudantes = ["Vera", "Lucia", "Pedro", "Fernanda", "Mario", "Ana", "Carla"];
// console.log(estudantes);

estudantes.sort();  // ordena ASC
// console.log(estudantes);

var precos = [123.55, 42.27, 546.99, 23.12]
console.log(precos);

// precos.sort();  // nao funciona, pois só ordena atraves do primeiro caractere da variavel
// console.log(precos);

precos.sort(function(a, b) {
                return a - b;
            }
);
console.log(precos);

var idades = [5, 1, 8, 12, 44, 78];
console.log(idades);

// idades.sort();
// console.log(idades);  // erro!

idades.sort(function(a, b) {return a - b;});
// console.log(idades);

// deletar dados de um arrray
// delete idades[3];
// console.log(idades);

// idades.splice(3, 1)  // apartir do indice 3, delete 1 elemento
// console.log(idades);

// idades.splice(3, 0, 56, 89);  // apartir do indice 3, nao delete nenhum, mas adicione 56, 89
// console.log(idades);

// idades.splice(3, 1, 23);  // apartir do indice 3, deleta , e adciona 23
// console.log(idades);
// idades[3] = 23;

// iterar em um array
for(var i = 0; i < idades.length; i++) {
    // console.log(idades[i]);
}

// remove elementos da ultima posicao do array
// idades.pop();  // remove e retorna o ultimo elemento do array
// console.log(idades);

// var ret = idades.pop();
// console.log(ret);
// console.log(idades);

// remove o primeiro elemento do array
// idades.shift(); // remove e retorna
// console.log(idades);

//  inserir elementos no inicio do array
// idades.unshift(99);
// console.log(idades);

// retorna um novo array a partir do indice informado
// var novo = idades.slice(3);
// console.log(novo);

// var novo = idades.slice(1, 2);  // apartir do indice 1, pegue ate o indice 2 sem inclui-lo
// console.log(novo);

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares);  // concatena os dois arrays
console.log(rest);

rest = impares.concat(pares);
console.log(rest)

rest.sort(function(a, b) {return a - b;});
console.log(rest);

// 4 * 4
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(tabuleiro[0][0]);  // linha 0 e coluna 0
console.log(tabuleiro[2][2]);  // linha 2 e coluna 2

