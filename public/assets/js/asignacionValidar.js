const getAsignacion = () => {
    let IdAsignacion = document.querySelector('#idAsignacion').value
    let IdRol = document.querySelector('#idRol').value
    let IdPermiso = document.querySelector('#idPermiso').value
    let Estado = document.querySelector('#estado').value
    
    return new Promise( (resolve, reject) => {
        
       if (IdAsignacion == "" || IdRol == "" || IdPermiso == "" || Estado == "") {
        reject(alert('Todos los campos son obligatorios')) //Si la búsqueda no fue exitosa
       }
       if (Estado == 'Activo' || Estado == 'Inactivo') {
        resolve( alert('Registrado con exito'))//Si la búsqueda es exitosa
        window.location.href = "/dashboard"
       }else{
        reject(alert('Error: Estado = Activo o Inactivo')) //Si la búsqueda no fue exitosa
        window.location.href = "/asignacion"
       }
       
    })
}
const validar = document.querySelector('#boton')
validar.addEventListener('click',getAsignacion)
