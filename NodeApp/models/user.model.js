const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name : { type: String, required: true},
    email : { type : String, required: true, maxlength: 100},
    //Might actually be something other than a string for the below im not sure how its stored
    hashedPassword : { type : String, required: true, maxlength: 250}
});

module.exports = mongoose.model('User', UserSchema);