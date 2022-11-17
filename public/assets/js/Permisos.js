const permisos = [
    {
        id: 1,
        nombrePermiso: 'Roles',
        estadoPermiso: 'Activo'
    },
    {
        id: 2,
        nombrePermiso: ' Usuarios',
        estadoPermiso: 'Inactivo'
    },
    {
        id: 3,
        nombrePermiso: 'Clientes ',
        estadoPermiso: 'Activo'
    }
]

const getPermisos = () => {
    let nombreP = document.querySelector('#PP').value
    let estado = document.querySelector('#EE').value
    return new Promise((resolve, reject) => {
        let encontrado = false
        permisos.forEach(permisos => {
            if (permisos.nombrePermiso == nombreP && permisos.estadoPermiso == estado) {
                encontrado = true
            }
        })
        if (encontrado == true) {
            resolve(alert('Permiso existente'))//Si la búsqueda es exitosa
            window.location.href = "/dashboard"

        } else {
            reject(alert('Permiso no existe')) //Si la búsqueda no fue exitosa
            window.location.href = "/permisos"
        }

    })
}




const validar = document.querySelector('#boton')
validar.addEventListener('click', getPermisos)