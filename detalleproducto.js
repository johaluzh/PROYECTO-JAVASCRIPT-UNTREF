document.addEventListener("DOMContentLoaded", () => {
  const detalleProducto = document.getElementById("detalle-producto");

  const urlParams = new URLSearchParams(window.location.search);
  const idProducto = urlParams.get("id");

  const datosProductos = JSON.parse(localStorage.getItem("productos"));

  if (datosProductos && datosProductos.productos) { 
    const productoSeleccionado = datosProductos.productos.find(producto => producto.id === parseInt(idProducto));

    if (productoSeleccionado) {
      const contenedorDetallesProducto = document.createElement("div");
      contenedorDetallesProducto.classList.add("detalles-de-producto");
      contenedorDetallesProducto.innerHTML = `
        <img src="${productoSeleccionado.imagen}" alt="Imagen del producto">
        <h2>${productoSeleccionado.nombre}</h2>
        <h6>Marca: ${productoSeleccionado.marca}</h6>
        <h5>Precio: ${productoSeleccionado.precio}</h5>
        <div class="descripcion">
          <p>${productoSeleccionado.descripcion}</p>
        </div>
        <div class="notas">
          <dt>Notas de salida:</dt>
          <dd>${productoSeleccionado.salida}</dd>
          <dt>Notas de Corazón:</dt>
          <dd>${productoSeleccionado.corazon}</dd>
          <dt>Notas de Fondo:</dt>
          <dd>${productoSeleccionado.fondo}</dd>
        </div>
        <button class="atras">Volver atrás</button>
        <button class="comprar">Comprar</button>
        <button class="ver-mas">Agregar al carrito</button>
      `;

      detalleProducto.appendChild(contenedorDetallesProducto);

      
      const botonAtras = contenedorDetallesProducto.querySelector(".atras");
      botonAtras.addEventListener("click", () => {
       
        window.location.href = './index.html';
      });
    }
  }
});


