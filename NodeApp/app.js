// app.js


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const question = require('./routes/question.route'); // Imports routes for the question
const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, '/../views')));

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://Nick:Katsiris@cluster0-pyhe1.gcp.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/question', question);

let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});