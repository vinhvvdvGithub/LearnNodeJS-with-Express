var express = require('express');

var app = express();


var validate = require('../validate/user.validate');
var controller = require('../Controller/user.controller');
var route = express.Router();


route.get('/', controller.index);

route.get('/create', controller.create);

route.post('/create',validate.postCreate ,controller.postCreate);

route.get('/common',controller.common);


route.get('/:id', controller.get);

//search method
route.get('/search', controller.search);

module.exports = route;