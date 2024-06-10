const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/joka_db')
    .then(() => {
        console.log('Successfully connected to server')
    })
    .catch((error) => {
        console.log(`Something happened: ${error}`)
    })