let express = require('express');

let app = express();

let port = 3000

app.get('/', function (req, res) {
    res.send('hello motherfucker ');
});

app.listen(port, function () {
    console.log('server is listening on port = ' + port);
});