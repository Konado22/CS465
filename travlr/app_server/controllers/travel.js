//var fs = require("fs");
//var trips = JSON.parse(fs.readFileSync("./data/trips.json",'utf8'));
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};
//Get travel view
const travel = async (req, res, next) => {

    await fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            let message = null;
            if (!(json instanceof Array)) {
                message = 'API ERROR';
                json = [];
            }
            else {
                if (!json.length) {
                    message = 'No trips exists in our Database';
                }
            }
            res.render('travel', { title: 'Travlr Getaways', trips: json });
        })
        .catch(err => res.status(500).send(err.message));

}

module.exports = { travel };