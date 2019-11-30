var lista = document.getElementsByClassName('section-lista-eventos-pendentes');

var btn = document.getElementsByClassName('data-dia');

btn[0].addEventListener('click', hiden);

function hiden() {
    lista[0].style.display = "inline";
}