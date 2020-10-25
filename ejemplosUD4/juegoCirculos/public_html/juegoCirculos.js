/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function cargar()
{

    var idTemporizador, actual;

    var addObjetive = function (id) {
        var node = document.getElementById(id);
        node.className = 'objetivo';
        node.addEventListener('click', win);
    };

    var delObjetive = function (id) {
        var node = document.getElementById(id);
        node.className = '';
        node.removeEventListener('click', win);
    };

    var setWinner = function(id) {
        var node = document.getElementById(id);
        node.className = 'objetivoGanador';
    };
    
    var win = function () {
        delObjetive(actual);
        setWinner(actual);
        clearTimeout(idTemporizador);
    };

    function getEnteroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var setCircle = function () {
        if (actual > 0) {
            delObjetive(actual);
        }

        actual = getEnteroAleatorio(1, 9);
        addObjetive(actual);

        idTemporizador = setTimeout(setCircle, 3000);
    };

    var inicializar = function () {
        setCircle();
    };

    inicializar();

}