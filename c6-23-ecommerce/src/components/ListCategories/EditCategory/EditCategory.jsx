import { editCategory } from '../../../helpers/category';
import style from './styles/EditCategory.module.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useEffect } from 'react';

// Edit category - Estructura 
// let infoUpadateCategory = {
//     idCategory: "idCategoría",                     // * String, id de la categoría a editar
//     name: "categoría 1",                           // * String, nombre
//     description: "descripción de la categoría 1"   // * Strgin, descripción
// };

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .required('Se requiere nombre')
        .min(6, 'Se requieren 6 caracteres como mínimo.'),

    description: Yup.string()
        .required('Se requiere descripción')
        .matches(/(?:[A-Za-z]+ ){2}[A-Za-z]+/g
            , 'Se requiere al menos tres palabras.'),
});


const editOneCategory = async (dataUpdateCategory, getCategories) => {
    console.log('llega la info a la función', dataUpdateCategory);

    let updateCategory = await editCategory(dataUpdateCategory);

    if (updateCategory.update === true) { // si se crea la categoria
        console.log('se actualiza la categoria ', updateCategory.data);
        window.alert('Categoria actualizada');
        getCategories();
       
        // Dispachar una acción para actualizar las categorias
    } else {
        window.alert(`Ocurrió un error, ${updateCategory.data}`);
    }
}

function EditCategory(props) {
    // console.log('las props en form edit category', props);
    const [data, setData] = useState(null);
    const initialValues = {
        name: '',
        description: '',
        idCategory: ''
    };    
    
    useEffect(() => {      
        setData({
            name: props.name,
            description: props.description,
            idCategory: props._id
        });
    }, [props])

    const closeForm = (e) => {
        e.preventDefault();
        props.setData(null);       
    }
    
    const getCategories = props.getCategories;

    return (
        <div className={style.formPopup} id="myFormEditCategory" >
            <div className={style.formContainer}>
                <Formik
                    initialValues={data || initialValues}
                    validationSchema={SignupSchema}             
                    onSubmit={(values) => {
                        editOneCategory(values, getCategories);                        
                    }}
                    enableReinitialize
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


export default EditCategory;