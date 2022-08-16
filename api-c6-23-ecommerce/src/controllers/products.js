const Products = require('../collections/Products');
const ObjectId = require('mongoose').Types.ObjectId;

const isValidObjectId = (id) => {
    if (ObjectId.isValid(id)) {
        if ((String)(new ObjectId(id)) === id)
            return true;
        return false;
    }
    return false;
}

const getProducts = async () => {

    try {
        let allProducts = await Products.find();

        return { get: true, data: allProducts };

    } catch (error) {
        console.log(error);

        return { get: false, data: "error en la búsqueda" };
    }

}


const getProductById = async (idProduct) => {

    if(idProduct) {
        if(!isValidObjectId(idProduct)) {
            return { get: false, data: "id invalido" }
        } 

        try {
            let productById = await Products.findOne({ _id: idProduct });
    
            return { get: true, data: productById };
    
        } catch (error) {
            console.log(error);
    
            return { get: false, data: "error en la búsqueda" };
        }

    } else {
        return { get: false, data: "id no proporcionado" };
    }



}

const createProduct = async (dataNewProduct) => {
    let { name, description } = dataNewProduct;
    // let { mainImg, images, quantity, price, category } = dataNewProduct;

    if (name && description) {

        const productCreate = new Products(dataNewProduct);

        try {

            await productCreate.save();

            return { create: true, data: productCreate };

        } catch (error) {
            console.log(error);

            return { create: false, data: "error en la creación" };
        }

    } else {
        return { create: false, data: "campos mínimos incompletos" };
    }

}




const editProduct = async (idProduct, dataUpdateProduct) => {
    let { name, description } = dataUpdateProduct;
    // let { mainImg, images, quantity, price, category } = dataUpdateProduct;

    if (idProduct && name && description) {
        if(!isValidObjectId(idProduct)) {
            return { update: false, data: "id del producto invalido" }
        }       
        
        try {

            let productUpdate = await Products.findOneAndUpdate(
                { _id: idProduct },
                dataUpdateProduct,
                { returnOriginal: false }
            );

            return { update: true, data: productUpdate };

        } catch (error) {
            console.log(error);

            return { update: false, data: "error en la actualización" };
        }

    } else {
        return { update: false, data: "campos mínimos incompletos" };
    }

}


const deleteProduct = async (idProduct) => {

    if (idProduct) {
        if(!isValidObjectId(idProduct)) {
            return { delete: false, data: "id invalido" }
        }
        try {

            let productDelete = await Products.deleteOne(
                { _id: idProduct }
            );

            return { delete: true, data: productDelete };

        } catch (error) {
            console.log(error);

            return { delete: false, data: "error en el borrado" };
        }

    } else {
        return { delete: false, data: "campos incompletos" };
    }

}

module.exports = { createProduct, editProduct, deleteProduct, getProducts, getProductById };