const jwt = require('jsonwebtoken');
const User = require('../collections/Users');

const validateJWT = async (req, res, next) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWTPRIVATEKEY);
    // leer el usuario que corresponde al uid
    const user = await User.findById(uid);

    if (!user) {
      return res.status(401).json({
        msg: 'Invalid Token - user doesnt exist on DB',
      });
    }

    // Verificar si el uid tiene estado true
    if (!user.state) {
      return res.status(401).json({
        msg: 'Invalid Token - user with state:false',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: 'Invalid Token',
    });
  }
};

module.exports = {
  validateJWT,
};
