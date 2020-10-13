var productos = {};

/**
 * Muestra por pantalla el listado de productos: su id y el número de unidades
 */
function verStock() {
    var listado = "<ul>";
    for (x = 0; x < productos.length; x++) { //productos[0]=5; productos[1]=12; productos[2]=27;
        listado += "<li>El producto número " + x + " tiene " + productos[x] + " unidades";
    }
    listado += "</ul>"
    document.getElementById("listado").innerHTML = listado;
}

/**
 * Amplía el stock, generando nuevos productos y concatenando éstos al array
 * de productos. Finalmente los muestra.
 */
function ampliarStock() {
    var nuevoStock = generarProductos();
    productos = productos.concat(nuevoStock);
    verStock();
}

function addProducto() {
    //Añádir un producto al array de productos
    //Pedimos el stock al usuario
    var unidades = promt("Stock del producto: ");
    //Añadir al producto (en la última posición del array+1) las unidades que ha introducido el usuario
    //productos.length (10), estarán ocupadas del 0 al 9. productos[productos.length]=unidades;
    //verStock();
}

function removeProduct() {
    //Poner a 0 o a undefined la última posición del array.
}


function ordenar()
{
    //p[0]=23; p[1]=35; p[2]=10; p[3]=2;
    //Pensar de qué forma lo puedes almacenar para no perder el id del producto.
    //productos = {}; Es un array ... productos[0].id = 0; productos[0].unidades = 34;
    //JavaScript => sort(). productos.sort() => ordena alfabéticamente
    //productos.sort(comparar);
    /**
     * function comparar(p1, p2)
     * {
     *      if(p1.unidades < p2.unidades) return -1;
     *      else if(p1.unidades > p2.unidades) return 1;
     *      else return 0;
     * }
     */
}
/**
 * 
 * @param {número de productos a generar} num
 * Si no nos indican número de productos, genera aleatoriamente entre 0 y 5.
 * Si nos indican el número, generará dicho número de productos. 
 */
function generarProductos(num) {
    if (arguments.length === 0) {
        num = Math.floor((Math.random() * 5) + 1); //Math.round(4.7) => 5; Math.floor(4.7) => 4
    }
    var p = [];
    for (x = 0; x < num; x++) //num = 5
        p[x] = Math.floor((Math.random() * 100)); //Genera el número de unidades del producto de forma aleatoria
    return p; //p[0]=23; p[1]=45; ... p[4]=34; 5 productos
}




/**
 * Genera un número de productos iniciales
 */
onload = function () {
    productos = generarProductos(10);
};
