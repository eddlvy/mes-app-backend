const express = require('express');
const getComidaRouter = express.Router();
const getComida = require('../controllers/getComida');


getComidaRouter.route('/home').get(getComida);

module.exports = getComidaRouter;