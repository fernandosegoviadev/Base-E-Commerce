import style from './styles/RegisterForm.module.css';
import { register } from '../../../helpers/signUp';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { useState } from 'react';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Se requiere nombre')
    .min(4, 'Se requieren 4 caracteres como mínimo.'),

  email: Yup.string()
    .email('Email invalido.')
    .required('El email es requerido.'),
  password: Yup.string('Ingresa tu contrasena')
    .required('Se requiere contrasena')
    .min(6, 'Se requieren 6 caracteres como mínimo.')
    .matches(/(?=.*[A-z])/, 'Se requiere al menos una (1) letra.')
    .matches(/(?=.*[0-9])/, 'Se requiere al menos un (1) numero.'),
  //.matches( /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
  //  'Se requiere al menos un caracter especial.'),
  passwordConfirm: Yup.string()
    .required('La contraseña es requerida.')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden.'),
});

const createNewUser = async (dataNeWUser) => {
  let newUser = await register(dataNeWUser);
  if (newUser.user) { // si se crea el usuario
    console.log('se crea el usuario ', newUser.user);
    // Quiero limpiar el formulario
    // Carte de usuario creado con éxito (SweetAlert)
    // Cambiar el estado para ver el form SignIn

  }
}

function RegisterForm () {
  // const [sent, setSent] = useState(false); // Aviso de enviado

  return (
    <div className={style.flexForm}>
      <div className={style.formContainer}>
        <h3>SignUp</h3>
        <h6>Enter your data</h6>
        <Formik
          initialValues={{
            name: 'Fernando',
            email: 'fer_0144@email.com',
            password: 'A12345',
            passwordConfirm: 'A12345',
          }}
          onSubmit={(values) => {
            //onSubmit={(values, { setSubmitting }) => {
            const { passwordConfirm, ...rest } = values;
            rest.role = 'user'; // y también está el "admin"
            // console.log('se envia el form al back con ', rest);
            createNewUser(rest);

          }}
          validationSchema={SignupSchema}
        >
          {(formik, isSubmitting) => (
            <Form>
              <div className='form-group mb-4'>
                <label htmlFor='name'>Name</label>
                <Field
                  name='name'
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
              <div className='form-group mb-4'>
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
              <div className='form-group mb-5'>
                <label htmlFor='passwordConfirm'>Password Confirm</label>
                <Field
                  name='passwordConfirm'
                  className={
                    formik.touched.passwordConfirm &&
                      formik.errors.passwordConfirm
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  type='password'
                />
                {formik.touched.passwordConfirm &&
                  formik.errors.passwordConfirm ? (
                  <div className={style.invalidFeedback}>
                    {formik.errors.passwordConfirm}
                  </div>
                ) : null}
              </div>
              <div className='form-group mt-1'>
                <button
                  type='submit'
                  className='btn btn-primary w-100'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Please wait...' : 'Submit'}
                </button>
              </div>
              {/* {sent && <p>Formulario enviado!</p>} */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default RegisterForm;