const Categories = require('../collections/Categories');
const ObjectId = require('mongoose').Types.ObjectId;
// ObjectId.isValid('microsoft123'); //true
// ObjectId.isValid('timtomtamted'); //true
// ObjectId.isValid('551137c2f9e1fac808a5f572'); //true
const isValidObjectId = (id) => {
    if (ObjectId.isValid(id)) {
        if ((String)(new ObjectId(id)) === id)
            return true;
        return false;
    }
    return false;
}

const getCategories = async () => {

    try {
        let allCategories = await Categories.find();

        return { get: true, data: allCategories };

    } catch (error) {
        console.log(error);

        return { get: false, data: "error en la búsqueda" };
    }


}

const createCategory = async (name, description) => {

    if (name && description) {
        const categoryCreate = new Categories({ name, description });

        try {

            await categoryCreate.save();

            return { create: true, data: categoryCreate };

        } catch (error) {
            console.log(error);

            return { create: false, data: "error en la creación" };
        }

    } else {
        return { create: false, data: "campos incompletos" };
    }

}




const editCategory = async (idCategory, name, description) => {

    if (idCategory && name && description) {
        if(!isValidObjectId(idCategory)) {
            return { update: false, data: "id invalido" }
        } 

        try {

            let categoryUpdate = await Categories.findOneAndUpdate(
                { _id: idCategory },
                { name, description },
                { returnOriginal: false }
            );

            return { update: true, data: categoryUpdate };

        } catch (error) {
            console.log(error);

            return { update: false, data: "error en la actualización" };
        }

    } else {
        return { update: false, data: "campos incompletos" };
    }

}


const deleteCategory = async (idCategory) => {

    if (idCategory) {
        
        if(!isValidObjectId(idCategory)) {
            return { delete: false, data: "id invalido" }
        }
        try {

            let categoryDelete = await Categories.deleteOne(
                { _id: idCategory }
            );

            return { delete: true, data: categoryDelete };

        } catch (error) {
            console.log(error);

            return { delete: false, data: "error en el borrado" };
        }

    } else {
        return { delete: false, data: "campos incompletos" };
    }

}

module.exports = { createCategory, editCategory, deleteCategory, getCategories };