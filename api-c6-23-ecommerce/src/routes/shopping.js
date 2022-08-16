const { Router } = require("express");
const router = Router();
// const { usersPost } = require('../controllers/users'); 



// Esto es "api/sales/allshopping" get y sirve pedir todas las compras de
// un usuario a la BD
router.get('/allshopping', (req, res) => {
    res.send('Esto es api/shopping/allshopping')
})


// Esto es "api/sales/create" post y sirve crear un registro de compra en
// la BD
router.post('/create', (req, res) => {
    let {dataNewSale} = req.body;
    res.send('Esto es api/shopping/create')
})

// Esto es "api/sales/delete" delete y sirve eliminar una compra de la DB
router.delete('/delete', (req, res) => {
    let {idSale} = req.body;
    res.send('Esto es api/shopping/delete')
})



module.exports = router;