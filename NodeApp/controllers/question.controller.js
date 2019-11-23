const Question = require('../models/question.model');
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

exports.question_create = function (req, res, next) {
    let question = new Question(
        {
            UserID: req.body.UserID,
            question: req.body.question,
            answer: req.body.answer,
            date: req.body.date
        }
    );

    question.save(function (err) {
        if (err){ 
            return next(err);
        }
        res.send('question Created successfully');
    })
};

exports.question_details = function (req, res, next) {
    Question.findById(req.params.id, function (err, question) {
        if (err) return next(err);
        res.send(question);
    })
};

// exports.question_update = function (req, res, next) {

//     req.body.daysUntilDue = req.body.daysUntilDue;
//     req.body.quantity = req.body.quantity;

//     Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
//         if (err) return next(err);
//         res.send('question udpated.');
//     });
// };

exports.question_delete = function (req, res) {
    Question.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.question_user = function (req, res) {
    
    console.log(req.params.user);
    Question.find(
        {UserID:req.params.user},
        function (err, question){
        if (err) return next(err);
        res.send(question);
    })
};

//I designed the below method to return all of the items.
exports.question_all = function (req, res) {
    Question.find(function (err, question){
        if (err) return next(err);
        res.send(question);
    })
};