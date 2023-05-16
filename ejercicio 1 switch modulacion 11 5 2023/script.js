const pPrecioTotal = document.querySelector("#precio-total");
const selectCantidad = document.querySelector("select");
const olCarrito = document.querySelector("#carrito");
const fsContenedorProducto = document.querySelector("#contenedor-producto");

const PRECIO_PROD_1 = 500;
const NOMBRE_PROD_1 = "Pan"
const PRECIO_PROD_2 = 200;
const NOMBRE_PROD_2 = "Factura"

let precioProductoActual = PRECIO_PROD_1;
let nombreProductoActual = NOMBRE_PROD_1;

let precioTotal = 0;

function agregarProducto(){
     precioTotal = (PrecioProductoActual * selectCantidad.value) + precioTotal;
     pPrecioTotal.innerHTML = "Total: $" + (precioTotal);
     olCarrito.innerHTML += `<li> ${NOMBRE_PROD_1 } (${selectCantidad.value})</li>`;
}
    
function pasarProducto(){
    fsContenedorProducto.innerHTML = `
    <img src="https://assets.elgourmet.com/wp-content/uploads/2023/03/factu_tgT5LkaHZGSI7qnfimJzOrvRWEu4sK-1024x683.png.webp">
          <p>Factura</p>
          <p>PRECIO: $200</p>
    `;
    precioProductoActual = PRECIO_PROD_2;
    nombreProductoActual = NOMBRE_PROD_2;
}