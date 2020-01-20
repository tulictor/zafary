const btnhom = document.querySelector('#btn-home');
const btmwhats = document.querySelector('#btn-whats');
const btnspoty = document.querySelector('#btn-spot');

btnhom.addEventListener('click', cargarpaginahome);
btmwhats.addEventListener('click', cargapaginawhats);
btnspoty.addEventListener('click', cargapaginaspoti);


function cargarpaginahome() {
    const contdinamico = document.querySelector('#contenido-dinamico');
   
    contdinamico.setAttribute('src',  'file:///C:/Users/victor/Documents/proyectos/Home/index.html');

}

function cargapaginawhats() {
    const contdinamico = document.querySelector('#contenido-dinamico');

    contdinamico.setAttribute('src',  'file:///C:/Users/victor/Documents/proyectos/Whatzapp/index.html')
}

function cargapaginaspoti(){
    const contdinamico = document.querySelector('#contenido-dinamico');

    contdinamico.setAttribute('src',  'file:///C:/Users/victor/Documents/proyectos/zpofity/index.html')
}