// Axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function() {
    // limpar div
    div.innerHTML = '';

    // criar span
    let spanNome = document.createElement('span');

    // criar txtNome
    let txtNome = '';

    // recuperar input
    let github_user = document.querySelector('input[name=github_user]').value;

    axios.get(`https://api.github.com/users/${github_user}`)
        .then(function(response) {
            if(response.data.name !== null) {
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            } else {
                txtNome = document.createTextNode('O usuário não possui nome.');
            }

            // adiciona conteudo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
            
        })
        .catch(function(error) {
            txtNome = document.createTextNode('Não foi possível realizar a requisição.');

            // adiciona conteudo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        });
}