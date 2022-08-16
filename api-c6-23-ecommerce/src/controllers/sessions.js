const bcryptjs = require('bcryptjs');
const User = require('../collections/Users');
const { JWTGenerator } = require('../helpers/JWTgenerate');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Verificar si el email existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos - correo',
      });
    }

    // Si el usuario está activo
    if (!user.state) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos - estado:false',
      });
    }

    // Verificar la contrasena
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: 'Usuario / Password no son correctos - password',
      });
    }
    // Gererar el JWT

    const token = await JWTGenerator(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador',
    });
  }

  //res.send('Esto es api/sessions/signin');
};

module.exports = {
  login,
};
