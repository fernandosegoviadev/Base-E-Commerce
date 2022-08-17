const { check } = require('express-validator');
const { validationResult } = require('../validationResult');

const _validEmail = check('email', 'El correo es obligatorio').isEmail();
const _validPassword = check('password', 'El password es obligatorio')
  .not()
  .isEmpty();

const signInValidations = [_validEmail, _validPassword, validationResult];
module.exports = { signInValidations };
