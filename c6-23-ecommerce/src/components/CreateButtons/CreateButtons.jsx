
import CreateProduct from "../CreateProduct/CreateProduct";
import ListCategories from "../ListCategories/ListCategories";


function CreateButtons() {

    const openListCategories = () => {
        // console.log('abrir lista de categorias');
        document.getElementById("myListCategories").style.display = "block";
    }


    const openFormProduct = () => {
        // console.log('abrir product');
        document.getElementById("myFormAddProduct").style.display = "block";
    }


    return (
        <div>
            <h5>Create buttons to admin</h5>
            <button onClick={openListCategories}>See Categories</button>
            <button onClick={openFormProduct}>Create Product</button>

            <CreateProduct />
            <ListCategories />

        </div>
    );
}
// Create new catetory - Estructura 
// let infoNewCategory = {
//     name: "category 1",
//     description: "description category"
// };
export default CreateButtons;