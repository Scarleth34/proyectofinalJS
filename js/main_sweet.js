function deseaeliminar(){
Swal.fire({
    title: 'Esta seguro de eliminar el carrito?',
    text: "Eliminara todos los productos seleccionados!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, elimina todos!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminado!',
        'Su carrito esta vacio!',
      )
    }
  })}

 Swal.fire({
    title: 'BIENVENIDO AL SITIO WEB DE "INDIAN HOME SWEET HOME"',
    text: 'Podras encontrar velas de cera de soja y aromatizadores',
    icon: 'info',
    confirmButtonText: 'Ingresar al sitio'
  })

document.getElementById("eliminar_carrito").addEventListener("click", deseaeliminar);


function productoagregado(){
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Producto agregado al carrito correctamente!',
  showConfirmButton: false,
  timer: 1500
})}
document.getElementById("agregar").addEventListener("click", productoagregado);

