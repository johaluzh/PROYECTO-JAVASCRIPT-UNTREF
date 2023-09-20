fetch ("./productos.json")
.then((respuesta) => respuesta.json())
.then((datos) => localStorage.setItem("productos", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
  const divProductos = document.getElementById("productos-container");
  const datosProductos = JSON.parse(localStorage.getItem("productos"));
  console.log(datosProductos);
  if (datosProductos) {
    datosProductos.productos.forEach((productos) => {
      //   1.- Creamos un elemento <div> para cada provincia
      const divItem = document.createElement("div");
      //   2.- Agregamos la clase "grid-item" al div que contiene el nombre de la provincia y su imagen
      divItem.classList.add("div-item");
      //    3.- Agregamos una etiqueta h4 con el texto del título a nuestro nuevo elemento <div>.
      divItem.innerHTML =  `
      <img src="${productos.imagen}" alt="${productos.nombre}">
      <h3>${productos.nombre}</h3>
      <h5>Precio: ${productos.precio}</h5>
      <p>Descripcion: ${productos.descripcion}</p>`;

      divItem.addEventListener("click", () => {
        mostrarDetallesProducto(productos);
      });

      divProductos.appendChild(divItem);
    });
  }
});

function mostrarDetallesProducto(producto) {
  //Redireccionar a otra página para mostrar los detalles
  location.href = `index2.html?id=${producto.id}`;
}











