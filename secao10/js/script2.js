let btn =   document.querySelector('#btn');
let div =   document.querySelector('#app');

let promise = function() {
    return new Promise(function(resolve, reject) {
        let github_user = document.querySelector('input[name=github_user]').nodeValue;
        
        let ajax = new XMLHttpRequest();
        ajax.open('GET', `https://api.github.com/users/${github_user}`);
        ajax.send(null);

    });
}