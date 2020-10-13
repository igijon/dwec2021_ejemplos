var productos = {};

/**
 * Muestra por pantalla el listado de productos: su id y el número de unidades
 */
function verStock(){
    var listado = "<ul>";
    for(x=0; x<productos.length; x++){
		listado += "<li>El producto número " + productos[x].id + " tiene " + productos[x].unidades + " unidades";
    }
    listado += "</ul>"
    document.getElementById("listado").innerHTML=listado;
}

/**
 * Amplía el stock, generando nuevos productos y concatenando éstos al array
 * de productos. Finalmente los muestra.
 */
function ampliarStock(){
    var nuevoStock = generarProductos();
    productos = productos.concat(nuevoStock);
	verStock();
	productos = ordenar(productos);
	verStock();
}

/**
 * 
 * @param {número de productos a generar} num
 * Si no nos indican número de productos, genera aleatoriamente entre 0 y 5.
 * Si nos indican el número, generará dicho número de productos. 
 */
function generarProductos(num){
    if(arguments.length === 0){
		num = Math.floor((Math.random() * 5)+1);
		console.log(num);
    }
	var p = [];
    for(x=0; x<num;x++){
		var prod = {};
		prod.unidades = Math.floor((Math.random() * 100));
		prod.id = x+"_"+prod.unidades; //El id se compone en este caso con n_m 
		p[x]=prod;
    }
    return p;
}

function comparar(a, b){
	return a.unidades - b.unidades;
}

function ordenar(productos) 
{
	return productos.sort(comparar);
}



/**
 * Genera un número de productos iniciales
 */
onload=function(){
    productos = generarProductos(10);
};
