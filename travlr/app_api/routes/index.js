const express = require('express');
const router = express.Router();
//import trip controller and implement 
const tripsController = require('../controllers/trips');
//routes
router.route('/trips').get(tripsController.tripsList);//get method
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);

module.exports = router;