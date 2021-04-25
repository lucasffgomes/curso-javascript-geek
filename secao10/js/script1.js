// AJAX (XMLHttpRequest) -> Asynchronous JavaScript and XML

let btn =   document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div =   document.querySelector('#app');

btn.onclick = function() {
    // limpar conteudo da div
    div.innerHTML = '';

    // instanciando objeto ajax
    let ajax = new XMLHttpRequest();

    // abrir conexao
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    // enviar requisição
    ajax.send(null);

    ajax.onreadystatechange = function() {
        // criar elemento span
        let spanNone = document.createElement('span');

        // criar variavel nome
        let txtNome = '';

        if(ajax.readyState === 4) {
            if(ajax.status === 200) {
                // transformar dados JSON para array
                usuario = JSON.parse(ajax.responseText);

                // se o usuario possui nome
                if(usuario['name'] !== null) {
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);

                } else {
                    txtNome = document.createTextNode(`O usuário ${input.value} não tem nome.`);
                }

                // adiciona o texto ao span e o span a div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);

                // limpar input
                input.value = '';

            } else {
                txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);

                // adiciona o texto ao span e o span a div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
            }
        }
    }


}

