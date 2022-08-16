const { Router } = require('express');
const {
  userGet,
  userPost,
  userPut,
  userDelete,
} = require('../controllers/users');
const {
  deleteRequestValidations,
} = require('../helpers/userValidate.js/deleteValidate');
const {
  postRequestValidations,
} = require('../helpers/userValidate.js/postValidate');
const {
  putRequestValidations,
} = require('../helpers/userValidate.js/putValidate');

const router = Router();

router.get('/', userGet);
router.post('/', postRequestValidations, userPost);
router.put('/:id', putRequestValidations, userPut);
router.delete('/:id', deleteRequestValidations, userDelete);

module.exports = router;
