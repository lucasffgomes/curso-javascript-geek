// Crie uma função que receba dois inteiros como parâmetro de entrada e exiba todos os números pares
// entre estes dois números (inclusive);


function pares_no_intervalo(num1, num2) {
    for(var i = num1; i < (num2+1); i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

pares_no_intervalo(1, 77);
