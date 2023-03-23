const express = require('express');
const app = express();

const errorMiddleware  = require('./middlewares/errors')

require('./config/database')

app.use(express.json());

//importing all routes
const products = require('./routes/product');

//using it
app.use('/api/v1', products)

// middleware to handle errors. (shoul be used after the route)
app.use(errorMiddleware);

module.exports = app