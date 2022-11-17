const roles = [
    {
        idRol:1,
        nombre:"Administrador",
        estado:"Activo"
    },
    {
        idRol:2,
        nombre:"Gerente",
        estado:"Activo"
    },
    {
        idRol:3,
        nombre:"Contador",
        estado:"Activo"
    },
    {
        idRol:4,
        nombre:"Cliente",
        estado:"Activo"
    }
]

const getRol = () => {
    let id = document.querySelector('#idRol').value
    let nombre = document.querySelector('#nombreRol').value
    let estado = document.querySelector('#estadoRol').value
    if(id=="" || id==null || nombre=="" || nombre==null || estado=="" || estado==null){
        alert('Campos obligatorios')
    }else{
        return new Promise( (resolve, reject) => {
            let encontrado = false
            roles.forEach(rol => {
                if(rol.idRol==id || rol.nombre==nombre){
                    encontrado = true
                }
            })
           if (encontrado == true) {
            resolve( alert('Rol ya existente'),
            document.querySelector('#idRol').value="",
            document.querySelector('#nombreRol').value="",
            document.querySelector('#estadoRol').value="" )//Si la búsqueda es exitosa
           }else{
            reject(
                alert('Rol registrado exitosamente'),
                document.querySelector('#idRol').value="",
                document.querySelector('#nombreRol').value="",
                document.querySelector('#estadoRol').value=""
            ) //Si la búsqueda no fue exitosa
           }
        })
    }
}

const validar = document.querySelector('#boton')
validar.addEventListener('click',getRol)

