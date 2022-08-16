import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getAllProducts } from '../redux/actions';

import CardToUser from "./CardToUser";
import CardToAdmin from "./CardToAdmin";

function Cards({ userType }) {
    const [type, setType] = useState(userType);
    const products = useSelector((state) => state.allProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('se dispacha la acción hacia redux/actions.js - paso 1');
        if (!products.length) { // Hay que revisar este condicional
            console.log('se dispacha');
            dispatch(getAllProducts);
        }
    }, [])

    useEffect(() => {
        // console.log('se dispara useEffect', userType);
        setType(userType)
    }, [userType])


    console.log(products, 'se cargan los productos del estado global - paso 5');

    return (
        <div>
            <h5>Cards Component </h5>
            {products && 'enconces mapeo products y paso props a cada card'}
            {products.length && type === 'admin' ? products.map(p => {
                return (
                    <CardToAdmin
                        key={p._id}
                        id={p._id}
                        name={p.name}
                        quantity={p.quantity}
                        price={p.price.$numberDecimal}
                        mainImg={p.mainImg}
                        images={p.images}
                        category={p.category}
                        description={p.description}
                    />
                )
            }) : null}

            {products.length && type === 'user' ? products.map(p => {
                return (
                    <CardToUser
                        key={p._id}
                        id={p._id}
                        name={p.name}
                        quantity={p.quantity}
                        price={p.price.$numberDecimal}
                        mainImg={p.mainImg}
                    />
                )
            }) : null}

        </div>
    );
}

{/* <p>Name: {product._id && product.name}</p>
    <p>Description: {product._id && product.description}</p>
    <p>Quantity: {product._id && product.quantity}</p>
    <p>Price: {product._id && product.price.$numberDecimal}</p>
    <p>Url Img: {product._id && product.mainImg}</p>
    <p>Images url: {product._id && JSON.stringify(product.images)}</p>
    <p>Categories: {product._id && JSON.stringify(product.category)}</p> */}

export default Cards;