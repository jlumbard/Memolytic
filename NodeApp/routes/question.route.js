const express = require('express');
const router = express.Router();

// Require the controllers, adapted from the tutorial
const question_controller = require('../controllers/question.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', question_controller.test);


router.get('/displayall', question_controller.home);
router.get('/script.js', question_controller.script);

//5 - Return all questions
router.get('', question_controller.question_all);
//1 - Create a question: post the 4 values
router.post('/create', question_controller.question_create);
//6 - get a question by ID
router.get('/:id', question_controller.question_details);
//2, 3 -update a question's details - to be used to update quantity and loan period
//would be curious if its preferred to have two methods for this, it is for SQL. 
// router.put('/:id/update', question_controller.question_update);
//4 - Delete an item by ID
router.delete('/:id/delete', question_controller.question_delete);

module.exports = router;