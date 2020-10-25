/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function funcionPresentacion() {
  console.log('Hola, mi nombre es ' + this.nombre + ', tengo ' + this.edad + ' años y soy ' + this.ocupacion);
}

var funcionSalir = function() {
  console.log(this.nombre + ' abandona la sala');
};

var persona = {
  nombre: 'Ricardo',
  ocupacion: 'Policia',
  edad: 40,
  presentacion: funcionPresentacion,
  salir: funcionSalir
};

// El contexto de estas funciones es el objeto persona
persona.presentacion();
persona.salir();

// El contexto de estas invocaciones es el objeto window
funcionPresentacion();
funcionSalir();

