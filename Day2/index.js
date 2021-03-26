var express = require('express');

var port = 3000;

var app = express();

app.set('view engine', 'pug');

// app.get('/', function (request, respone) {
//     respone.send('hello word');
// });

// app.listen(port, function () {
//     console.log('port: ' + port);
// });


app.get('/', function (req, res) {
    res.render('index', {
        content: 'demo'
    });
});

app.get('/users', function (req, res) {
    res.render('Users/user',{
        users: [
            { id: 1, name: 'teo' },
            { id: 2, name: 'meo' }
        ]
    });
});

app.listen(port, function demo() {

});