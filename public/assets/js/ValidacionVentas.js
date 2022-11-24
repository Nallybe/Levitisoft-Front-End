const Ventas = () => {
    let NombreCliente = document.querySelector('#NombreCliente').value
    let TelefonoVentas = document.querySelector('#TelefonoVentas').value
    let TotalVentas = document.querySelector('#TotalVentas').value
    let FechaVentas = document.querySelector('#FechaVentas').value


    if(NombreCliente=="" || NombreCliente==null || TelefonoVentas=="" || TelefonoVentas==null||
    TotalVentas=="" || TotalVentas==null ||FechaVentas=="" || FechaVentas==null){
        Swal.fire({
            icon: 'error',
            title: 'Todos los campos son obligatorios'
          })
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Venta registrada correctamente'
          }).then(function() {
            window.location.href = "ventas";
          })
    }
    if (TelefonoVentas<10) {
        Swal.fire({
            icon: 'error',
            title: 'El telefono tiene que ser mayor a 10 digitos'
          })
    }
}

const validar = document.querySelector('#boton')
validar.addEventListener('click',Ventas)

