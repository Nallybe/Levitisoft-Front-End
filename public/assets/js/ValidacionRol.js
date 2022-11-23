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
        alert('Campos obligatorios')
    }else{
        return new Promise( (resolve, reject) => {
            let encontrado = false
            roles.forEach(rol => {
                if(rol.nombre==nombre){
                    encontrado = true
                }
            })
           if (encontrado == true) {
            resolve( alert('Rol ya existente'),
            document.querySelector('#nombreRol').value="",
            document.querySelector('#estadoRol').value="" )//Si la búsqueda es exitosa
           }else{
            reject(
                alert('Rol registrado exitosamente'),
                document.querySelector('#nombreRol').value="",
                document.querySelector('#estadoRol').value=""
            ) //Si la búsqueda no fue exitosa
           }
        })
    }
}

const validar = document.querySelector('#boton')
validar.addEventListener('click',getRol)

