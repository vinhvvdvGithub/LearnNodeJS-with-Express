var express = require("express");

var port = 3000;
var app = express();
var useRouter = require('./Routes/user.route');
var authRouter = require('./Routes/auth.route');
var db = require('./db');
var cookieParser = require('cookie-parser');



app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser());
app.use('/users', useRouter);
app.use('/auth', authRouter);
app.use(express.static('public'));

app.listen(port, function demo() {

});
