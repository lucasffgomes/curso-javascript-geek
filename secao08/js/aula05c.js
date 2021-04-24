let button = document.querySelectorAll('button');
let divElement = document.querySelector('#app');

for(let i = 0; i < button.length; i++) {
    button[i].onclick = function() {
        document.querySelector('#app').removeChild(this);
    };
}

