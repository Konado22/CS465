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

module.exports = {tripsList, tripsFindByCode};