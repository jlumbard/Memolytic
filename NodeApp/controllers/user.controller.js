const User = require('../models/user.model');
var sanitize = require ("mongo-sanitize");

var sanitizeHtml = require('sanitize-html');


const path = require('path');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.home = function (req, res){
    res.sendFile(path.join(__dirname + '/../views/index.html'));
};

exports.script = function (req, res){
    res.sendFile(path.join(__dirname + '/../views/script.js'));
};

exports.user_create = function (req, res, next) {
    let user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            hashedPassword: req.body.password,
            Environmental : req.body.Environmental,
            Emotional : req.body.Emotional,
            Financial : req.body.Financial,
            Social : req.body.Social,
            Spiritual : req.body.Spiritual,
            Physical : req.body.Physical,
            Intellectual: req.body.Intellectual
        }
    );

    user.save(function (err) {
        if (err){ 
            return next(err);
        }
        res.send('user Created successfully');
    })
};

exports.user_details = function (req, res, next) {
  User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res, next) {

    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('user udpated.');
    });
};

exports.user_delete = function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};



//I designed the below method to return all of the items.
exports.user_all = function (req, res) {
  User.find(function (err, user){
        if (err) return next(err);
        res.send(user);
    })
};