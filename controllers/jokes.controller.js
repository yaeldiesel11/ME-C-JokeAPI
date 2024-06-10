const Joke = require('./../models/jokes.model')

module.exports = {
    handleError: (res, error) => {
        return res
            .status(500)
            .json({ message: 'Something happened: ', error });
    },
    findAllJokes: (req, res) => {
        return Joke
            .find()
            .then((allJokes) => {
                return res
                    .status(200)
                    .json({ jokes: allJokes })
            })
            .catch(error => handleError(res, error));
    },
    findOneJoke: (req, res) => {
        return Joke
            .find({ _id: req.params.id })
            .then((oneJoke) => {
                return res
                    .status(200)
                    .json({ joke: oneJoke })
            })
            .catch(error => handleError(res, error));
    },
    createJoke: (req, res) => {
        return Joke
            .create(req.body)
            .then((newJoke) => {
                return res
                    .status(200)
                    .json({ joke: newJoke })
            })
            .catch(error => handleError(res, error));
    },
    updateJoke: (req, res) => {
        return Joke
            .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then((updatedJoke) => {
                return res
                    .status(200)
                    .json({ joke: updatedJoke })
            })
            .catch(error => handleError(res, error));
    },
    deleteJoke: (req, res) => {
        return Joke
            .findOneAndDelete({ _id: req.params.id })
            .then((deletedJoke) => {
                console.log('Deleted joke: ', deletedJoke)
                return res
                    .status(204)
                    .end();
            })
            .catch(error => handleError(res, error));
    }
}