var db = require('../db');
var shortID = require('shortid');



module.exports.index = function (req, res) {
    res.render('users/user', {
        users: db.get('users').value()
    });
};

module.exports.create = function (req, res) {
    res.render('users/create');
};

module.exports.postCreate = function (req, res) {
    //   console.log(req.body);
    req.body.id = shortID.generate();
    var errors = [];

    if (!req.body.name) {

        errors.push("Name is required");
    }
    if (!req.body.phone) {

        errors.push("Phone is required");
    }

    if (errors.length) {
        res.render('users/create', {
            errors: errors,
            value: req.body
        });
        return;
    }

    db.get('users').push(req.body).write();
    res.redirect('/users');
};

module.exports.get = function (req, res) {
    var id = req.params.id;
    var user = db.get('users').find({ id: id }).value();
    res.render('users/view', {
        user: user
    });
};

module.exports.common = function (req, res) {
    res.render('Layout/common');
};

module.exports.search = function (req, res) {
    var q = req.query.q;
    console.log(q);
    var users = db.get('users').value();
    var matchUsers = users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    console.log(matchUsers);
    // res.render('users/user', {
    //     user: matchUsers
    // });
};
