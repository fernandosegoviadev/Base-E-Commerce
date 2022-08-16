const { check } = require('express-validator');
const { _userExistById } = require('../db-validators');
const { isAdminRole } = require('../validate-role');
const { validateJWT } = require('../validateJWT');
const { validationResult } = require('../validationResult');

const _validMongoId = check('id', 'Not a valid MongoId').isMongoId();
const _userExist = check('id').custom(_userExistById);

const deleteRequestValidations = [
  validateJWT,
  isAdminRole,
  _userExist,
  _validMongoId,
  validationResult,
];
module.exports = {
  deleteRequestValidations,
};
