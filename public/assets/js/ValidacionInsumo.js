const getInsumo = () => {
    let NombreInsumo = document.querySelector('#NombreInsumo').value
    let StockInsumo = document.querySelector('#StockInsumo').value
    let MedidaInsumo = document.querySelector('#MedidaInsumo').value
    let EstadoInsumo = document.querySelector('#EstadoInsumo').value

    if(NombreInsumo=="" || NombreInsumo==null || StockInsumo=="" || StockInsumo==null ||
    MedidaInsumo=="" ||MedidaInsumo==null || EstadoInsumo==""|| EstadoInsumo==null){
        Swal.fire({
            icon: 'error',
            title: 'Todos los campos son obligatorios'
          })
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Insumo registrado'
          }).then(function() {
            window.location.href = "insumos";
          })
    }if (StockInsumo<=0) {
        Swal.fire({
            icon: 'error',
            title: 'El stock debe ser mayor a 0'
          })
    }
    
}

const validar = document.querySelector('#boton')
validar.addEventListener('click',getInsumo)