fetch ("./productos.json")
.then((respuesta) => respuesta.json())
.then((datos) => localStorage.setItem("productos", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
  const divProductos = document.getElementById("productos-container");
  const datosProductos = JSON.parse(localStorage.getItem("productos"));
  console.log(datosProductos);
  if (datosProductos) {
    datosProductos.productos.forEach((productos) => {
     
      const divItem = document.createElement("div");
      
      divItem.classList.add("div-item");
      
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
  
  location.href = `index2.html?id=${producto.id}`;
}











