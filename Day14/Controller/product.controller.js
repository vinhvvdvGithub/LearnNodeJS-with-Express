var db = require('../db');

module.exports.index = function (req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = 3
    var start = (page - 1) * perPage;
    var end = page * perPage;
    var drop = (page - 1) * perPage;
    res.render("Products/product", {
        //products: db.get('products').value().slice(start, end)
        products: db.get('products').drop(drop).take(perPage).value()
    });


};