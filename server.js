const express = require('express')
const JokeRoutes = require('./routes/jokes.routes')
const app = express()

require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

JokeRoutes(app);

app.listen(8080, () => {
    console.log('Server ON')
})