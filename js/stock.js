// Clase para Productos
class Productos {
    constructor(id, nombre, stock, descripcion, precio, img) {
        //Atributos
        this.id = parseInt(id);
        this.nombre = nombre;
        this.stock = parseInt(stock);
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);
        this.img = img;
    }

    //Métodos
    precioConIva() {
        return this.precio = this.precio + (this.precio * 21 / 100);
    }
}

//Array para almacenar los productos
const stockProductos = [];

stockProductos.push(new Productos(1, "Chausson aux pommes", 200, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 200, 'img/postre1.png'));
stockProductos.push(new Productos(2, "Beignet", 200, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 200, 'img/postre2.png'));
stockProductos.push(new Productos(3, "Honey Bread Roll", 200, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 200, 'img/postre3.png'));
stockProductos.push(new Productos(4, "Brioche", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 200, 'img/postre4.png'));
stockProductos.push(new Productos(5, "Canelés", 200, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 200, 'img/postre5.png'));
stockProductos.push(new Productos(6, "Cremé Flan", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 200, 'img/postre6.png'));
stockProductos.push(new Productos(7, "Choux á la créme", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 200, 'img/postre7.png'));
stockProductos.push(new Productos(8, "Clafoutis", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 200, 'img/postre8.png'));
stockProductos.push(new Productos(9, "Macaron", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 200, 'img/postre9.png'));
stockProductos.push(new Productos(10, "Crêpe Suzette", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 250, 'img/postre10.png'));
stockProductos.push(new Productos(11, "Croissant", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 250, 'img/postre11.png'));
stockProductos.push(new Productos(12, "Éclair", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 250, 'img/postre12.png'));
stockProductos.push(new Productos(13, "Pastel de Coco", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 250, 'img/postre13.png'));
stockProductos.push(new Productos(14, "Financier", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 250, 'img/postre14.png'));
stockProductos.push(new Productos(15, "Gland", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 250, 'img/postre15.png'));
stockProductos.push(new Productos(16, "Madeleines", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 250, 'img/postre16.png'));
stockProductos.push(new Productos(17, "Calisson", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 250, 'img/postre17.png'));
stockProductos.push(new Productos(18, "Dariole", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 250, 'img/postre18.png'));
stockProductos.push(new Productos(19, "Flaugnarde", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre19.png'));
stockProductos.push(new Productos(20, "Isla Flotante", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre20.png'));
stockProductos.push(new Productos(21, "Riz à l'impératrice", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre21.png'));
stockProductos.push(new Productos(22, "Suflé", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre22.png'));
stockProductos.push(new Productos(23, "tarte aux pralines", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre23.png'));
stockProductos.push(new Productos(24, "Babá", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre24.png'));
stockProductos.push(new Productos(25, "Mille-Feuille", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre25.png'));
stockProductos.push(new Productos(26, "Mont Blanc", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre26.png'));
stockProductos.push(new Productos(27, "Pain Au Chocolat", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre27.jpg'));
stockProductos.push(new Productos(28, "Pain Aux Raisins", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre28.png'));
stockProductos.push(new Productos(29, "Palmier", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre29.png'));
stockProductos.push(new Productos(30, "Paris-Brest", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre30.png'));
stockProductos.push(new Productos(31, "Petit Four", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre31.png'));
stockProductos.push(new Productos(32, "Profiterole", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre32.png'));
stockProductos.push(new Productos(33, "Croquembouche", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre33.png'));
stockProductos.push(new Productos(34, "Religieuse", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre34.png'));
stockProductos.push(new Productos(35, "Rum Babá", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre35.png'));
stockProductos.push(new Productos(36, "Saint Honoré", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre36.png'));
stockProductos.push(new Productos(37, "Tarta de Crema Pastelera", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre37.png'));
stockProductos.push(new Productos(38, "Tarta Tatin", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre38.png'));
stockProductos.push(new Productos(39, "Crème Brûlée", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre39.png'));
stockProductos.push(new Productos(40, "Charlotte", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre40.png'));
stockProductos.push(new Productos(41, "Pastel Ópera", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre41.png'));
stockProductos.push(new Productos(42, "Fraisier", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre42.png'));
stockProductos.push(new Productos(43, "Kouign Amann", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre43.png'));
stockProductos.push(new Productos(44, "Tarta Marjolaine", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre44.png'));
stockProductos.push(new Productos(45, "Mousse", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre45.png'));
stockProductos.push(new Productos(46, "Mendiant", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre46.png'));
stockProductos.push(new Productos(47, "Torta Normanda", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre47.png'));
stockProductos.push(new Productos(48, "Pain D'épices", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre48.png'));
stockProductos.push(new Productos(49, "Pot de crème", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre49.png'));
stockProductos.push(new Productos(50, "Baguette", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre50.png'));
stockProductos.push(new Productos(51, "Chouquettes", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre51.png'));
stockProductos.push(new Productos(52, "Coussin de Lyon", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre52.png'));
stockProductos.push(new Productos(53, "Croustade", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre53.png'));
stockProductos.push(new Productos(54, "Jésuite", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre54.png'));
stockProductos.push(new Productos(55, "Puits D'amour", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220,'img/postre55.png'));
stockProductos.push(new Productos(56, "Savarin", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre56.png'));
stockProductos.push(new Productos(57, "Tarte des Alpes", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220,'img/postre57.png'));
stockProductos.push(new Productos(58, "Tarte tropézienne", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220, 'img/postre58.png'));
stockProductos.push(new Productos(59, "Tuile", 200,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere vel ipsa, quibusdam in ea dolores autem doloribus consequatur minus, temporibus beatae non sequi eius quaerat laudantium hic perferendis deserunt?", 220,'img/postre59.png'));

//Incluye el IVA en todos los productos
for(const productos of stockProductos) {
    productos.precioConIva();
}

//BUSQUEDA
const formulario = document.querySelector('#formulario');

//const botonBuscador = document.querySelector('.btn')
const botonBuscador = document.querySelector('.btn');
const resultado = document.querySelector('#resultado');

const filtrarBusqueda = () => {
    //console.log(formulario.value);
    resultado.innerHTML = '';
    const textoBusqueda = formulario.value.toLowerCase();
    
    for(const productos of stockProductos) {
        const nombre = productos.nombre.toLowerCase();
        if (nombre.indexOf(textoBusqueda) !== -1) {
            resultado.innerHTML += `
            <li>${productos.nombre}</li>`
        }
    }
    if(resultado.innerHTML === '') {
        resultado.innerHTML += `
        <li>Producto no encontrado</li>`
    }
}

botonBuscador.addEventListener('click', filtrarBusqueda);