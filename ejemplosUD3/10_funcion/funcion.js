var parImpar = (function() {
  var fecha = new Date();
  if (fecha.getDate() % 2 == 0) {
    return function() { document.write("La fecha es día par") }
  } else {
    return function() { document.write("La fecha es día impar") }
  }
  })();
   
  parImpar();


