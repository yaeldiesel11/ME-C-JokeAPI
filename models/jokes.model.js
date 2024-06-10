const mongoose = require('mongoose')

const jokeSchema = mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
})

const Joke = mongoose.model('jokes', jokeSchema);

module.exports = Joke;