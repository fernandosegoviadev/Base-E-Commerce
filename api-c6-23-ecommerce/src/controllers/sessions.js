const bcryptjs = require('bcryptjs');
const User = require('../collections/Users');
const { JWTGenerator } = require('../helpers/JWTgenerate');

const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log('back controllers/sessions email and pass ', email, password);
  try {
    // Verificar si el email existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({
        login: false,
        msg: 'Usuario / Password no son correctos - correo',
      });
    }

    // Si el usuario está activo
    if (!user.state) {
      return res.status(200).json({
        login: false,
        msg: 'Usuario / Password no son correctos - estado:false',
      });
    }

    // Verificar la contrasena
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(200).json({
        login: false,
        msg: 'Usuario / Password no son correctos - password',
      });
    }
    // Gererar el JWT

    const token = await JWTGenerator(user.id);

    // console.log('back controllers/sessions ', user, token );

    res.json({
      login: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      login: false,
      msg: 'Hable con el administrador',
      error: error,
    });
  }

  //res.send('Esto es api/sessions/signin');
};

module.exports = {
  login,
};
