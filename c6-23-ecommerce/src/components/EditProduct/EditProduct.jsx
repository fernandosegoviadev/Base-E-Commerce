

function EditProduct(props) {
    console.log('las props en form edit product',props);
    return (
        <div>
           <h3>Form Edit Product</h3>
           
           <button>Confirm</button>
           <button>Cancel</button>
        </div>
    );
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
//         category: ["62f3e4e39654b45b0f46a48f"]                     // Array de ids de categorias (Colección Categories)
//     }
// }
export default EditProduct;