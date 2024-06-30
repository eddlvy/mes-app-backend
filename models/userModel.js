const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
  nombre: { type: String },
  clave: { type: String }
})


const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;