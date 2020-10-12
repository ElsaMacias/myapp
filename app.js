var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//**

var miRutaRouter = require('./routes/miruta');
var dbRouter = require('./routes/db');

//**

//** BD

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env."postgres://tzsnvlqiqsqtuu:2402aeec4e85e6b3588f49d6225f56ad6d202dda53539388726d91dd3eef643a@ec2-3-223-9-166.compute-1.amazonaws.com:5432/dbmjaneci7591t",
  ssl: {
    rejectUnauthorized: false
  }
});

//**BD
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//**

app.use('/miruta', miRutaRouter);
app.use('/db', dbRouter);
//**
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
