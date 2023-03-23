const express = require('express');
const app = express();

require('./config/database')

app.use(express.json());

//importing all routes
const products = require('./routes/product');

//using it
app.use('/api/v1', products)

module.exports = app