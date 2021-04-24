let buttons = document.querySelectorAll('button');

for(let i = 0; buttons.length; i++) {
    console.log(buttons[i].getAttribute('class').split('-')[1]);
    buttons[i].onclick = function() {
        document.querySelector('body').style.backgroundColor = this.getAttribute('class').split('-')[1];
    };
}