import { editProduct } from '../../helpers/product';
import style from './styles/EditProduct.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllCategories, getAllProducts } from '../../redux/actions';
import CustomSelect from '../CustomSelect/CustomSelect';


// Edit product
// let infoUpadateCategory = {
//     idProduct: "62f400334b5d63ec101e1991",                         // * Un string, el id del producto a editar (Colección Products)
//     dataUpdateProduct: {
//         name: "* nombre del producto editado",                      // * Un string
//         description: "* description del producto editado",          // * Un string
//         createBy: "62f3e0438e0ce4592df8f832",                      // * Un string con el id del creador de la producto (Colección Users con rol admin)
//         mainImg: "url de imagen rincipal",                         // Un string con la url de la imágen principal
//         images: ["url imagen 1", "url imagen 2", "url imagen 4"],   // Array de string de url de imágenes secundarias
//         quantity: 0,                                               // Un número entero
//         price: 0,                                                  // Un número entero o decimal       
//         categories: ["62f3e4e39654b45b0f46a48f"]                     // Array de ids de categorias (Colección Categories)
//     }
// }


const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('Se requiere nombre')
        .min(4, 'Se requieren 4 caracteres como mínimo.'),
    description: Yup.string()
        .required('Se requiere descripción')
        .matches(/(?:[A-Za-z]+ ){2}[A-Za-z]+/g
            , 'Se requiere al menos tres palabras.'),
    mainImg: Yup.string()
        .required('Se requiere url imagen')
        .matches(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi
            , 'Debe ser la url de una imagen.'),
    quantity: Yup.number('Debe ser un entero')
        .integer('Debe ser un entero')
        .positive('Debe ser positivo')
        .required('Se requiere cantidad'),
    //.matches(/^\d+$/
    //    , 'Debe ser un número entero.'),
    price: Yup.number()
        .positive('Debe ser positivo')
        .required('Se requiere precio'),
    //.matches(/^[0-9]+([,][0-9]+)?$/
    //    , 'Debe ser un número con dos decimales.'),
    categories: Yup.array().of(Yup.string())

});


const editOneProduct = async (dataUpdateProduct, getProducts) => {
    console.log('llega la info a la función', dataUpdateProduct);
    const { idProduct, name, description,
        mainImg, quantity, price, categories } = dataUpdateProduct;

    let infoUpadateCategory = {
        idProduct: idProduct,
        dataUpdateProduct: {
            name: name,
            description: description,
            mainImg: mainImg,
            quantity: quantity,
            price: price,
            images: [],
            categories: categories
        }
    }

    let updateProduct = await editProduct(infoUpadateCategory);

    if (updateProduct.update === true) { // si se crea la categoria
        // console.log('se edita el producto ', updateProduct.data);
        window.alert('Producto actulizado');
        //Dispachar una acción para actualizar la lista de productos
        getProducts();

    } else {
        window.alert(`Ocurrió un error, ${updateProduct.data}`);
    }
}


