// --------
// HERANÇA
// --------

/*
funcionarios
    nome,
    sobrenome,
    email,
    cpf,
    função,
    registro

clientes
    nome,
    sobrenome,
    email,
    cpf,
    renda

funções
    descrição,
    salário
*/

class Funcao{
    constructor(descricao, salario) {
        this._descricao = descricao;
        this._salario = salario;
    }

    // ----
    get descricao() {
        return this._descricao;
    }
    set descricao(descricao) {
        this._descricao = descricao;
    }
    // ----
    get salario() {
        return this._salario
    }
    set salario(salario) {
        this._salario = salario;
    }
    // ----
}


class Pessoa{
    constructor(nome, sobrenome, email, cpf) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    // ----
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    // ----
    get sobrenome() {
        return this._sobrenome;
    }
    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }
    // ----
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    // ----
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    // ----

    // métodos extras
    get nome_completo() {
        return this._nome + ' ' + this._sobrenome;
    }
    set nome_completo(nome_completo) {
        // transforma string em array separadas por espaço
        nome_completo = nome_completo.split(' ');

        // remove e retorna o elemento da posição 0
        this._nome = nome_completo.shift();
        // junta os elementos do array em uma string
        this._sobrenome = nome_completo.join(' ');
    }

    imprimir_dados() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }

}

class Funcionario extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro) {
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }

    // ----
    get funcao() {
        return this._funcao;
    }
    set funcao(funcao) {
        this._funcao = funcao;
    }
    // ----
    get registro() {
        return this._registro;
    }
    set registro(registro) {
        this._registro = registro;
    }
    // ----
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda) {
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }

    // ----
    get renda() {
        return this._renda;
    }
    set renda(renda) {
        this._renda = renda;
    }
    // ----
}

const c1 = new Cliente('Karen', 'Gomes', 'karen@email.com', '159.753.456-46', 2200.00);
const c2 = new Cliente('Lucas', 'Gomes', 'lucas@mail.com', '796.157.593-54', 1526.26);

console.log(c1);
console.log(c2);

console.log(c1.nome_completo);
console.log(c2.nome_completo);

c1.nome_completo = 'Kaleb Gomes';

console.log(c1);

c2.imprimir_dados();

const programador = new Funcao('Programador', 4899.54);
const suporte = new Funcao('Suporte', 2799.34);

console.log(programador);
console.log(suporte);

const f1 = new Funcionario('Lucas', 'Gomes', 'lucas@mail.com', '123.654.789-91', programador, 'gs68f1');
const f2 = new Funcionario('Karen', 'Molina', 'karen@mail.com', '654.987.951-46', suporte, '0as9df');

console.log(f1);
console.log(f2);

console.log(f1.funcao.salario);

f1.imprimir_dados();