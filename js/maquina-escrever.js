function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
   elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML+= letra
        }, 75 * i)
    });
}

const titulo = document.getElementById('titulo_home'); 
typeWrite(titulo);
