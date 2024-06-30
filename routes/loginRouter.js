const express = require('express');
const loginRouter = express.Router();
const login = require('../controllers/login');


loginRouter.route('/login').post(login);

module.exports = loginRouter;