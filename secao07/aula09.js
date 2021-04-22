// -------------------------------------
// SOBRESCRITA DE METODO E POLIMORFISMO
// -------------------------------------

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

    // sobrescrita de metodo
    imprimir_dados() {
        super.imprimir_dados();
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

    imprimir() {
        console.log(`${this.nome} ${this.sobrenome} ${this.registro} ${this.funcao.salario}`);
    }
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

const prog = new Funcao('Programador', 5797.44);
const f1 = new Funcionario('Paula', 'Fernandes', 'paula@email.com', '813.672.943-43', prog, 'f684ef');

f1.imprimir_dados()
