const { Router } = require('express');
const { login } = require('../controllers/sessions');
const {
  signInValidations,
} = require('../helpers/sessionValidate/signInValidate');

const router = Router();

// Esto es "api/sessions/signin" post y sirve para loguear un user
router.post('/signin', signInValidations, login);

// Esto es "api/sessions/logout" post y sirve para cerrar la desloguear un user
router.post('/logout', (req, res) => {
  res.send('Esto es api/sessions/logout');
});

module.exports = router;
