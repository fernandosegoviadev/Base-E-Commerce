const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const mongoDB = require('mongodb')

const ShopcartsSchema = Schema({
    name: { // Nombre del dueño del carrito
        type: String,            
        of: mongoose.SchemaTypes.ObjectId,
        ref: "Users",       
        required: true,
    },
    product: { // Descripción de los produtos que incluye
        type: Array,            
        of: mongoose.SchemaTypes.ObjectId,
        ref: "Products",       
        required: true,
    },
    quantity: { // el type ayuda al pago
        type: Array,
        of: Number,
        required: true,
        default: 0
    },
    price: { // el type ayuda al pago
        type: Array,
        of: mongoDB.Decimal128,
        required: true,
        default: 0
    },
    total: {
        type: Array,
        of: mongoDB.Decimal128,      
        default: quantity * price
    },
    pending: { // Fecha de la venta
        type: Array,
        of: Boolean,
        required: true,
        default: true,           
    },
    finished: { // Fecha de la venta
        type: Array,
        of: Boolean,
        required: true,
        default: false,           
    },
});


module.exports = model('Shopcarts', ShopcartsSchema);