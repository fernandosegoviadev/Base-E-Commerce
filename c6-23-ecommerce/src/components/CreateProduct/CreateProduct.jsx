import { createNewProduct } from '../../helpers/product';
import style from './styles/CreateProduct.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getAllCategories } from '../../redux/actions';
import CustomSelect from '../CustomSelect/CustomSelect';
import { useEffect } from 'react';

//         name: "* nombre del producto",                            // * Un string
//         description: "* description del producto",                // * Un string
//         mainImg: "url de imagen rincipal",                       // Un string con la url de la imágen principal
//         images: ["url imagen 1", "url imagen 2", "url imagen 3"], // Array de string de url de imágenes secundarias
//         quantity: 0,                                             // Un número entero
//         price: 0,                                                // Un número entero o decimal
//         categories: ["62f3e4e39654b45b0f46a48f"] 

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


const createOneProduct = async (dataNewProduct, actions, getProducts) => {
    console.log('llega la info a la función', dataNewProduct);
    let infoNewProduct = { dataNewProduct: dataNewProduct }

    let newProduct = await createNewProduct(infoNewProduct);

    if (newProduct.create === true) { // si se crea la categoria
        // console.log('se crea el producto ', newProduct.data);
        window.alert('Producto creado con éxito!');

        console.log('getCategories categoria ');

        actions.resetForm();

        getProducts();

    } else {
        window.alert(`Ocurrió un error, ${newProduct.data}`);
    }
}


function CreateProduct() {
    console.log('form create product');

    const categories = useSelector((state) => state.listCategories);

    const categoryOptions = categories.length && categories.map((c) => {
        return {
            label: c.name,
            value: c._id
        }
    });

    const initialValues = {
        name: '',
        description: '',
        mainImg: '',
        quantity: '',
        price: '',
        images: [],
        categories: [],
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if (!categories.length) {
            dispatch(getAllCategories());
        }
    }, [])

    const getProducts = () => {
        console.log('se ejecuta getProducts');
        setTimeout(() => {
            dispatch(getAllProducts());

        }, 1000)
    }

    const closeForm = (e) => {
        e.preventDefault();
        document.getElementById("myFormAddProduct").style.display = "none";
    }

    return (
        <div className={style.formPopup} id="myFormAddProduct">
            <div className={style.formContainer}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        createOneProduct(values, actions, getProducts);

                    }}
                    validationSchema={SignupSchema}
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
                                <label htmlFor='quantity'>Quantity</label>
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
                                    {isSubmitting ? 'Please wait...' : 'Create'}
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
// Create new product - Estructura
// let infoNewProduct = {
//     dataNewProduct: {
//         name: "* nombre del producto",                            // * Un string
//         description: "* description del producto",                // * Un string
//         createBy: "62f3e0438e0ce4592df8f832",                    // * Un string con el id del creador de la producto (adminId)
//         mainImg: "url de imagen rincipal",                       // Un string con la url de la imágen principal
//         images: ["url imagen 1", "url imagen 2", "url imagen 3"], // Array de string de url de imágenes secundarias
//         quantity: 0,                                             // Un número entero
//         price: 0,                                                // Un número entero o decimal
//         category: ["62f3e4e39654b45b0f46a48f"]                   // Array de ids de categorias, 
//     }
// }
export default CreateProduct;