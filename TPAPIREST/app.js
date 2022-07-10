const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongodb = require("mongodb")

const indexRouter = require('./src/routes/index');
const peliculasRouter = require('./src/peliculasCRUD/peliculasRouter.js');
//const AuthRouter = require('./src/authCRUD/authRouter');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/peliculas', peliculasRouter);
//app.use("/auth", AuthRouter);

module.exports = app;
