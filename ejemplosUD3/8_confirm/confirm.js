function dialogos(){
    var nombre = prompt("Cómo te llamas?");
    var respuesta = confirm("Sabes la hora " + nombre +"?");
    if (respuesta){
       alert(new Date());
    }
    else{
       alert("oooh.");
    }  
  }