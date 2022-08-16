
function EditCategory(props) {
    console.log('las props en form edit category',props);

    return (
        <div>
           <h3>Form Edit Category</h3>

           <button>Confirm</button>
           <button>Cancel</button>
        </div>
    );
}

// Edit category - Estructura 
// let infoUpadateCategory = {
//     idCategory: "idCategoría",                     // * String, id de la categoría a editar
//     name: "categoría 1",                           // * String, nombre
//     description: "descripción de la categoría 1"   // * Strgin, descripción
// };
export default EditCategory;