function EditProduct(props) {
    console.log('las props en form edit product', props);
    const [data, setData] = useState(null);

    const categories = useSelector((state) => state.listCategories);
    const categoryOptions = categories.length && categories.map((c) => {
        return {
            label: c.name,
            value: c._id
        }
    });
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        description: '',
        mainImg: '',
        quantity: '',
        price: '',
        idProduct: '',
        images: [],
        categories: [],

    };

    useEffect(() => {
        if (!categories.length) {
            dispatch(getAllCategories());
        }
    }, [])

    useEffect(() => {
        // console.log('las props en useEffect', props);
        setData({
            name: props.dataProduct.name,
            description: props.dataProduct.description,
            mainImg: props.dataProduct.mainImg,
            quantity: props.dataProduct.quantity,
            price: props.dataProduct.price.$numberDecimal,
            idProduct: props.dataProduct._id,
            images: props.dataProduct.images,
            categories: props.dataProduct.categories,

        });
    }, [props])

    const closeForm = (e) => {
        e.preventDefault();
        props.setDataProduct(null);
    }

    // Me falta pasar un función para actulizar el estado.
    // const getAllProducts = props.getAllProducts;
    const getProducts = () => {
        console.log('se ejecuta getProducts');
        setTimeout(() => {
            dispatch(getAllProducts());

        }, 1000)
    }

    // console.log('cómo quedó categoryOptions', categoryOptions);

    return (
        <div className={style.formPopup} id="myFormEditProduct">
            <div className={style.formContainer}>
                <Formik
                    initialValues={data || initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        console.log(values, 'los values')
                        editOneProduct(values, getProducts);
                    }}
                    enableReinitialize
                >
                    {(formik, isSubmitting) => (
                        <Form>

                            <div className='form-group mb-4'>
                                <label htmlFor='name'>Name</label>
                                <Field
                                    name='name'
                                    placeholder='Product name'
                                    className={
                                        formik.touched.name && formik.errors.name
                                            ? 'form-control is-invalid '
                                            : 'form-control '
                                    }
                                    type='text'
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className={style.invalidFeedback}>{formik.errors.name}</div>
                                ) : null}
                            </div>

                            <div className='form-group mb-4'>
                                <label htmlFor='description'>Description</label>
                                <Field
                                    name='description'
                                    placeholder='Product description'
                                    className={
                                        formik.touched.description && formik.errors.description
                                            ? 'form-control is-invalid'
                                            : 'form-control'
                                    }
                                    type='text'
                                />
                                {formik.touched.description && formik.errors.description ? (
                                    <div className={style.invalidFeedback}>{formik.errors.description}</div>
                                ) : null}
                            </div>

                            <div className='form-group mb-4'>
                                <label htmlFor='mainImg'>Image</label>
                                <Field
                                    name='mainImg'
                                    placeholder='imageurl.jpg'
                                    className={
                                        formik.touched.mainImg && formik.errors.mainImg
                                            ? 'form-control is-invalid'
                                            : 'form-control'
                                    }
                                    type='text'
                                />
                                {formik.touched.mainImg && formik.errors.mainImg ? (
                                    <div className={style.invalidFeedback}>{formik.errors.mainImg}</div>
                                ) :
                                    <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                        <img id='img-create' src={formik.values.mainImg}
                                            style={{ maxHeight: "150px", maxWidth: "150px" }}
                                            alt="Image not found" />
                                    </div>
                                }
                            </div>

                            <Field
                                className='custom-select'
                                name='categories'
                                options={categoryOptions}
                                component={CustomSelect}
                                placeholder="Select multi categories..."
                                isMulti={true}
                            />

                            <div className='form-group mb-4'>
                                <label htmlFor='quantity'>Stock</label>
                                <Field
                                    name='quantity'
                                    placeholder='1'
                                    className={
                                        formik.touched.quantity && formik.errors.quantity
                                            ? 'form-control is-invalid'
                                            : 'form-control'
                                    }
                                    type='text'
                                />
                                {formik.touched.quantity && formik.errors.quantity ? (
                                    <div className={style.invalidFeedback}>{formik.errors.quantity}</div>
                                ) : null}
                            </div>

                            <div className='form-group mb-4'>
                                <label htmlFor='price'>Price</label>
                                <Field
                                    name='price'
                                    placeholder='99 or 99.99'
                                    className={
                                        formik.touched.price && formik.errors.price
                                            ? 'form-control is-invalid'
                                            : 'form-control'
                                    }
                                    type='text'
                                />
                                {formik.touched.price && formik.errors.price ? (
                                    <div className={style.invalidFeedback}>{formik.errors.price}</div>
                                ) : null}
                            </div>

                            <div className='form-group mt-1'>
                                <button
                                    type='submit'
                                    className='btn btn-primary w-100'
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Please wait...' : 'Update'}
                                </button>
                                <button
                                    type='submit'
                                    className='btn btn-primary w-100'
                                    onClick={(e) => closeForm(e)}
                                >Close
                                </button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}


export default EditProduct;