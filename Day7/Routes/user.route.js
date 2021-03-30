var express = require('express');

var shortID = require('shortid');
var app = express();


var db = require('../db');
var route = express.Router();
route.get('/', function (req, res) {
    res.render('users/user', {
        users: db.get('users').value()
    });
});

route.get('/create', function (req, res) {
    res.render('users/create');
});
route.post('/create', function (req, res) {
    //   console.log(req.body);
    req.body.id = shortID.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
});

route.get('/:id', function (req, res) {
    var id = req.params.id;
    //console.log(id);
    var user = db.get('users').find({ id: id }).value();
    //console.log(user);

    res.render('users/view', {
        user: user
    });
});

//search method
route.get('/search', function (req, res) {
    var q = req.query.q;
    // console.log(q);
    var users = db.get('users').value();
    var matchUsers = users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    //  console.log(matchUsers);
    res.render('users/user', {
        users: matchUsers
    });
});

module.exports = route;