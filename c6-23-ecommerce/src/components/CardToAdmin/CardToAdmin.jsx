import { Link } from "react-router-dom";
import { imgNotFound } from "../../helpers/constants";

// Las props traen id, name, quantity, price y mainImg por ahora.

function CardToAdmin(props) {
    

    return (
        <div>
            <h5>Card Component</h5>
            <Link to={`/detail/${props._id}`}>{props.name}</Link>
            <p></p>
            <img id='img-create' src={imgNotFound}
                srcSet={props.mainImg}
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                alt="Image not found" />
            <p>Name: {props.name}</p>     
            <p>Stock: {props.quantity}</p>
            <p>Price: ${props.price}</p>
            {/* <p>Categories: {props && JSON.stringify(props.categories)}</p> */}
            {/* <p>Product Id: {props._id}</p> */}
            <button onClick={()=>{ props.onEdit(props._id)}}>Edit</button>
            <button onClick={()=>{ props.onDelete(props._id)}}>Delete</button>
        </div>
    );
}




export default CardToAdmin;