const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const mongoDB = require('mongodb')

const SalesSchema = Schema({
    name: { // Nombre del comprador
        type: String,            
        of: mongoose.SchemaTypes.ObjectId,
        ref: "Users",       
        required: true,
    },
    product: { // Descripción de lo que incluye
        type: String,            
        of: mongoose.SchemaTypes.ObjectId,
        ref: "Products",       
        required: true,
    },
    quantity: { // el type ayuda al pago
        type: Number,
        required: true,
        default: 0
    },
    price: { // el type ayuda al pago
        type: mongoDB.Decimal128,
        required: true,
        default: 0
    },
    total: {
        type: mongoDB.Decimal128,
        required: true,
        default: quantity * price
    },
    dateSale: { // Fecha de la venta
        type: Date,
        required: true,
        inmutable: true,
        default: () => Date.now()      
    }
});


module.exports = model('Sales', SalesSchema);