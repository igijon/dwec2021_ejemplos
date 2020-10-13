function esPrimo(valor){

  if(!esPrimo.cache) {
    esPrimo.cache = {}; // si no existe la caché de resultados, la creamos
   }

   if(esPrimo.cache[valor] != null) {   // ya existe el valor
      return "<b>" + esPrimo.cache[valor] + "<b>";
   }

   // lo calculamos porque no tenemos el resultado

   var primo = (valor != 1) // 1 no es primo

   // buscamos un divisor mayor o igual que 2 y menor que valor

   for(var i = 2; (i < valor && primo); i++){ 
      if(valor % i == 0){
         primo = false;
      }
   }

   esPrimo.cache[valor] = primo;
   return primo;
}
document.write (esPrimo(5)+"<br/>");
document.write (esPrimo(5)); //lo escribe en negrita porque estaba ya en la caché