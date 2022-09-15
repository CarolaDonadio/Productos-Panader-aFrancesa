'use strict'
const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

//Array Carrito
let carrito = []



//PRIMER PRIMER PASO, INYECTAR EL HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.setAttribute('id', '#resultado')

    div.innerHTML = `
    <img src=${producto.img} class="imgBox" alt= "">
    <div class="product-details">
        <div class="product-title">
            <h3>${producto.nombre}</h3>
        </div>
        <div class="product-description">
            <h4>Description</h4>
            <p>${producto.descripcion}</p>
        </div>
        <div class="product-buy">
            <div class="product-price">
                <span class="precioProducto"><small>$</small>${producto.precio},<small>00</small></span>
            </div>
            <div class="product-button" onclick="addToCart(${producto.id})">
            <a>Comprar</a>
        <div>
        </div>
    </div>
    `
    contenedorProductos.appendChild(div)
})



//ESTO ES PARA DEJAR EL ÚLTIMO PRODUCTO AL REFRESCAR LA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

// ACTUALIZAR CARRITO
function actualizarCarrito() {
    renderItemCarrito();
    renderPrecioTotal();
}

//AGREGAR AL CARRITO
//VERIFICAR SI EL PRODUCTO YA EXISTE EN EL CARRITO
function addToCart(id) {
    if (carrito.some((item) => item.id === id)) {
        cambiarNumeroDeUnidades("aumentar", id)
    } else {
        const item = stockProductos.find((producto) => producto.id === id);
        carrito.push({
            ...item,
            numberOfUnits: 1,
        });
    }
    actualizarCarrito();
}

// Al presionar el botón Vaciar, la cantidad vuelve a 0 y se actualiza el carrito.
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})


// Calcular y renderizar el precio total
function renderPrecioTotal() {
    let valorTotal = 0,
    productosTotales = 0;

    carrito.forEach((item) => {
        valorTotal += item.precio * item.numberOfUnits;
        productosTotales += item.numberOfUnits;
    })

    precioTotal.innerHTML = `Precio total: $<span id="precioTotal">${valorTotal.toFixed(2)}</span><br>Total Productos: ${productosTotales}`
}


// renderItemCarrito()
//Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
function renderItemCarrito() {
    contenedorCarrito.innerHTML = "" //classProducto === div
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
            
        div.innerHTML = `
        <img src='${prod.img}' class="imgCarritoInterno">
        <div class="containerInfoCarrito">
            <p class="nombreProducto">${prod.nombre}</p>
            <p>Precio: <small>$</small>${prod.precio}</p>
            <div class="unidadesDelCarrito">
                <div class="botonUnidades disminuir" onclick="cambiarNumeroDeUnidades('disminuir', ${prod.id})">-</div>
                <div class="numeroUnidades">${prod.numberOfUnits}</div>
                <div class="botonUnidades aumentar" onclick="cambiarNumeroDeUnidades('aumentar', ${prod.id})">+</div>           
            </div>
        </div>
        <a onclick="eliminarDelCarrito(${prod.id})"><img src='img/cancel.png' class="trash-button"></a>
        `
        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length // Se actualiza con la longitud del carrito.
}
    
//Cambiar el número de unidades por un prod(item)
function cambiarNumeroDeUnidades(action, id) {
    carrito = carrito.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if (item.id === id) {
            if (action === "disminuir" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "aumentar" && numberOfUnits < item.stock) {
                numberOfUnits++;
            }
        }
        return {
            ...item,
            numberOfUnits: numberOfUnits,
        }
    })
    actualizarCarrito();
}

//ELIMINAR PRODUCTO DEL CARRITO
const eliminarDelCarrito = (productoAEliminarId) => {
    const item = carrito.find((productoAEliminarId) => productoAEliminarId.id === productoAEliminarId)

    const indice = carrito.indexOf(item) //Busca el producto a eliminar y devuelve su indice.

    carrito.splice(indice, 1) //Se le pase el indice del producto obtenido de "item" y borra dicho producto 
    actualizarCarrito() //Luego se actualiza el carrito para ver los cambios
}