

function CreateProduct() {
    console.log('form create product');
    return (
        <div>
           <h3>Form Create Product</h3>

           <button>Create</button>
           <button>Cancel</button>
        </div>
    );
}
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
//         category: ["62f3e4e39654b45b0f46a48f"]                   // Array de ids de categorias, 
//     }
// }
export default CreateProduct;