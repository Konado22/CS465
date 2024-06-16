const express = require('express');
const router = express.Router();
//import trip controller and implement 
const tripsController = require('../controllers/trips');
//routes
router.route('/trips').get(tripsController.tripsList).post(tripsController.tripsAddTrip);//get method and post method
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode).put(tripsController.tripsUpdateTrip);//get by _id and update by _id

module.exports = router;