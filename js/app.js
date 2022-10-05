'use strict'
const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonComprarInterno = document.getElementById('comprar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

//Array Carrito
let carrito = [];

//PRIMER PRIMER PASO, INYECTAR EL HTML
const infoProductos = async () => {
    try {
        const contenedorProductos = document.getElementById('contenedor-productos')
        const response = await fetch("./data.json")
        const stockProductos = await response.json();
        
        stockProductos.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add('producto')
            
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
    } catch(error) {
        console.log(`Se ha producido un error:`, error);
    }
    
}

infoProductos();

//ESTO ES PARA DEJAR LOS PRODUCTOS GUARDADOS AL REFRESCAR LA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//ELIMINAR PRODUCTO DEL CARRITO
const eliminarDelCarrito = (id) => {
    carrito = carrito.filter((item) => item.id !== id)

    actualizarCarrito();
    if (carrito.length === 0) return localStorage.clear();
    
    console.log(id);
}

// ACTUALIZAR CARRITO
function actualizarCarrito() {
    renderItemCarrito();
    renderPrecioTotal();
}

//AGREGAR AL CARRITO
//VERIFICAR SI EL PRODUCTO YA EXISTE EN EL CARRITO
const addToCart = async (id) => {
    try {
        const response = await fetch("./data.json");
        const stockProductos = await response.json();
        
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
    } catch(error) {
        console.log(`Se ha producido un error:`, error);
    }   
}

addToCart();

// Calcular y renderizar el precio total
function renderPrecioTotal() {
    let valorTotal = 0,
    productosTotales = 0;

    carrito.forEach((item) => {
        valorTotal += (item.precio + (item.precio * 21 / 100)) * item.numberOfUnits;
        productosTotales += item.numberOfUnits;
    })

    precioTotal.innerHTML = `Precio Total (IVA incluido): $<span id="precioTotal">${valorTotal.toFixed(2)}</span><br>Total Productos: ${productosTotales}`
}


// renderItemCarrito()
//Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
function renderItemCarrito() {
    contenedorCarrito.innerHTML = ""
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

// BOTÓN PARA COMPRAR LA LISTA DE COMPRAS
botonComprarInterno.addEventListener('click', () => {
    
    if(carrito.length > 0) {
        swal('¡Gracias por su compra!', 'Vuleva pronto', 'success');
    } else {
        swal('Usted no tiene productos en el carrito.', 'Debe añadir un producto', 'error');
    }
})