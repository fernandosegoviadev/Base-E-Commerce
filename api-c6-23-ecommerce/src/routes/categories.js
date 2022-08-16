const { createCategory, editCategory, deleteCategory, getCategories } = require('../controllers/categories');
const { Router } = require('express');
const router = Router();


// Esto es "/api/categories/allcategories" get y sirve para pedir todas 
// las categorias a la base de datos

router.get('/allcategories', async (req, res) => {
    let allCategories = await getCategories();

    if (allCategories.get === true) return res.json(allCategories);
    if (allCategories.get === false) return res.json(allCategories);

});


// Esto es "/api/categories/create" post y sirve para crear una categoría
// en la base de datos
// Estructura JSON
//     {
//         "name": "categoría 1",                           // * String, nombre
//         "description": "descripción de la categoría 1"   // * Strgin, descripción
//     }

router.post('/create', async (req, res) => {
    let { name, description } = req.body;

    let create = await createCategory(name, description);

    if (create.create === true) return res.json(create);
    if (create.create === false) return res.json(create);
});

// Esto es "/api/categories/edite" post y sirve para editar una categoria 
// en la base de datos
// Estructura JSON
//     {
//         "idCategory": "idCategoría",                     // * String, id de la categoría a editar
//         "name": "categoría 1",                           // * String, nombre
//         "description": "descripción de la categoría 1"   // * Strgin, descripción
//     }

router.put('/edit', async (req, res) => {
    let { idCategory, name, description } = req.body;

    let update = await editCategory(idCategory, name, description);

    if (update.update === true) return res.json(update);
    if (update.update === false) return res.json(update);
});

// Esto es "/api/categories/delete" post y sirve para borrar una categoría
// de la base de datos
// Estructura JSON
//     {
//         "idCategory": "idCategoría",                      // * String, id de la categoría a eliminar
//     }

router.delete('/delete', async (req, res) => {
    let { idCategory } = req.body;

    let deleted = await deleteCategory(idCategory);

    if (deleted.delete === true) return res.json(deleted);
    if (deleted.delete === false) return res.json(deleted);
});


module.exports = router;