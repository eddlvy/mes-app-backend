const express = require('express');
const updateProductRouter = express.Router();
const updateProduct = require('../controllers/updateProduct');



updateProductRouter.route('/home/:producto').post(updateProduct);

module.exports = updateProductRouter;