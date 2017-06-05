//var miTitulo = document.querySelector('h1');
//miTitulo.innerHTML = 'Hello World memo';
var miImage = document.querySelector('img');

miImage.onclick = function() {
    var miSrc = miImage.getAttribute('src');
    if(miSrc === 'images/Horse2.jpg') {
      miImage.setAttribute ('src','images/Horse1.jpg');
    } else {
      miImage.setAttribute ('src','images/Horse2.jpg');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function seleccionnombre() {
    var miNombre = prompt('por favor ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Mozilla is cool, ' + miNombre;
}

function multiplica(num1,num2)
{
	var result = num1 * num2;
	return result;	
}
if(!localStorage.getItem('nombre')) {
    seleccionnombre();
}
else {
    var storedName = localStorage.getItem('nombre');
    miTitulo.innerHTML = 'Mozilla is cool, ' + storedName;
}
miBoton.onclick = function() {
    seleccionnombre();
}
//document.querySelector('html').onclick = function() {
//    alert('Ouch! Deja de pincharme!');
//}