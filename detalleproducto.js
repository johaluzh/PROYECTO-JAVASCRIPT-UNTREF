document.addEventListener("DOMContentLoaded", () => {
  const detalleProducto = document.getElementById("detalle-producto");

  const urlParams = new URLSearchParams(window.location.search);
  const idProducto = urlParams.get("id");

  const datosProductos = JSON.parse(localStorage.getItem("productos"));

  if (datosProductos && datosProductos.productos) { // Cambié "producto" a "productos"
    const productoSeleccionado = datosProductos.productos.find(producto => producto.id === parseInt(idProducto)); // Convertí idProducto a entero

    if (productoSeleccionado) {
      const contenedorDetallesProducto = document.createElement("div");
      contenedorDetallesProducto.classList.add("detalles-de-producto");
      contenedorDetallesProducto.innerHTML = `
        <img src="${productoSeleccionado.imagen}" alt="Imagen del producto">
        <h2>${productoSeleccionado.nombre}</h2>
        <h6>Marca: ${productoSeleccionado.marca}</h6>
        <h5>Precio: ${productoSeleccionado.precio}</h5>
        <p>Descripcion: ${productoSeleccionado.descripcion}</p>
        <p>ID: ${productoSeleccionado.id}</p>
        
      `;

      detalleProducto.appendChild(contenedorDetallesProducto);
    }
  }
});
