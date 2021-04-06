var db = require('../db');


module.exports.login = function (req, res) {
    res.render('auth/login');
};

module.exports.postLogin = function (req, res) {
    var email = req.body.email;
    console.log(email);
    var password = req.body.password;

    var user = db.get('users').find({ email: email }).value();
    console.log(user);
    if (!user) {
        res.render('auth/login', {
            erros: [
                "User does not exist."
            ],
            value: req.body
        });
        return;
    }

    if (user.password !== password) {
        res.render('auth/login', {
            erros: [
                "Wrong password."
            ],
            value: req.body
        });
        return;
    }
    res.cookie('userid', user.id);
    res.redirect('/users');
};