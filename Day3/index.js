var express = require('express');

var app = express();

var port = 3000;

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', {
        name: 'AAA'
    });
});

var users = [
    { id: 1, name: 'vinh' },
    { id: 2, name: 'teo' },
    { id: 3, name: 'meo' }
];

app.get('/users', function (req, res) {
    res.render('users/user', {
        users: users
    });
});

app.get('/users/search', function (req, res) {
    var q = req.query.q;
    var matchUsers = users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase())!==-1;
    });

    res.render('users/user',  {
        users: matchUsers
    });
});


app.listen(port, function demo() {

});