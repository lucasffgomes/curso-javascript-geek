// -----------------------
// OBJETOS E SUAS FUNÇÕES
// -----------------------

const curso = {
    nome: 'Programação em JavaScript',
    horas: 25,
    preco: 27.99
}

console.log(curso);

console.log(typeof(curso));

console.log(Object.keys(curso));  // imprime as chaves do objeto
console.log(Object.values(curso));  // imprime os valores do objeto
console.log(Object.entries(curso));  // imprime um array com chaves e valores

Object.entries(curso).forEach(par => {
    console.log(`${par[0]}: ${par[1]}`);
});

Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

curso.nome = 'Criação de APIs com Django Rest Framework';

console.log(curso);

// não é possivel editar o valor na chave publicacao
Object.defineProperty(curso, 'publicacao', {
    enumerable: true,
    writable: false,
    value: '07/12/2021'
});

console.log(curso);
console.log(curso.publicacao);

const outro = {};

// Object.defineProperty(outro, '', {

// })

Object.freeze(curso);
curso.nome = 'Dança da Garrafa';
console.log(curso);

console.log('-------------------')

const usuarios = [
    {nome: 'Lucas Gomes', empresa: 'Compbyte'},
    {nome: 'Larry Page', empresa: 'Google'},
    {nome: 'Steve Jobs', empresa: 'Apple'}
]

console.log(usuarios);

console.table(curso);