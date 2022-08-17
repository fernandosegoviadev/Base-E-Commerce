import { useNavigate } from "react-router-dom";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import './LoginForm.css';
import style from './styles/LoginForm.module.css';
import { sigin } from '../../../helpers/signIn';

const SignupSchema = Yup.object().shape({

  email: Yup.string()
    .email('Email invalido.')
    .required('El email es requerido.'),
  password: Yup.string('Ingresa tu contrasena')
    .required('Se requiere contrasena')
    .min(6, 'Se requieren 6 caracteres como mínimo.')
    .matches(/(?=.*[A-z])/, 'Se requiere al menos una (1) letra.')
    .matches(/(?=.*[0-9])/, 'Se requiere al menos un (1) numero.')
    //.matches(
    //  /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
    //  'Se requiere al menos un caracter especial.',
    //),
});

const loginUser = async (dataUser, navigate) => {
  // console.log('sale del form', dataUser);
  let loginUser = await sigin(dataUser);
  
  if (loginUser.login === true ) { // si el usuario se loguea
    navigate('../home', {replace: true});
    
  } else { // si el usuario no se loguea
    // console.log('no se puede realizar el login', loginUser.msg);
    window.alert(`Error, ${loginUser.msg}`)    
  }
}

function RegisterForm() {
  let navigate = useNavigate();

  return (
    <div className={style.flexForm}>
      <div className={style.formContainer}>
        <h1>SignIn</h1>
        <Formik
          initialValues={{
            email: 'fer_0144@email.com',
            password: 'A12345',
          }}
          // onSubmit={(values, { setSubmitting }) => {
          onSubmit={(values) => {
            // const { passwordConfirm, ...rest } = values;
            console.log('Recibe el onSubmit ');
            loginUser(values, navigate);
            // setTimeout(() => {
            //   alert(JSON.stringify(rest, null, 2));
            //   setSubmitting(false);
            // }, 1000);
          }}
          validationSchema={SignupSchema}
        >
          {(formik, isSubmitting) => (
            <Form >

              <div className={style.formGroup}>
                <label htmlFor='email'>Email Address</label>
                <Field
                  name='email'
                  className={
                    formik.touched.email && formik.errors.email
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  type='email'
                />

                {formik.touched.email && formik.errors.email ? (
                  <div className={style.invalidFeedback}>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className={style.formGroup}>
                <label htmlFor='password'>Password</label>
                <Field
                  name='password'
                  className={
                    formik.touched.password && formik.errors.password
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  type='password'
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className={style.invalidFeedback}>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className={style.formGroup}>
                <button
                  type='submit'
                  className='btn btn-primary'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Please wait...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default RegisterForm;