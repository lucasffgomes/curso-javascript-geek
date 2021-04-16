// ---------------
// ARROW FUNCTIONS
// ---------------

// forma 1
function somar1(num1, num2) {
    return num1 + num2;
}

console.log(somar1(4, 6));

// forma 2
let somar2 = function(num1, num2) {
    return num1 + num2;
}

console.log(somar2(4, 6));

// forma 3
let somar3 = somar1;

console.log(somar3(4, 6));

// ARROW FUNCTION
let somar4 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar4(4, 6));

/*
    ATENÇÃO:
    Caso a função tenha apenas 1 parametro de entrada e executa apenas uma linha,
    pode-se simplificar ainda mais usando Arrow Function.
*/

let dobrar = valor => valor * 2;

console.log(dobrar(5));

function mensagem1() {
    console.log('Evolua seu lado Geek!');
}

mensagem1();

const msg = () => console.log('Evolua sua lado Geek!');

msg();