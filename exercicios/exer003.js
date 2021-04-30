// Crie uma função que receba um array como entrada e verifique se neste array contém a habilidade
// “JavaScript”.


habilidades1 = ['Python', 'React', 'JavaScript'];
habilidades2 = ['Python', 'Bash', 'Linux'];


function sabeJavaScript(habilidade) {
    if(habilidade.includes('JavaScript')) {
        console.log('Sabe JavaScript.');
    } else {
        console.log('Não sabe JavaScript.');
    }
}


sabeJavaScript(habilidades1);
sabeJavaScript(habilidades2);