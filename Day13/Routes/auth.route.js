var express = require('express');

var app = express();


var validate = require('../validate/user.validate');
var controller = require('../Controller/auth.controller');
var route = express.Router();

route.get('/login', controller.login);

module.exports = route;