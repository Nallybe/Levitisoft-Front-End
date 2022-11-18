const express = require('express')
const hbs = require('hbs')
const app = express()
require('dotenv').config();
const port = process.env.PORT


//Especificar el directorio público
app.use(express.static('public'))

// Motor de plantilla
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views/')

app.get('/', (req, res)=>{
    res.render('home', {
        nombre:'Home'
    })
})

app.get('/home', (req, res)=>{
    res.render('home', {
        nombre:'Home'
    })
})

app.get('/productos', (req, res)=>{
   
    res.render('productos', {
        nombre:'Productos'
    })
})

app.get('/recomendaciones', (req, res)=>{
   
    res.render('recomendaciones', {
        nombre:'Recomendaciones'
    })
})

app.get('/sobre_nosotros', (req, res)=>{
   
    res.render('sobre_nosotros', {
        nombre:'sobre_nosotros'
    })
})

app.get('/login', (req, res)=>{
    res.render('login', {
        nombre:'Login'
    })
})

app.get('/dashboard', (req, res)=>{
    res.render('dashboard', {
        nombre:'Dashboard'
    })
})

app.get('/permisos', (req, res)=>{
    res.render('permisos', {
        nombre:'Permisos'
    })
})

app.get('/asignacion', (req, res)=>{
    res.render('asignacion', {
        nombre:'Asignacion'
    })
})

app.get('/clientes', (req, res)=>{
    res.render('clientes', {
        nombre:'Clientes'
    })
})

app.get('/roles', (req, res)=>{
    res.render('roles', {
        nombre:'Roles'
    })
})

app.get('/AgregarRol', (req, res)=>{
    res.render('AgregarRol', {
        nombre:'Agregar Rol'
    })
})

app.get('/EditarRol', (req, res)=>{
    res.render('EditarRol', {
        nombre:'Editar Rol'
    })
})

app.get('/insumos', (req, res)=>{
    res.render('insumos', {
        nombre:'Insumos'
    })
})

app.get('/AgregarInsumo', (req,res) =>{
    res.render('AgregarInsumo', {
        nombre: 'Agregar Insumo'
    })
})

app.get('/EditarInsumo', (req,res) =>{
    res.render('EditarInsumo', {
        nombre: 'Editar Insumo'
    })
})

app.get('/ventas', (req,res) =>{
    res.render('ventas', {
        nombre: 'Ventas'
    })
})

app.get('/Agregarventa', (req,res) =>{
    res.render('Agregarventa', {
        nombre: 'Agregar venta'
    })
})

app.get('/compras', (req,res) =>{
    res.render('compras', {
        nombre: 'Compras'
    })
})

app.get('/AgregarCompra', (req,res) =>{
    res.render('AgregarCompra', {
        nombre: 'Agregar Compra'
    })
})

//verificar si el puerto esta escuchando
app.listen(port, ()=>{
    console.log(`Escuchando por el puerto ${port}`)
})