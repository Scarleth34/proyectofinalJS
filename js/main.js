function cargarProductos() {
    let productos = cargarProductosLS();
    let contenido = "";

    for (const producto of productos) {
        contenido += `<div class="col-md-3">
        <div class="card">
        <img src="media/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="lead">${producto.medida} cm</p>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text">$${producto.precio}</p>
        <a href="#" id="agregar" class="btn btn-primary" onclick="agregarAlCarrito(${producto.id});">Agregar (+)</a>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

inicializarProductos();
actualizarBotonCarrito();