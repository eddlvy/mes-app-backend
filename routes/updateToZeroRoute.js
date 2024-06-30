const express = require('express');
const updateToZeroRouter = express.Router();
const updateToZero = require('../controllers/updateToZero')



updateToZeroRouter.route('/home/update/reset').post(updateToZero);

module.exports = updateToZeroRouter;