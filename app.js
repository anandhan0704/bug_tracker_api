const express = require('express');

const app = express();
const morgan = require('morgan');

const routes = require('./src/routes/index.route');
const AppError = require('./src/utils/app.error.util');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Route
app.use('/api/v1', routes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;