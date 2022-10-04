const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://pedrofurns:admin1@cluster0.y9tk5.mongodb.net/annotations?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;