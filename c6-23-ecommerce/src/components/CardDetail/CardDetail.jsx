import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/actions";


function CardDetail() {
    let { productId } = useParams();
    const dispatch = useDispatch();

    const product = useSelector((state) => state.oneProduct.data);

    console.log(product, 'la info del producto')

    useEffect(() => {
        if (product === undefined  && productId) {
            // Si no tengo la info de un producto y tengo el id del produto
            console.log('se dispacha la action');
            dispatch(getProductById(productId));
        }
    },[])

    return (
        <div>
            <h4>Card Detail Component</h4>
            <p>Id: {product && product._id}</p>
            <p>Name: {product && product.name}</p>
            <p>Description: {product && product.description}</p>
            <p>Quantity: {product && product.quantity}</p>
            <p>Price: {product && product.price.$numberDecimal}</p>
            <p>Url Img: {product && product.mainImg}</p>
            <p>Images url: {product && JSON.stringify(product.images)}</p>
            <p>Categories: {product && JSON.stringify(product.category)}</p>
        </div>

    );
}

export default CardDetail;