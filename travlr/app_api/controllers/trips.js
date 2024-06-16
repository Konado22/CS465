const mongoose = require('mongoose');
const Trip = require('../modules/travlr');
const { resolve } = require('path');
const Model = mongoose.model('trips');

//get request to the server
const tripsList = async(req,res) => {
    const response = await Model
    .find({})
    .exec();

    if (!response) {
        //catch no data returned
        return res
        .status(404)
        .json(err);
    }
    else {
        return res
        .status(200)
        .json(response);
    }
};

const tripsFindByCode = async(req,res) => {
    const response = await Model
    .find({'code' : req.params.tripCode})
    .exec();

    if (!response) {
        //catch no data returned
        return resolve
        .status(404)
        .json(err);
    }
    else {
        return res
        .status(200)
        .json(response);
    }
};
//post request
const tripsAddTrip = async (req,res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });
    const q = await newTrip.save();

    if(!q) {
        return res.status(400).json(err);
    }
    else {
        return res.status(200).json(q);
    }
};
//put request
const tripsUpdateTrip = async (req,res) => {
    const q = await Model
    .findOneAndUpdate({'code': req.params.tripCode}, {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    }).exec();

    if (!q) {
        return res.status(400).json(err);
    }
    else {
        return res.status(201).json(q);
    }
};

module.exports = {tripsList, tripsFindByCode, tripsAddTrip, tripsUpdateTrip};