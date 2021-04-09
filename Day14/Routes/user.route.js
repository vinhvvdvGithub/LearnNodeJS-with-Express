var express = require('express');

var app = express();


var validate = require('../validate/user.validate');
var controller = require('../Controller/user.controller');
var route = express.Router();


route.get('/', controller.index);

route.get('/create', controller.create);

route.post('/create', validate.postCreate, controller.postCreate);

route.get('/common', controller.common);

route.get('/cookie', function (req, res, next) {
    // res.cookie('user-id: ', 123456);
    // res.send("hello ");
});
route.get('/:id', controller.get);

//auth
route.get('/auth', function (req,res) {
    res.render('/Auth/auth');
});
//search method
route.get('/search', controller.search);

module.exports = route;