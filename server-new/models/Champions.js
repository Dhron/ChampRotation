var mongoose = require('mongoose');

//connect to a local instance of the db which stores champ splashes
mongoose.connect('mongodb://localhost/champsDB');

//schema for storing champions
var championSchema = new mongoose.Schema({
    'id': {
        type: int,
        index: true,
        required: true
    },
    'splashURL': {
        type: string,
        index: true,
        required: true
    },
    'champType': {
        type: string,
        index: true,
        required: true
    }
});

