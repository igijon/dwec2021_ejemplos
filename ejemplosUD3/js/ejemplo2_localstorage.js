function guardar() {
	var animal = document.getElementById("nombreAnimal").value;
	var vegetal = document.getElementById("nombreVegetal").value;
	/*Guardamos los datos en localStorage*/
	localStorage.setItem("animal", animal);
	localStorage.setItem("vegetal", vegetal);
	/* limpiamos el campo */
	document.getElementById("nombreAnimal").value = "";
	document.getElementById("nombreVegetal").value = "";
};  

function cargar() {
	var animal = localStorage.getItem("animal");
	var vegetal = localStorage.getItem("vegetal");
	document.getElementById("nombreAnimal").value = animal;
	document.getElementById("nombreVegetal").value = vegetal;
}