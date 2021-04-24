let a = document.querySelector('.link');

console.log(a.innerText);
console.log(a.parentNode);

console.log(a.parentNode.parentNode);  // html

console.log(a.parentNode.parentNode.parentNode); // Document

console.log(a.parentNode.parentNode.firstChild);

console.log(a.firstChild);
console.log(a.parentNode.parentNode.lastChild); // body

console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild);

