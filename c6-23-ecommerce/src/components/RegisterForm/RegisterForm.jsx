import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './RegisterForm.css';
import { register } from '../../helpers/signUp';

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

export const RegisterForm = () => (
  <div className='flex-form'>
    <div className='formContainer'>
      <h3>Signup</h3>
      <h6>Enter your data</h6>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          passwordConfirm: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          const { passwordConfirm, ...rest } = values;
          rest.role = 'USER_ROLE';
          register(rest);
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
                <div className='invalid-feedback '>{formik.errors.name}</div>
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
                <div className='invalid-feedback'>{formik.errors.email}</div>
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
                <div className='invalid-feedback'>{formik.errors.password}</div>
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
                <div className='invalid-feedback'>
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
          </Form>
        )}
      </Formik>
    </div>
  </div>
);
