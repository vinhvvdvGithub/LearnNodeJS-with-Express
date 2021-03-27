var express = require('express');

var app = express();

var port = 3000;

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', {
        name: 'AAA'
    });
});


app.get('/users', function (req, res) {
    res.render('users/index', {
        users: [
            { id: 1, name: 'teo' },
            { id: 2, name: 'mr teo' }
        ]
    });
});

app.get('/users/search', function (req, res) {
    console.log(req.query);
});


app.listen('port', function() {

});