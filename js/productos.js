async function obtenerProductos(){
    try {
        const url = 'https://mocki.io/v1/2192b17c-e7dc-4c82-80df-795f5c7f64c6';
        const response = await fetch(url, {
            headers: {
                "Content-type":'application/json',
            },
        })
        let responseFormat = await response.json();
        let productos = responseFormat.productos;
        return productos
    } catch (error) {
        console.error("Error al obtener los productos: " + JSON.stringify(error));
        return []
    }
}

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

async function inicializarProductos(){
    const productos = await obtenerProductos();
    guardarProductosLS(productos);
    cargarProductos();
}