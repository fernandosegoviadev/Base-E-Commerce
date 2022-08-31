import { Link } from "react-router-dom";
import { imgNotFound } from "../../helpers/constants";
// import style from './styles/CardToUser.module.css';

function CardToUser(props) {
  
    return (
        <div >
            <h5>Card Component</h5>
            <Link to={`/detail/${props._id}`}>{props.name}</Link>
            {/* <p>Product Id: {props.id}</p>
            <p>Name: {props.name}</p>      */}
            <p>Stock: {props.quantity}</p>
            <p>Price: ${props.price}</p>            
            <img id='img-create' src={imgNotFound}
                srcSet={props.mainImg}
                style={{ maxHeight: "150px", maxWidth: "150px" }}
                alt="Image not found" />
        </div>
    );
}




export default CardToUser;