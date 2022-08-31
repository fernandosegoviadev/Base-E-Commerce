import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../redux/actions';
import { deleteProduct } from "../../helpers/product";
import CardToUser from "../CardToUser/CardToUser";
import CardToAdmin from "../CardToAdmin/CardToAdmin";
import EditProduct from "../EditProduct/EditProduct";
// import style from './styles/Cards.module.css';


function Cards({ userData }) {
    const products = useSelector((state) => state.allProducts);
    const [userInfo, setUserInfo] = useState(userData);
    const [dataProduct, setDataProduct] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('se dispacha la acción hacia redux/actions.js - paso 1');
        if (!products.length) { // Hay que revisar este condicional
            console.log('se dispacha');
            dispatch(getAllProducts());
        }
    }, [])

    useEffect(() => {
        // console.log('se dispara useEffect', userType);
        setUserInfo(userData)
    }, [userData])


    const onDelete = async (productId) => {
        // console.log('llama al back para borrar',productId)
        // e.preventDefault();
        if (window.confirm('Are you sure to delete these product')) {
            let productDelete = await deleteProduct(productId);

            console.log('responde el back luego de intentar borrar', productDelete)
            if (productDelete.delte === true) {
                window.alert('Product deleted');
            } else {
                window.alert('Error, product not deleted');
            }

        }
    }

    const onEdit = async (productId) => {
        // console.log('llega el id para abrir el form de edición', productId);
        // console.log('el array de productos', products);


        // Bucar el producto en el array y filtrarlo
        const product = [...products].find(p => p._id === productId);
        // Setear su información en un estado local
        if (product) {
            setDataProduct(product);
        }
        // Mandar esa información al formulario de edición
        // console.log('el producto', product);

        // En el formulario
        // Precargar la info en los campos
        // Conectar el form a herlpers y luego al back
    }

    return (
        <div >
            <h5>Cards Component </h5>
            <div >


                {products && 'enconces mapeo products y paso props a cada card'}
                {products.length && userInfo.role === 'admin' ? products.map(p => {
                    return (
                        <CardToAdmin
                            key={p._id}
                            _id={p._id}
                            name={p.name}
                            quantity={p.quantity}
                            price={p.price.$numberDecimal}
                            mainImg={p.mainImg}
                            images={p.images}
                            categories={p.categories}
                            description={p.description}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    )
                }) : null}

                {products.length && userInfo.role === 'user' ? products.map(p => {
                    return (
                        <CardToUser
                            key={p._id}
                            _id={p._id}
                            name={p.name}
                            quantity={p.quantity}
                            price={p.price.$numberDecimal}
                            mainImg={p.mainImg}
                        />
                    )
                }) : null}

                {dataProduct && <EditProduct
                    dataProduct={dataProduct}
                    setDataProduct={setDataProduct}
                />}
            </div>
        </div>
    );
}

{/* <p>Name: {product._id && product.name}</p>
    <p>Description: {product._id && product.description}</p>
    <p>Stock: {product._id && product.quantity}</p>
    <p>Price: {product._id && product.price.$numberDecimal}</p>
    <p>Url Img: {product._id && product.mainImg}</p>
    <p>Images url: {product._id && JSON.stringify(product.images)}</p>
    <p>Categories: {product._id && JSON.stringify(product.categories)}</p> */}

export default Cards;