import { Link } from "react-router-dom";
import { deleteProduct } from "../helpers/product";

// Las props traen id, name, quantity, price y mainImg por ahora.

function CardToAdmin(props) {
    const onDelete = async (e, productId) => {
        // console.log('llama al back para borrar',productId)
        e.preventDefault();
        if(window.confirm('Are you sure to delete these product')) {
            // console.log('llama al back para borrar', productId)
            await deleteProduct(productId)
            .then(()=> window.alert('Product deleted'))
            .catch(()=> window.alert('Error, product not deleted'))
        }
    }



    const onEdit = async (e, dataProduct) => {
        console.log('abre un form de edición y le pasa esta info', dataProduct);
        // Acá habría que abrir un formulario de edición (puede ser un popUp)
        // Se edita la info y luego se envía el llamado al back (click botón enviar)
        // Se podría enviar la info al estado global y luego descargarla
        // al formulario de edición y precargar el estado local con la info
        // esto para no tener un componente hijo por cada card
        // Y con un estado local se puede setear la visibilidad del form por su id.

        // Luego si, en el botón de confirmar del form va está lógica
        // e.preventDefault();
        // if(window.confirm('Are you sure to edit these product')) {
        //     // console.log('llama al back para borrar', productId)
        //     await deleteProduct(productId)
        //     .then(()=> window.alert('Product deleted'))
        //     .catch(()=> window.alert('Error, product not deleted'))
        // }
    }
    



    return (
        <div>
            <h5>Card Component</h5>
            <Link to={`/detail/${props.id}`}>{props.name}</Link>
            <p>Product Id: {props.id}</p>
            <p>Name: {props.name}</p>     
            <p>Quantity: {props.quantity}</p>
            <p>Price: {props.price}</p>
            <p>Url Img: {props.mainImg}</p>
            <button onClick={(e)=>{ onEdit(e, props)}}>Edit</button>
            <button onClick={(e)=>{ onDelete(e, props.id)}}>Delete</button>
        </div>
    );
}




export default CardToAdmin;