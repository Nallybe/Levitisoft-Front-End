const clientes = [
    {
        idcliente:1,
        nombre:"jesid",
        telefono:"3104284824",
        contraseña:"pnug16r3r3",
        direccion:"CR16 #56 A63",
        numero_ventas:"15",
        numero_reparacion:"4",
        estado:"Activo"
    },
    {
        idcliente:2,
        nombre:"salgado",
        telefono:"3104284712",
        direccion:"CR16 #56-45",
        numero_ventas:"56",
        numero_reparacion:"2",
        estado:"Activo"
    },
    {
        idcliente:3,
        nombre:"jose",
        telefono:"3104284723",
        direccion:"CR16 #37 A63",
        numero_ventas:"10",
        numero_reparacion:"6",
        estado:"Activo"
    },
    {
        idcliente:4,
        nombre:"estrada",
        telefono:"3104284745",
        direccion:"CR20 #24 A65",
        numero_ventas:"24",
        numero_reparacion:"16",
        estado:"Activo"
    }
]

const getCliente = () => {
    let nombre = document.querySelector('#idNombre').value
    let telefono = document.querySelector('#idTelefono').value
    let contraseña = document.querySelector('#idContraseña').value
    let direccion = document.querySelector('#idDireccion').value
    let numero_ventas = document.querySelector('#idNumeroventas').value
    let numero_reparacion = document.querySelector('#idReparaciones').value
    let estado = document.querySelector('#idEstado').value
    if(nombre=="" || nombre==null || telefono=="" || telefono==null || contraseña=="" || contraseña==null || direccion=="" || direccion==null || numero_ventas=="" || numero_ventas==null || numero_reparacion=="" || numero_reparacion==null|| estado=="" || estado==null){
        alert('Campos obligatorios')
    }else{
        return new Promise( (resolve, reject) => {
            let encontrado = false
            clientes.forEach(clinete => {
                if(clinete.nombre==nombre && clinete.contraseña==contraseña){
                    encontrado = true
                }
            })
           if (encontrado == true) {
            resolve( alert('cliente ya existente'),
                document.querySelector('#idNombre').value="",   
                document.querySelector('#idTelefono').value="",
                document.querySelector('#idContraseña').value="",
                document.querySelector('#idDireccion').value="",
                document.querySelector('#idNumeroventas').value="",
                document.querySelector('#idReparaciones').value="",
                document.querySelector('#idEstado').value )//Si la búsqueda es exitosa
           }else{
            reject(
                alert('cliente registrado exitosamente'),
                document.querySelector('#idNombre').value="",   
                document.querySelector('#idTelefono').value="",
                document.querySelector('#idContraseña').value="",
                document.querySelector('#idDireccion').value="",
                document.querySelector('#idNumeroventas').value="",
                document.querySelector('#idReparaciones').value="",
                document.querySelector('#idEstado').value 
            ) //Si la búsqueda no fue exitosa
           }
        })
    }
}

const validar = document.querySelector('#boton')
validar.addEventListener('click',getCliente)

