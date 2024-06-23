const express = require('express');
const router = express.Router();
const {expressjwt: jwt} = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256']  
})
//import trip controller and implement 
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
//routes
router.route('/register').post(authController.register);
router.route('/login').post(authController.login);
router.route('/trips').get(tripsController.tripsList).post(auth, tripsController.tripsAddTrip);//get method and post method
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode).put(auth, tripsController.tripsUpdateTrip);//get by _id and update by _id

module.exports = router;