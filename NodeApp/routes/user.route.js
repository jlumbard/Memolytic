const express = require('express');
const router = express.Router();

// Require the controllers, adapted from the tutorial
const user_controller = require('../controllers/user.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', user_controller.test);


router.get('/displayall', user_controller.home);
router.get('/script.js', user_controller.script);

//5 - Return all users
router.get('', user_controller.user_all);
//1 - Create a user: post the 4 values
router.post('/create', user_controller.user_create);
//6 - get a user by ID
router.get('/:id', user_controller.user_details);
//2, 3 -update a user's details - to be used to update quantity and loan period
//would be curious if its preferred to have two methods for this, it is for SQL. 
router.put('/:id/update', user_controller.user_update);
//4 - Delete an item by ID
router.delete('/:id/delete', user_controller.user_delete);

module.exports = router;