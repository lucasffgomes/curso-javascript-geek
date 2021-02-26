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
console.log(estudantes);

estudantes.sort();  // ordena ASC
console.log(estudantes);

var precos = [123.55, 42.27, 546.99, 23.12]
console.log(precos);

precos.sort();  // nao funciona, pois só ordena atraves do primeiro caractere da variavel
console.log(precos);