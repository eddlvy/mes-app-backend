const ComidaModel = require('../models/model');



const updateToZero = async (req, res) => {
  try {
    await ComidaModel.updateMany({}, { $set: { comprado: 0 } })
    return res.send("Actualizacion Exitosa")
  } catch (error) {
    res.status(500).send("error actualizando")
  }
}



module.exports = updateToZero;