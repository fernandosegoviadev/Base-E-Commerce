const { response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../collections/Users');

const userGet = async (req, res = response) => {
  const { limite = 15, desde = 0 } = req.query;
  const query = { estate: true };

  // promise all ejecuta los await en paralelo
  const [total, users] = await Promise.all([
    User.count(query),
    User.find(query).limit(Number(limite)).skip(Number(desde)),
  ]);

  res.json({ get: true, total: total, users });
};

const userPost = async (req, res = response) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });

  console.log('llega el llamado del front');
  // Encriptar la contrasena
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();

  res.json({ create: true, msg: 'user successfully created!', user });
};

const userPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, email, ...resto } = req.body;

  console.log(req.body);

  // TODO validar contra db
  if (password) {
    // Encriptar la contrasena
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  console.log('put validado');

  const user = await User.findByIdAndUpdate(id, resto); // returns the new document);

  res.json({ update: true, msg: 'user successfully updated!', id, user });
};

const userDelete = async (req, res = response) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);
  const authUser = req.user;

  /* const user = await User.findByIdAndUpdate(
    id,
    { estate: false },
    { new: true },
  );
  console.log(user); */

  res.json({ delete: true, user, authUser });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
};
