// Crie uma função que receba como parâmetro de entrada o objeto abaixo e imprima no console a string de saída:

// objeto de entrada
let endereco = {
    rua: "Rua da Paz",
    numero: 42,
    bairro: "Cachoeira",
    cidade: "Campo Grande",
    uf: "MS"
};

// console.log(endereco.rua);

function mostrarEndereco(endereco) {
    console.log(`O usuário mora em ${endereco.cidade}/${endereco.uf}, no bairro ${endereco.bairro}, na ${endereco.rua}, número ${endereco.numero}.`);
}

mostrarEndereco(endereco);