const email = window.document.querySelector('#email');
const pass = window.document.querySelector('#password');
const msje = window.document.querySelector('#mensaje');
const boton = window.document.querySelector('#boton');

boton.addEventListener('click', mostrarDatos);

function mostrarDatos() {
  const emailValue = email.value;
  const passValue = pass.value;
  if (emailValue !== '') {
     console.log('email: ' + emailValue);
     console.log('password: ' + passValue);
     email.focus();


     if (emailValue === 'ejemplo@gmail.com' && passValue === '123456') {
       msje.classList = [];
       window.alert("iniciando sesion")
       console.log('Iniciando sesión');  
       location="file:///C:/Users/victor/Documents/proyectos/Interfaz/zafary.htm"  
     } else {
       msje.classList = [];
       msje.classList.add('mensaje-visible');
       console.log('Email y/o contraseña incorrectos');  
       window.alert("datos incorrectos")  
     }

     
  } else {
    console.log('Ingrese datos');
    msje.setAttribute('small', 'ingrese datos');
  }
}


