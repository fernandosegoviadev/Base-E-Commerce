import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import './LoginForm.css';
import style from './styles/LoginForm.module.css';

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
    .matches(/(?=.*[0-9])/, 'Se requiere al menos un (1) numero.')
    .matches(
      /^(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
      'Se requiere al menos un caracter especial.',
    ),
  passwordConfirm: Yup.string()
    .required('La contraseña es requerida.')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden.'),
});

const RegisterForm = () => (
  <div className={style.flexForm}>
    <div className={style.formContainer}>
    <h1>SignIn</h1>
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        const { passwordConfirm, ...rest } = values;
        setTimeout(() => {
          alert(JSON.stringify(rest, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
      validationSchema={SignupSchema}
    >
      {(formik, isSubmitting) => (
        <Form >
          <div className={style.formGroup}>
            {/* <label htmlFor='name'>Name</label>
            <Field
              name='name'
              className={
                formik.touched.name && formik.errors.name
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              type='text'
            /> */}

            {formik.touched.name && formik.errors.name ? (
              <div className={style.invalidFeedback}>{formik.errors.name}</div>
            ) : null}
          </div>
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
            {/* <label htmlFor='passwordConfirm'>Password Confirm</label>
            <Field
              name='passwordConfirm'
              className={
                formik.touched.passwordConfirm && formik.errors.passwordConfirm
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              type='password'
            /> */}
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
              <div className={style.invalidFeedback}>
                {formik.errors.passwordConfirm}
              </div>
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
);

export default RegisterForm;