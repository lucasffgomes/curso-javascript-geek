// referenciar input
let input = document.querySelector('input[name=tarefa]');

// referenciar button
let button = document.querySelector('#botao');

// referenciar a lista
let lista = document.querySelector('#lista');

// card
let card = document.querySelector('.card');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas() {
    // limpar a listagem antes de renderizar a tela
    lista.innerHTML = '';

    for(tarefa of tarefas) {
        // criar elemento da lista
        let itemLista = document.createElement('li');

        // adicionar classes no elemento da lista
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        itemLista.onclick = function() {
            deletarTarefa(this);
        }

        // criar um texto
        let itemTexto = document.createTextNode(tarefa);

        // adicionar texto no item da lista
        itemLista.appendChild(itemTexto);

        // adicionar o item da lista na lista
        lista.appendChild(itemLista);
    }
}

renderizarTarefas();

// escutar o oevento do onclick do botao
button.onclick = function() {
    // capturar o valor digitado no input
    let novaTarefa = input.value;

    if(novaTarefa !== '') {   
        // atualizar a nova tarefa na lista e renderizar a tela
        tarefas.push(novaTarefa);
        
        renderizarTarefas();
        
        // limpar input
        input.value = '';

        // limpar mensagens de erro
        removerSpans();

        // salva os novos dados no DB
        salvarDadosNoStorage();

    } else {
        removerSpans();

        let card = document.querySelector('.card');
        let span = document.createElement('span');
        
        span.setAttribute('class', 'alert alert-warning');

        let mensagem = document.createTextNode('Você precisa inserir a tarefa!');

        span.appendChild(mensagem);
        card.appendChild(span);
    }
}

function removerSpans() {
    let spans = document.querySelectorAll('span');

    for(let i = 0; i < spans.length; i++) {
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar) {
    // remove a tarefa do array
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    renderizarTarefas();

    // salva os novos dados no DB
    salvarDadosNoStorage();
}

function salvarDadosNoStorage() {
    // todo navegador tem storage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

