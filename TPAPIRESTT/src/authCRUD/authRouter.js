const express = require('express');
const AuthRouter = express.Router();
const { responseOk } = require("../utils/responseUtils.js");
const { validateLogin, createSessionToken,sendLoginResponse } = require('./authController.js');
const { loginValidator } = require('./authValidator.js');

AuthRouter.post("/login",loginValidator, validateLogin, createSessionToken,sendLoginResponse)

module.exports = AuthRouter;
