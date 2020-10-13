function Coche(){
  this.matricula = "ABCD";
 }
 
 var coche1 = new Coche();
 document.write(coche1.matricula + "<br>");
 document.write(window.matricula + "<br>");
 document.write("-------------------------<br>");
 
 var coche2 = Coche(); 
 document.write("Al no utilitzar <b>new</b> this apunta a window. <br>");
 
 document.write(window.matricula  + "<br>");
 document.write(coche2.matricula + "<br>");
 