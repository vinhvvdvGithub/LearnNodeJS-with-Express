var express = require("express");
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
db = low(adapter);



var app = express();

var port = 3000;

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
    .write();


app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.get('/users', function (req, res) {
    res.render('users/user', {
        users: db.get('users').value()
    });
});

app.get('/users/create', function (req, res) {
    res.render('users/create');
});

app.post('/users/create', function (req, res) {
    //   console.log(req.body);
    db.get('users').push(req.body).write();
    res.redirect('/users');
});

//search method
app.get('/users/search', function (req, res) {
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


app.listen(port, function demo() {

});
