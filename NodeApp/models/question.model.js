const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    UserID: {type: String, required: true, max: 100},
    question: {type: String, required: true},
    answer: {type: String, required: true},
    date: {type: Date, required: true}
});

// Export the model
module.exports = mongoose.model('Question', QuestionSchema);