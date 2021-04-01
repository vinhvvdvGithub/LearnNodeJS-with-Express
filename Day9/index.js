var express = require("express");

var port = 3000;
var app = express();
var useRouter = require('./Routes/user.route');
var db = require('./db');



app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/users', useRouter);


app.listen(port, function demo() {

});
