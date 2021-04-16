// -----------------
// FUNÇÕES CLOSURES
// -----------------

let xuxa = 'global';  // pode ser acessada globalmente

function imprimir() {
    console.log(xuxa);
}

function outra() {
    let xuxa = 'local';  // pode ser acessada localmente
    imprimir();
    console.log(xuxa);
}

outra();

// novo exemplo
let variavel = 'global';

function externa() {
    let variavel = 'local';

    function interna() {
        return variavel;
    }

    return interna;
}

let executa = externa();

console.log(executa());

