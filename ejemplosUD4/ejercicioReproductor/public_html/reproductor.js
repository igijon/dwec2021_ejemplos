/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cargar()
{
    var mostrarMensaje = function () {
        alert('S\'ha pausado el reproductor');
    };

    var inicializar = function () {
        var reproductor = document.getElementById('reproductor');
        reproductor.addEventListener('pause', mostrarMensaje);
    };

    inicializar();
}