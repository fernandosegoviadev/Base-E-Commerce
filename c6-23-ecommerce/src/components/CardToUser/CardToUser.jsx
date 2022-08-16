import { Link } from "react-router-dom";

function CardToUser(props) {
   
    return (
        <div>
            <h5>Card Component</h5>
            <Link to={`/detail/${props.id}`}>{props.name}</Link>
            {/* <p>Product Id: {props.id}</p>
            <p>Name: {props.name}</p>      */}
            <p>Quantity: {props.quantity}</p>
            <p>Price: {props.price}</p>
            <p>Url Img: {props.mainImg}</p>
        </div>
    );
}




export default CardToUser;