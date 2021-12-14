module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.session.currentUser) {
      next()
    } else {
      res.status(401).json({
        code: 401,
        message: 'Necesitas iniciar sesión para seguir',
        err,
      })
    }
  },

  checkIfGOD: (req, res, next) => {
    req.session.currentUser.role === 'GOD'
      ? next()
      : res.status(403).json({
          code: 403,
          message: 'No tienes permisos para ver esta página',
          err,
        })
  },
}
