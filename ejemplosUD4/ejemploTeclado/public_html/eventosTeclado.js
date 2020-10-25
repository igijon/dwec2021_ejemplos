/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cargar()
{
    var cambiarColor = function (node, tecla) {
        console.log(tecla);
        switch (tecla) {
            case 'r':
                node.className = 'rojo';
                break;

            case 'a':
                node.className = 'amarillo';
                break;

            case 'b':
                node.className = 'blanco';
                break;
        }
    };

    var determinarColor = function (event) {
        var tecla = event.key || event.keyIdentifier;
        var node = document.getElementById('pruebas');
        cambiarColor(node, tecla);
    };

    var inicializar = function () {
        var element = document.getElementById('pruebas');
        element.focus();
        element.addEventListener('keypress', determinarColor);

    };

    inicializar();
}
