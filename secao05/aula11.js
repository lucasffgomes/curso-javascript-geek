// ------------------------------------
// TRATAMENTO DE ERROS COM TRY E CATCH
// ------------------------------------

// console.log(nome);
// console.log(4.Oi());

try {
    console.log(nome);
} catch(e) {
    console.log('Não foi possível imprimir nome.');
    console.log(e.name);  // mostra o nome do erro!
    console.log(e.message);  // mostra a mensagem do erro!
}

// console.log("Oi...")

// Lançando erros
function dividir(num1, num2) {
    if(num1 === 0 || num2 === 0) {
        throw('Os valores devem ser positivos.')
    } else {
        return num1 / num2;
    }
}

try{
    let ret = dividir(8, 0);
    console.log(ret);
} catch(e) {
    console.log('Não foi possível dividir.');
} finally {  // é sempre executado o finally!
    console.log('Vamos continuar...');
}
