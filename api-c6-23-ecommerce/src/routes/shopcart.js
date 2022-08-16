const { Router } = require("express");
const router = Router();
// const { usersPost } = require('../controllers/users'); 



// Esto es "api/shopcart/allshopcart" get y sirve para pedir información de los 
// carritos de un usuario a la BD
router.get('/allshopcart', (req, res) => {
    res.send('Esto es api/shopcart/allshopcart')
})


// Esto es "api/shopcart/create" post y sirve para crear un carrito de compra en
// la BD
router.post('/create', (req, res) => {
    let {sataNewShopcart} = req.body;
    res.send('Esto es api/shopcart/create')
})

// Esto es "api/shopcart/edit" put y sirve para editar un carrito de compra en
// la BD
router.put('/edit', (req, res) => {
    let {idShopcart, dataUpdateShopcart} = req.body;
    res.send('Esto es api/shopcart/edit')
})



// Esto es "api/sales/delete" delete y sirve para eliminar un carrito de la DB
router.delete('/delete', (req, res) => {
    let {idShopcart} = req.body;
    res.send('Esto es api/shopcart/delete')
})



module.exports = router;