function Persona(){
	var anios= 0;

	this.getAnios = function(){
		return anios;
	};
	
	this.envejecer = function(){
		anios++;
	};	
}	
	
var juan = new Persona();
juan.envejecer();

alert("No podemos acceder: " + juan.anios);
alert("getAnios: " + juan.getAnios());