const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const mongoDB = require('mongodb')
const urlDefault = "https://dalealaweb.com/wp-content/uploads/2016/08/necesidad-usp-marketing-digital.jpg"

const ProductsSchema = Schema({
    name: { // Nombre del producto
        type: String,
        required: true
    },
    description: { // Descripción del producto
        type: String,
        required: true
    },
    mainImg: { // Un string, una url
        type: String,
        required: true,
        default: urlDefault
    },
    images: { // Arreglo de strings, de urls
        type: Array,
        of: String,
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
    categories: { // Un producto puede pertenecer a más de una categoría
        type: Array,
        of: mongoose.SchemaTypes.ObjectId,
        ref: "Categories",
        required: false,
    }

});


module.exports = model('Products', ProductsSchema);