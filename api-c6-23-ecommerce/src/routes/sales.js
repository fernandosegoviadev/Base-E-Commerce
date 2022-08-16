const { Router } = require("express");
const router = Router();
// const { usersPost } = require('../controllers/users'); 



// Esto es "api/sales/allsales" get y sirve pedir todas las ventas a la BD
router.get('/allsales', (req, res) => {
    res.send('Esto es api/sales/allsales')
})


// Esto es "api/sales/delete" delete y sirve eliminar una venta de la DB
router.delete('/delete', (req, res) => {
    let {idSale} = req.body;
    res.send('Esto es api/sales/delete')
})



module.exports = router;