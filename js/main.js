'use strict'
// Array para almacenar y luego, buscar un producto específico.

// Clase para Productos
class Productos {
    constructor(nombre, precio, stock) {
        //Atributos
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }

    //Métodos
    precioConIva() {
        return this.precio = this.precio + (this.precio * 21 / 100);
    }
}

//Array para almacenar los productos
const productosDePanaderia = [];

productosDePanaderia.push(new Productos("Chausson aux pommes", 300, 200));
productosDePanaderia.push(new Productos("Beignet", 100, 200));
productosDePanaderia.push(new Productos("Honey Bread Roll", 200, 200));
productosDePanaderia.push(new Productos("Brioche", 400, 200));
productosDePanaderia.push(new Productos("Canelés", 500, 200));
productosDePanaderia.push(new Productos("Cremé Flan", 600, 200));
productosDePanaderia.push(new Productos("Choux á la créme", 700, 200));
productosDePanaderia.push(new Productos("Clafoutis", 800, 200));
productosDePanaderia.push(new Productos("Macaron", 900, 200));
productosDePanaderia.push(new Productos("Crêpe Suzette", 320, 250));
productosDePanaderia.push(new Productos("Croissant", 150, 250));
productosDePanaderia.push(new Productos("Éclair", 250, 250));
productosDePanaderia.push(new Productos("Pastel de Coco", 450, 250));
productosDePanaderia.push(new Productos("Financier", 550, 250));
productosDePanaderia.push(new Productos("Gland", 650, 250));
productosDePanaderia.push(new Productos("Madeleines", 750, 250));
productosDePanaderia.push(new Productos("Calisson", 850, 250));
productosDePanaderia.push(new Productos("Dariole", 950, 250));
productosDePanaderia.push(new Productos("Flaugnarde", 320, 220));
productosDePanaderia.push(new Productos("Isla Flotante", 120, 220));
productosDePanaderia.push(new Productos("Riz à l'impératrice", 220, 220));
productosDePanaderia.push(new Productos("Suflé", 420, 220));
productosDePanaderia.push(new Productos("tarte aux pralines", 520, 220));
productosDePanaderia.push(new Productos("Babá", 620, 220));

//Incluye el IVA en todos los productos
for(const productos of productosDePanaderia) {
    productos.precioConIva();
}


//Identificar al cliente
let usuario = prompt("Ingrese su nombre".toLowerCase());

// Búsqueda de un producto
let pedido;
let producto;
let pedido2;

alert(`Nuestros productos son: \n 0) Chausson aux pommes \n 1) Beignet \n 2) Honey Bread Roll \n 3) Brioche \n 4) Canelés \n 5) Cremé Flan \n 6) Choux á la créme \n 7) Clafoutis \n 8) Macaron \n 9) Crêpe Suzette \n 10) Croissant \n 11) Éclair \n 12) Pastel de Coco \n 13) Financier \n 14) Gland \n 15) Madeleines \n 16) Calisson \n 17) Dariole \n 18) Flaugnarde \n 19) Isla Flotante \n 20) Riz à l'impératrice \n 21) Suflé \n 22) tarte aux pralines \n 23) Babá`);

const buscarProducto = () => {
    pedido = prompt(`${usuario} ingrese el nombre del producto:`);
    producto = productosDePanaderia.find(item => item.nombre === pedido);
    alert(JSON.stringify(producto));

    pedido2 = parseInt(prompt("Si desea continuar buscando productos, presione '4', de lo contario presione otro número:"));
    while(pedido2 === Number(4)) {
        pedido = prompt("Ingrese el nombre del producto:");
        producto = productosDePanaderia.find(item => item.nombre === pedido);
        alert(JSON.stringify(producto));

        pedido2 = parseInt(prompt("Si desea continuar buscando productos, presione '4', de lo contario presione otro número:"));
    }

    if(pedido2 === Number(pedido2)) {
        alert("Ha cerrado el carrito.");
    }
}

buscarProducto();