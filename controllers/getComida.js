const ComidaModel = require('../models/model');


const getComida = async (req, res) => {
  try {
    const products = await ComidaModel.find({}, { _id: 0, __v: 0 })
    return res.send(products)
  } catch (error) {
    console.log("Error Retrieving Products")
  }
}

module.exports = getComida;