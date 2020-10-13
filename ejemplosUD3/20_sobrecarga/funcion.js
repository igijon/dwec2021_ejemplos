function addMethod(objeto, nombre, funcion){
	var old = objeto[nombre];
	objeto[nombre] = function(){
            if(funcion.length == arguments.length){ //Caso base
                    return funcion.apply(this, arguments);
            }
            else  if (typeof old == 'function'){ //Comprobamos que old es una función porque si no
               //estaríamos en la primera llamada en la cual el objeto no tenía asociado ningún método con ese nombre
                    return old.apply(this, arguments);
            }
		};
}


var persona = {};
addMethod(persona, "calculMatricula", function(){ return "no params";  });
addMethod(persona, "calculMatricula", function(a){ return a;  });
addMethod(persona, "calculMatricula", function(a,b){  return a + " " + b;  });

document.write("Sin parámetros: " + persona.calculMatricula() + "<br>");
document.write("Un parámetro: " + persona.calculMatricula(1) + "<br>");
document.write("Dos parámetros: " + persona.calculMatricula(2,3) + "<br>");