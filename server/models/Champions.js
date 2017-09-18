var mongoose = require('mongoose');

//connect to a local instance of the db which stores champ splashes
mongoose.connect('mongodb://localhost/champsDB');

//schema for storing champions
var championSchema = new mongoose.Schema({
    'id': {
        type: Number,
        index: true,
        required: true
    },
    'name': {
        type: String,
        index: true,
        required: true
    },
    'splashURL': {
        type: String,
        index: true,
        required: true
    },
    'champType': {
        type: [String],
        index: true,
        required: true
    }
});

module.exports = mongoose.model("Champions", championSchema);
