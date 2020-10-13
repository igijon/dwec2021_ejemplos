var frase = "Los estudiantes del CIFP Virgen de Gracia aprenden un montón.<br>";
function estudiar(){
    frase = "Me encanta estudiar.<br>";
    return frase;
}
document.write(window.estudiar());
document.write(window.frase);