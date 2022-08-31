import axios from "axios";


// Create new product - Estructura
// let infoNewProduct = {
//     dataNewProduct: {
//         name: "* nombre del producto",                            // * Un string
//         description: "* description del producto",                // * Un string
//         createBy: "62f3e0438e0ce4592df8f832",                    // * Un string con el id del creador de la producto (adminId)
//         mainImg: "url de imagen rincipal",                       // Un string con la url de la imágen principal
//         images: ["url imagen 1", "url imagen 2", "url imagen 3"], // Array de string de url de imágenes secundarias
//         quantity: 0,                                             // Un número entero
//         price: 0,                                                // Un número entero o decimal
//         categories: ["62f3e4e39654b45b0f46a48f"]                   // Array de ids de categorias, 
//     }
// }

export const createNewProduct = async (infoNewProduct) => {
    console.log('create product request', infoNewProduct);

    let { dataNewProduct } = infoNewProduct;
    if (!dataNewProduct) return 'insufficient data';

    try {
        let newProduct = await axios({
            method: 'POST',
            url: '/api/products/create',
            data: infoNewProduct,
        })
            .then((response) => {
                return response.data;
            })
            .catch((err) => console.log(err))

        console.log(newProduct, 'response new product');

        return newProduct;

    } catch (error) {
        console.log(error, 'error al llamar a la api');
    }
}


// Edit product
// let infoUpadateCategory = {
//     idProduct: "62f400334b5d63ec101e1991",                         // * Un string, el id del producto a editar (Colección Products)
//     dataUpdateProduct: {
//         name: "* nombre del producto editado",                      // * Un string
//         description: "* description del producto editado",          // * Un string
//         createBy: "62f3e0438e0ce4592df8f832",                      // * Un string con el id del creador de la producto (Colección Users con rol admin)
//         mainImg: "url de imagen rincipal",                         // Un string con la url de la imágen principal
//         images: ["url imagen 1", "url imagen 2", "url imagen 4"],   // Array de string de url de imágenes secundarias
//         quantity: 0,                                               // Un número entero
//         price: 0,                                                  // Un número entero o decimal       
//         categories: ["62f3e4e39654b45b0f46a48f"]                     // Array de ids de categorias (Colección Categories)
//     }
// }
export const editProduct = async (infoUpadateCategory) => {
    // console.log('edit product request', infoUpadateCategory);

    let { idProduct, dataUpdateProduct } = infoUpadateCategory;
    if (!idProduct || !dataUpdateProduct) return 'insufficient data';

    try {
        let updatedProduct = await axios({
            method: 'PUT',
            url: '/api/products/edit',            
            data: infoUpadateCategory,
        })
            .then((response) => {
                return response.data;
            })
            .catch((err) => console.log(err))

        // console.log(updatedProduct, 'response edit product');

        return updatedProduct;

    } catch (error) {
        console.log(error, 'error al llamar a la api');
    }
}

// Delete product
// let infoProduct = {
//     idProduct: "62f400334b5d63ec101e1991"                          // * Un string, el id del producto a editar (Colección Products)
// }
export const deleteProduct = async (infoProduct) => {
    console.log('delete product request', infoProduct);

    let { idProduct } = infoProduct;
    if (!idProduct) return 'insufficient data';

    try {
        let deletedProduct = await axios({
            method: 'DELETE',
            url: '/api/prouducts/delete',
            data: infoProduct,
        })
            .then((response) => {
                return response.data;
            })
            .catch((err) => console.log(err))

        console.log(deletedProduct, 'response delete category');

        return deletedProduct;

    } catch (error) {
        console.log(error, 'error al llamar a la api');
    }
}