const { Router } = require('express');
const { login } = require('../controllers/sessions');
const {
  signInValidations,
} = require('../helpers/sessionValidate/signInValidate');

const router = Router();

// Esto es "api/sessions/signin" post y sirve para loguear un user
router.post('/signin', signInValidations, login);



function isAuthenticated(req, res, next) {

  // console.log(req.body, 'que trae el body?')
  console.log(req.session, 'si--- esto es req.session register isAuthenticated');
  console.log(req.user, 'si--- esto es req.user register isAuthenticated');
  console.log(req.cookies,'no--- esto es req.cookies register isAuthenticated');
  console.log(req.signedCookies,'si--- esto es req.signedCookies register isAuthenticated');
  // El browser no me trajo nada, solo un resto de cookie

  // if (req.isAuthenticated()) {
     next();
  // } else {
  //   res.redirect('/');
  // }
}

// Esto es "api/sessions/logout" post y sirve para cerrar la desloguear un user
router.post('/logout', isAuthenticated, (req, res) => {
  console.log(req.body, 'api/sessions/logout');
  console.log(req.query);
  console.log(req.params);
  // req.logout();
  res.status(200).json({logout: true});
});

module.exports = router;
