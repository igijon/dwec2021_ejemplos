var obj = {
    nombre : 'Ramon',
    apellidos : 'Sánchez',
    fechaNacimiento : '1232',
    nombreCompleto : this.nombre + " " + this.apellidos
};

document.write( obj.nombre + "<br>"); // Ramón
document.write( obj.apellidos+ "<br>" ); // Ramón
document.write( obj.nombreCompleto + "<br>" ); // ?