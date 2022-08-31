import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/actions";
import { imgNotFound } from "../../helpers/constants";
import { clearProductById } from "../../redux/actions";

function CardDetail() {
    let { productId } = useParams();
    const dispatch = useDispatch();

    const product = useSelector((state) => state.oneProduct.data);

    // console.log(product, 'la info del producto')

    useEffect(() => {
        if (product === undefined && productId) {
            // Si no tengo la info de un producto y tengo el id del produto
            // console.log('se dispacha la action');
            dispatch(getProductById(productId));
        }
        return () => {
            // console.log('se desmonta y sale la action');
            dispatch(clearProductById());
        };
    }, []);

    return (
        <div>
            <h4>Card Detail Component</h4>
            <p>Id: {product && product._id}</p>
            <p>Name: {product && product.name}</p>
            <p>Description: {product && product.description}</p>
            <p>Stock: {product && product.quantity}</p>
            <p>Price: {product && product.price.$numberDecimal}</p>
            <p>Url Img: {product && (
                <img id='img-create' src={imgNotFound}
                    srcSet={product.mainImg}
                    style={{ maxHeight: "150px", maxWidth: "150px" }}
                    alt="Image not found" />

            )}</p>

            <p>Images url: {product && JSON.stringify(product.images)}</p>
            <p>Categories: {product && JSON.stringify(product.categories)}</p>
        </div>

    );
}

export default CardDetail;