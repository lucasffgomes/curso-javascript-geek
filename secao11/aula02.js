// -------------------------
// OPERADORES REST e SPREAD
// -------------------------

function total(...precos) {
    let total = 0;

    precos.forEach(p => total += p);

    return total;
}

console.log(total(23.44, 22, 3.45, 5.67).toFixed(2));

console.log(total(23, 67));  // 90
console.log(total(3, 6, 77));  // 86
console.log(total());  // 0

// -------------------

let frutas1 = ['Manga', 'Uva', 'Melancia'];
let frutas2 = ['Abacate', 'Morango', 'Jaca'];

let compras = [...frutas1, ...frutas2];

console.log(compras);

// -------------------

let alunos = ['Paula', 'Felipe', 'Fernanda'];
let novo = 'Joana';

// alunos.push(novo);
let todos = [...alunos, novo];
console.log(todos);

