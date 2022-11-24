const EditarInsumo = () => {
    let NombreInsumo = document.querySelector('#NombreInsumo').value
    let StockInsumo = document.querySelector('#StockInsumo').value
    let MedidaInsumo = document.querySelector('#MedidaInsumo').value
    let EstadoInsumo = document.querySelector('#EstadoInsumo').value
    if(NombreInsumo=="" || NombreInsumo==null || StockInsumo=="" || StockInsumo==null ||
    MedidaInsumo=="" || MedidaInsumo==null || EstadoInsumo=="" || EstadoInsumo==null){
        Swal.fire({
            icon: 'error',
            title: 'Todos los campos son obligatorios'
          })
          
    }else{
        Swal.fire({
            icon: 'success',
            title: 'El insumo se editó correctamente'
          }).then(function() {
            window.location.href = "insumos";
          })
    }
}
const validar = document.querySelector('#boton')
validar.addEventListener('click',EditarInsumo)