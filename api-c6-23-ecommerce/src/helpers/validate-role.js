const isAdminRole = (req, res, next) => {
  if (!req.user) {
    return res.status(500).json({
      msg: 'Tried verify role without validate token first',
    });
  }

  const { role, name } = req.user;

  if (role !== 'admin') {
    return res.status(401).json({
      msg: `${name} isn't an admin, can't do this`,
    });
  }

  req.user;

  next();
};

module.exports = {
  isAdminRole,
};
