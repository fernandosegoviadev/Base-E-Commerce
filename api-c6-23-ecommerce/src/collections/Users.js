const { Schema, model } = require('mongoose');

const UsersSchema = Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    default: 'USER_ROLE',
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

// para que no devuelva el pass cuando el modelo es llamado
UsersSchema.methods.toJSON = function () {
  const { __v, password, ...users } = this.toObject();
  return users;
};

module.exports = model('User', UsersSchema);
