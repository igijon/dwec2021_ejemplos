var frase = "Hola estudiantes.";
var nueva;

function estudiar(){
	var frase2 = "Estudiad mucho!";
	function mucho(){
		document.write("Global: " +  frase + "<br>");       
		document.write("Local: " + frase2 + "<br>");   
	}
	nueva = mucho;        
}

estudiar();
nueva();
