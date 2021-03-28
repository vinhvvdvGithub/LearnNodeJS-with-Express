var express = require('express');

var app = express();

var port = 3000;

//var body = require('body-parser');

var users = [
    { id: 1, name: "teo" },
    { id: 2, name: "pheo" },
    { id: 3, name: "meo" },
    { id: 4, name: "heo" }
]

app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/users', function (req, res) {
    res.render('users/user', {
        users: users
    });
});

app.get('/users/create', function (req, res) {
    res.render('users/create');
});

app.post('/users/create', function (req, res) {
    //   console.log(req.body);
    users.push(req.body);
    res.redirect('/users');
});

app.listen(port, function demo() {

});
