const EditarRol = () => {
    let nombre = document.querySelector('#nombreRol').value
    let estado = document.querySelector('#estadoRol').value
    if(nombre=="" || nombre==null || estado=="" || estado==null){
        Swal.fire({
            icon: 'error',
            title: 'Todos los campos son obligatorios'
          })
          
    }else{
        Swal.fire({
            icon: 'success',
            title: 'El rol se editó correctamente'
          }).then(function() {
            window.location.href = "roles";
          })
    }
}
const validar = document.querySelector('#boton')
validar.addEventListener('click',EditarRol)