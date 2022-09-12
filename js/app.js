'use strict'
const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

//AÑADIR HTML
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
            <div class="product-button">
            <a id="comprar${producto.id}">Comprar</a>
        <div>
        </div>
    </div>
    `
    contenedorProductos.appendChild(div)

    //A cada elemento del array se le agrega un div individual
    const boton = document.getElementById(`comprar${producto.id}`)

    //A cada elemento del array se le agrega un add event listener para ejecutar el botón COMPRAR con la id del producto
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})


//Agregar al carrito
const agregarAlCarrito = (prodId) => {

    //Para aumentar la cantidad y que no se repita
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ //Si ya está en el carrito, se actualiza la cantidad
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //Si no está en el carrito, se agrega al carrito
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento que le pase y devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""
    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <a onclick="eliminarDelCarrito(${prod.id})"><img src='img/basura.svg' class="trash-button"></a>
        `

        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innerText = carrito.length // Se actualiza con la longitud del carrito.

    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto que se recorra en el carrito, al acumulador se le suma la propiedad precio con el acumulador empezando en 0.

}