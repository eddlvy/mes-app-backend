const dotenv = require('dotenv').config({ path: '../config/config.env' });
const jwt = require('jsonwebtoken');


const auth = async (req, res, next) => {
  const secret = process.env.SECRET;
  if (req.headers.authorization) {
    const data = req.headers.authorization;
    const token = data.split(' ')[1];
    jwt.verify(token, secret, (error, user) => {
      if (!error) {
        req.user = user;
        next()
      } else {
        return res.status(403).json({ error: "Usuario no registrado" })
      }
    })
  } else {
    return res.status(403).json({ error: "Usuario no Autenticado" })
  }

}

module.exports = auth;