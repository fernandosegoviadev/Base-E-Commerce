import axios from "axios";


// Create new catetory - Estructura 
// let infoNewCategory = {
//     name: "category 1",
//     description: "description category"
// };
export const createNewCategory = async (infoNewCategory) => {
    console.log('create category request', infoNewCategory);

    let { name, description } = infoNewCategory;
    if (!name || !description) return 'insufficient data';

    try {
        let newCategory = await axios({
            method: 'POST',
            url: '/api/categories/create',
            data: infoNewCategory,
        })
            .then((response) => {
                return response.data;
            })
            .catch((err) => console.log(err))

        console.log(newCategory, 'response new category');

        return newCategory;

    } catch (error) {
        console.log(error, 'error al llamar a la api');
    }
}


// Edit category - Estructura 
// let infoUpadateCategory = {
//     idCategory: "idCategoría",                     // * String, id de la categoría a editar
//     name: "categoría 1",                           // * String, nombre
//     description: "descripción de la categoría 1"   // * Strgin, descripción
// };
export const editCategory = async (infoUpadateCategory) => {
    console.log('edit category request', infoUpadateCategory);

    let { idCategory, name, description } = infoUpadateCategory;
    if (!idCategory || !name || !description) return 'insufficient data';

    try {
        let updatedCategory = await axios({
            method: 'PUT',
            url: '/api/categories/edit',
            data: infoUpadateCategory,
        })
            .then((response) => {
                return response.data;
            })
            .catch((err) => console.log(err))

        console.log(updatedCategory, 'response edit category');

        return updatedCategory;

    } catch (error) {
        console.log(error, 'error al llamar a la api');
    }
}

// Delete category - Estructura
// let infoCategory = {
//     idCategory: "idCategoría",                      // * String, id de la categoría a eliminar
// }

export const deleteCategory = async (infoCategory) => {
    console.log('delete category request', infoCategory);

    let { idCategory } = infoCategory;
    if (!idCategory) return 'insufficient data';

    try {
        let deletedCategory = await axios({
            method: 'DELETE',
            url: '/api/categories/delete',
            data: infoCategory,
        })
            .then((response) => {
                return response.data;
            })
            .catch((err) => console.log(err))

        console.log(deletedCategory, 'response delete category');

        return deletedCategory;

    } catch (error) {
        console.log(error, 'error al llamar a la api');
    }
}