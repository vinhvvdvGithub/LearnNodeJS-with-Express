var express = require('express');

var app = express();



var productController = require('../Controller/product.controller');
var route = express.Router();


route.get('/', productController.index);

module.exports = route;