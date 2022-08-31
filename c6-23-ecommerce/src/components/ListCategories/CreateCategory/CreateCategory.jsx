import { createNewCategory } from '../../../helpers/category';
import style from './styles/CreateCategory.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { getAllCategories } from '../../../redux/actions';


const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('Se requiere nombre')
        .min(6, 'Se requieren 6 caracteres como mínimo.'),

    description: Yup.string()
        .required('Se requiere descripción')
        .matches(/(?:[A-Za-z]+ ){2}[A-Za-z]+/g
            , 'Se requiere al menos tres palabras.'),
});


const createOneCategory = async (dataNewCategory, actions, getCategories) => {
    console.log('llega la info a la función', dataNewCategory);

    let newCategory = await createNewCategory(dataNewCategory);

    if (newCategory.create === true) { // si se crea la categoria
        // console.log('se crea la categoria ', newCategory.data);
        // console.log('se crea la categoria ', actions);
        window.alert('Categoria creada con éxito!');
        actions.resetForm();
        getCategories();

        // Quiero limpiar el formulario
        // Dispachar una acción para actualizar las categorias

    } else {
        window.alert(`Ocurrió un error, ${newCategory.data}`);

    }
}


function CreateCategory() {
    // console.log('form create category');
    const dispatch = useDispatch();

    const getCategories = () =>{
        console.log('se ejecuta getProducts');
        setTimeout(()=>{
            dispatch(getAllCategories());

        },1000)
    }

    const closeForm = (e) => {
        e.preventDefault();
        document.getElementById("myFormAddCategory").style.display = "none";
    }

    return (
        <div className={style.formPopup} id="myFormAddCategory" >
            <div className={style.formContainer}>
                <Formik
                    initialValues={{
                        name: '',
                        description: '',
                    }}
                    onSubmit={(values, actions) => {
                        createOneCategory(values, actions, getCategories);
                    }}
                    validationSchema={SignupSchema}
                >
                    {(formik, isSubmitting) => (
                        <Form>
                            <div className='form-group mb-4'>
                                <label htmlFor='name'>Name</label>
                                <Field
                                    name='name'
                                    placeholder='Category name'
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
                                    placeholder='Category description'
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
// Create new catetory - Estructura 
// let infoNewCategory = {
//     name: "category 1",
//     description: "description category"
// };
export default CreateCategory;