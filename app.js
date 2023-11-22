const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs');

const indexRouter = require('./routes/index');
const marcasRouter = require('./routes/marcas');
const signupRouter = require('./routes/sign');

const app = express()
const port = 3001

var db = require('./database/database');
const proprietarios = require('./models/proprietarios');
const funcionarios = require('./models/funcionarios');
const cargos = require('./models/cargos');
const marcas = require('./models/marcas');
const marcas_assinadas = require('./models/marcasAssinadas');
const marcas_avaliadas = require('./models/marcasAvaliadas');

// view engine setup
app.set(path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// static directory setup
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery-mask-plugin/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use(express.static(path.join(__dirname, 'node_modules/@popperjs/core/dist/umd')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes setup
app.use('/', indexRouter);
app.use('/marcas', marcasRouter);
app.use('/signin', signupRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;