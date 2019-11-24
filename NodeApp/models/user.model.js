const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name : { type: String, required: true},
    email : { type : String, required: true, maxlength: 100},
    //Might actually be something other than a string for the below im not sure how its stored
    hashedPassword : { type : String, required: true, maxlength: 250},
    Environmental : { type : Number, required: false, max: 5},
    Emotional : { type : Number, required: false,max: 5},
    Financial : { type : Number, required: false,max: 5},
    Social : { type : Number, required: false, max: 5},
    Spiritual : { type : Number, required: false, max: 5},
    Physical : { type : Number, required: false, max: 5},
    Intellectual : { type : Number, required: false, max: 5},
});

module.exports = mongoose.model('User', UserSchema);