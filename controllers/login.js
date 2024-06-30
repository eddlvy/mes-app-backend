const dotenv = require('dotenv').config({ path: '../config/config.env' });
const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const login = async (req, res) => {
  try {
    const secret = process.env.SECRET;
    const { nombre, clave } = req.body
    const user = await UserModel.findOne({ nombre });
    if (!user) {
      return res.status(401).json({ error: "Usuario no Existe" })
    }
    const passwordMatch = await bcrypt.compare(clave, user.clave);
    if (!passwordMatch) {
      return res.status(401).json({ error: "La clave es incorrecta" })
    }

    let token = jwt.sign({ nombre: user.nombre }, secret, { expiresIn: 60 * 60 })
    return res.send({ token: token })


  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "La autenticacion Fallo" })
  }
}



module.exports = login;