const roles = [
    {
        nombre:"Administrador",
        estado:"Activo"
    },
    {
        nombre:"Gerente",
        estado:"Activo"
    },
    {
        nombre:"Contador",
        estado:"Activo"
    },
    {
        nombre:"Cliente",
        estado:"Activo"
    }
]

const getRol = () => {
    let nombre = document.querySelector('#nombreRol').value
    let estado = document.querySelector('#estadoRol').value
    if(nombre=="" || nombre==null || estado=="" || estado==null){
        Swal.fire({
            icon: 'error',
            title: 'Todos los campos son obligatorios'
          })
    }else{
        return new Promise( (resolve, reject) => {
            let encontrado = false
            roles.forEach(rol => {
                if(rol.nombre==nombre){
                    encontrado = true
                }
            })
           if (encontrado == true) {
            resolve( Swal.fire({
                icon: 'error',
                title: 'Rol ya existente'
              }),
            document.querySelector('#nombreRol').value="",
            document.querySelector('#estadoRol').value="" )//Si la búsqueda es exitosa
           }else{
            reject(
                Swal.fire({
                     icon: 'success',
                     title: 'Rol registrado correctamente'
                }).then(function() {
                    window.location.href = "roles";
                  }),
                document.querySelector('#nombreRol').value="",
                document.querySelector('#estadoRol').value=""
            ) //Si la búsqueda no fue exitosa
           }
        })
    }
}

const validar = document.querySelector('#boton')
validar.addEventListener('click',getRol)

