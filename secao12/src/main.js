class App {
    // construtor
    constructor() {
        // lista de repositorios
        this.repositorios = [];

        // form
        this.formulario = document.querySelector('form');

        // lista
        this.lista = document.querySelector('.list-group');

        // metodo para registrar os eventos do form
        this.registrarEventos();
    }

    registrarEventos() {
        this.formulario.onsubmit = evento => this.adicionarRepositorio(evento);
    }

    adicionarRepositorio(evento) {
        // evita que o formulario recarregue a pagina
        evento.preventDefault();

        // adiciona repositorio na lista
        this.repositorios.push({
            nome: 'Nerd Fonts',
            descricao: 'Iconic font aggregator, collection, and patcher',
            avatar_url: 'https://avatars0.githubusercontent.com/u/8083459?v=4',
            link: 'https://github.com/ryanoasis/nerd-fonts',
        });

        // renderizar a tela
        this.renderizarTela();
    }

    renderizarTela() {
        // limpar conteudo de lista
        this.lista.innerHTML = '';

        // percorrer toda a lista de reps e criar elementos
        this.repositorios.forEach(repositorio => {
            // <li>
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-action');

            // <img>
            let img = document.createElement('img');
            img.setAttribute('src', repositorio.avatar_url);
            li.appendChild(img);

            // <strong>
            let strong = document.createElement('strong');
            let txtNome = document.createTextNode(repositorio.nome);
            strong.appendChild(txtNome);
            li.appendChild(strong);

            // <p>
            let p = document.createElement('p');
            let txtDescricao = document.createTextNode(repositorio.descricao);
            p.appendChild(txtDescricao);
            li.appendChild(p);

            // <a>
            let a = document.createElement('a');
            a.setAttribute('target', '_blank');
            a.setAttribute('href', repositorio.link);
            let txtA = document.createTextNode('Acessar');
            a.appendChild(txtA);
            li.appendChild(a);

            // adicionar <li> como filho da <ul>
            this.lista.appendChild(li);

            // limpar o conteudo do <input>
            this.formulario.querySelector('input[id=repositorio').value = '';

            // adiciona foco no input
            this.formulario.querySelector('input[id=repositorio]').focus();
        });
    }
}

new App();