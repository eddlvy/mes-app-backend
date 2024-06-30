const ComidaModel = require('../models/model');


const updateProducto = async (req, res) => {
  try {
    const producto = req.params.producto;
    const { comprado } = req.body
    await ComidaModel.updateOne({ producto: producto }, { comprado: comprado })
    return res.send("Compra Actualizada")
  } catch (error) {
    console.log("Error Actualizando");
    return res.status(500).send("Error Actualizando")
  }
}

module.exports = updateProducto;