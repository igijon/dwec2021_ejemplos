function ejemplo(){
  var contador = 0;
  for (var i = 0; i < arguments.length; i++){
       contador += arguments[i];
  }
  
  this.result = contador;
}

var objeto1 = {};
var objeto2 = {};

ejemplo.apply(objeto1,[1,2,3,4]);
ejemplo.call(objeto2,5,6,7,8);
ejemplo(3,20);

document.write("objeto1.result: " + objeto1.result + "<br>");
document.write("objeto2.result: " + objeto2.result + "<br>");
document.write("window.result: " + window.result + "<br>");


 