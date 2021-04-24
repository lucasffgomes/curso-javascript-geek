// let itexto = document.getElementById('produto');
// console.log(itexto);

let spans = document.getElementsByTagName('span');
// console.log(spans);

// let eles = document.getElementsByClassName('texto');
// console.log(eles);

// ler valores 
console.log(spans[0].textContent);
console.log(spans[1].innerHTML);

// alterar valores
spans[0].textContent = 'JavaScript';
spans[1].innerHTML = 'Geek University';

let span = document.getElementsByTagName('span')[0];
console.log(span.innerHTML);

span.style.textTransform = 'uppercase';

// let inp = document.querySelector('body div.container div.row input')  // busca primeiro elemento pela tag

// let eles = document.querySelectorAll('.texto');  // busca todos elementos pela classe

// let div1 = document.querySelector('#div1');  // busca elemento pelo ID

// let imp = document.querySelector('input[name=produto]');

// console.log(imp);

// exemplo 1
// let btn = document.querySelector('button.btn');
// btn.onclick = function() {
//     alert('Botão acionado.');
// }

// exemplo 2
let btn2 = document.querySelector('button.btn');
let inp = document.querySelector('input[name=produto]');

btn2.onclick = function() {
    alert(`Temos o texto ${inp.value}`)
}