const { createProduct, editProduct, deleteProduct, getProducts, getProductById } = require('../controllers/products');
const { Router } = require("express");
const router = Router();


// Esto es "/api/prouducts/allproducts" get y sirve para pedir los productos de la base de datos
router.get('/allproducts', async (req, res) => {
    let allProducts = await getProducts();
    // console.log('Esto es /api/products/allproducts (get)')

    if (allProducts.get === true) return res.json(allProducts);
    if (allProducts.get === false) return res.json(allProducts);

});

// Esto es "/api/prouducts/productbyid" get y sirve para pedir la infomación de un solo
// producto a la base de datos
// Estructura JSON
// {
//     "idProduct": "62f400334b5d63ec101e1991"                          // * Un string, el id del producto a editar (Colección Products)
// }
router.get('/productbyid', async (req, res) => {
    let {idProduct} = req.query;
    // console.log(req.body, req.query, req.params)
    
    let productById = await getProductById(idProduct);

    if (productById.get === true) return res.json(productById);
    if (productById.get === false) return res.json(productById);
  
});


// Esto es "/api/prouducts/create" post y sirve para crear un producto en la base de datos
// Estructura JSON
// {
//     "dataNewProduct": {
//         "name":"* nombre del producto",                            // * Un string
//         "description":"* description del producto",                // * Un string
//         "createBy": "62f3e0438e0ce4592df8f832",                    // * Un string con el id del creador de la producto (adminId)
//         "mainImg": "url de imagen rincipal",                       // Un string con la url de la imágen principal
//         "images": ["url imagen 1","url imagen 2", "url imagen 3"], // Array de string de url de imágenes secundarias
//         "quantity": 0,                                             // Un número entero
//         "price": 0,                                                // Un número entero o decimal
//         "category": ["62f3e4e39654b45b0f46a48f"]                   // Array de ids de categorias, 
//     }
// }
router.post('/create', async (req, res) => {
    let {dataNewProduct} = req.body;
    // console.log(dataNewProduct);
    // console.log('Esto es /api/products/create (post)')

    let create = await createProduct(dataNewProduct);

    if (create.create === true) return res.json(create);
    if (create.create === false) return res.json(create);

});

// Esto es "/api/prouducts/edit" post y sirve para editar un producto en la base de datos
// Estructura JSON
// {
//     "idProduct": "62f400334b5d63ec101e1991",                         // * Un string, el id del producto a editar (Colección Products)
//     "dataUpdateProduct": {
//         "name":"* nombre del producto editado",                      // * Un string
//         "description":"* description del producto editado",          // * Un string
//         "createBy": "62f3e0438e0ce4592df8f832",                      // * Un string con el id del creador de la producto (Colección Users con rol admin)
//         "mainImg": "url de imagen rincipal",                         // Un string con la url de la imágen principal
//         "images": ["url imagen 1","url imagen 2", "url imagen 4"],   // Array de string de url de imágenes secundarias
//         "quantity": 0,                                               // Un número entero
//         "price": 0,                                                  // Un número entero o decimal       
//         "category": ["62f3e4e39654b45b0f46a48f"]                     // Array de ids de categorias (Colección Categories)
//     }
// }
router.put('/edit', async (req, res) => {
    let {idProduct, dataUpdateProduct} = req.body;
    // console.log('Esto es /api/products/edit (put)')

    let update = await editProduct(idProduct, dataUpdateProduct);

    if (update.update === true) return res.json(update);
    if (update.update === false) return res.json(update);

});


// Esto es "/api/prouducts/delete" post y sirve para crear un producto en la base de datos
// Esto es "/api/prouducts/edit" post y sirve para editar un producto en la base de datos
// Estructura JSON
// {
//     "idProduct": "62f400334b5d63ec101e1991"                          // * Un string, el id del producto a editar (Colección Products)
// }
router.delete('/delete', async (req, res) => {
    let {idProduct} = req.body;
    // console.log('Esto es /api/products/delete (delete)')

    let productDelete = await deleteProduct(idProduct);

    if (productDelete.delete === true) return res.json(productDelete);
    if (productDelete.delete === false) return res.json(productDelete);

});

module.exports = router;