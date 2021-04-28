// --------------
// ASYNC e AWAIT
// --------------

const novaPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10);  // 0 e 9
    setInterval(() => {
        if(valor % 2 == 0) {
            resolve(`O valor ${valor} é par...`);
        } else {
            reject(`o valor ${valor} é impar...`);
        }
    }, 2000);
});

async function executarPromise() {
    try {
        const response = await novaPromise();
        console.log(response);
    } catch(erro) {
        console.log(erro);
    }
}

executarPromise();

console.log('Não esperei o await...');

