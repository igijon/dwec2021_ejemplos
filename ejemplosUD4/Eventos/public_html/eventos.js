/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cargar()
{
// Guardamos el elemento en una variable
    var primerCaso = document.getElementById('eventos1');
    var segundoCaso = document.getElementById('eventos2');

// Creamos las funciones 
    function mostrarMensaje1() {
        alert("Primera función");
    }

    function mostrarMensaje2() {
        alert("Segunda función");
    }

//Asignamos al evento onClick del elemento primerCaso las dos funciones manejadoras.
    primerCaso.onclick = mostrarMensaje1;
    primerCaso.onclick = mostrarMensaje2;

// Subscribimos las funciones al elemento para el evento click
    segundoCaso.addEventListener('click', mostrarMensaje1);
    segundoCaso.addEventListener('click', mostrarMensaje2);
}
