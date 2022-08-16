const { Schema, model } = require('mongoose');


const CategoriesSchema = Schema({
    name: { // Nombre de la categoria
        type: String,
        unique: true,
        required: true,
    },
    description: { // Descripción de lo que incluye
        type: String,
        required: true,
    }    

});


module.exports = model('Categories', CategoriesSchema);