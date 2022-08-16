const router = require('express').Router();
//const accounts = require('../routes/accounts');
const users = require('../routes/users');
const prouducts = require('../routes/products');
const sessions = require('../routes/sessions');
const sales = require('../routes/sales');
const shopping = require('../routes/shopping');
const shopcart = require('../routes/shopcart');
const categories = require('../routes/categories');

router.use('/users', users);
/* router.use('/accounts', accounts); */ // getión de cuentas de usuarios
// crear y eliminar cuentas de usuarios de la DB
// Colección "Users" de la DB

router.use('/categories', categories); // gestión de categorias
// crear, editar y eliminar una categoria en la DB
// Colección "Categories" de la DB

router.use('/products', prouducts); // gestión de productos
// crear, editar y eliminar productos de la DB
// Colección "Products" de la DB

router.use('/sessions', sessions); // gestión de sesiones
// loguear y desloguear usuarios
// Colección "Users" de la DB

router.use('/sales', sales); // gestión de ventas
// pedir el registro de ventas concretadas a la DB
// Colección "Sales" de la DB

router.use('/shopping', shopping); // gestión de compras realizadas
// crear, editar y eliminar compras en la DB (compras y ventas
// comparte en modelo "Sales" en la DB)
// Colección "Sales" de la DB

router.use('/shopcart', shopcart); // gestión de carrito
// crear, editar y eliminar un carrito en la DB
// Colección "Shopcarts" de la DB

module.exports = router;
