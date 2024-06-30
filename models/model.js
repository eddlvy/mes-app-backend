const mongoose = require('mongoose');


const ComidaSchema = mongoose.Schema({
  producto: { type: String },
  cantidad: { type: String },
  total: { type: Number },
  comprado: { type: Number }
})


const ComidaModel = mongoose.model('mes', ComidaSchema);

module.exports = ComidaModel;