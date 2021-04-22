// ---------------------
// INSTANCIANDO OBJETOS
// ---------------------

class Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    // ----
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }
    // ----

    falar(msg) {
        console.log(`${this.nome} está falando ${msg}.`)
    }

    comer() {
        console.log(`${this.nome} está comendo...`);
    }

    beber() {
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`)
    }
}

class Carro {
    constructor(modelo) {
        this._marca = "Honda";  // fixo -> não tem o set
        this._modelo = modelo;
    }

    // ----
    get marca() {
        return this._marca;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(modelo) {
        this._modelo;
    }
    // ----

    imprimir() {
        console.log(`${this.marca} ${this.modelo}`);
    }
}

// Instanciando objetos - FORMA 1
const curso = new Object();
curso.nome = 'Programação em JavaScript';
curso.preco = 27.99;

console.log(curso);

curso['qtde_alunos'] = 43;
console.log(curso);

delete curso['qtde_alunos'];
delete curso['preco'];
console.log(curso);

// FORMA 2 - Objeto literal
const programa = {
    nome: 'Photoshop',
    preco: 899.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contato@adobe.com',
        endereco: {
            logradouro: 'Rua da Paz, 45',
            bairro: 'Nova Lima',
            cidade: 'São Paulo',
        },
    filiais: [
        {cidade: 'Rio de Janeiro'},
        {cidade: 'Recife'},
    ]
    }
}

console.log(programa);
console.log(programa.nome); // Photoshop
console.log(programa.fabricante.nome); // Adobe
console.log(programa.fabricante.filiais.length); // 2

programa.nome = 'PlayStation OS';

console.log(programa.nome);
console.log(programa);

delete programa.fabricante.filiais;

console.log(programa.fabricante.filiais); // undefined

const pessoa = {};
console.log(typeof(pessoa));

pessoa.nome = 'Angelina';

console.log(pessoa);

function Lampada(cor) {
    this.cor = cor;
}

const l1 = new Lampada('Branca');

console.log(l1);
console.log(typeof(l1));
console.log('-------------------------------------');

// FORMA 5 -> objeto a partir das classes
const p1 = new Pessoa('Lucas', 'Gomes');
console.log(p1);
console.log(typeof(p1));
console.log(p1.nome);  // função GET
console.log(p1.sobrenome);  // função GET

p1.nome = "Karen";
console.log(p1);

p1.falar('Olá mundo');
p1.comer();
p1.beber();

const fit = new Carro('Fit');
fit.imprimir();
