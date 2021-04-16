// --------------------
// FUNÇÕES CONSTRUTORAS
// --------------------

// criando função construtora
function Pessoa(n, s, raca = 'Humano') {
    // atributos privados
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // atrubuto publico
    this.raca = raca;

    // metodo privado
    let imprimir_dados = function() {
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    // metodo publico
    this.fazer_aniversario = function() {
        idade += 1;
        imprimir_dados();
    }

    // metodo publico
    this.getIdade = function() {
        return idade;
    }
}

// instanciando um objeto
const angelina = new Pessoa("Angelina", "Feminino");

console.log(angelina);
console.log(angelina.peso);  // privado
console.log(angelina.raca);

angelina.fazer_aniversario();  // publico

// instanciar um novo objeto
const felicity = new Pessoa('Felicity', 'Feminino');

felicity.fazer_aniversario;
console.log(felicity.getIdade());

console.log(typeof(Pessoa));  // ??
console.log(typeof(felicity));  // ??