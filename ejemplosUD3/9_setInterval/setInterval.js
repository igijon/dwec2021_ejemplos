var intervalID;
var numExec=1;

function funcionReiterada() {
  intervalID = setInterval(alerta, 2000);
}

function alerta() {
  alert("Hola, esta es la ejecución número: " + numExec);
  numExec++;
}

function cancelarEjecucion() {
  clearInterval(intervalID);
}