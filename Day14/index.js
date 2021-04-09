var express = require("express");

var port = 3000;
var app = express();
var useRouter = require('./Routes/user.route');
var authRouter = require('./Routes/auth.route');
var db = require('./db');
var cookieParser = require('cookie-parser');
var authMiddleware = require('./middlewares/auth.middleware');
var product = require("./Routes/product.route");


app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser());
app.use('/users', authMiddleware.requireAuth, useRouter);
app.use('/auth', authRouter);
app.use('/products', product);
app.use(express.static('public'));
app.listen(port, function demo() {

});
