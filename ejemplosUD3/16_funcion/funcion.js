var obj = {
    nombre : 'Ramon',
    apellidos : 'Sánchez',
    nacimiento : '1232',
    nombreCompleto : function() { return this.nombre + " " + this.apellidos;}
  };
  document.write( obj.nombre + "<br>"); // Ramon
  document.write( obj.apellidos+ "<br>" ); // Sánchez
  document.write( obj.nombreCompleto() + "<br>" ); // Ramon Sánchez