const mongoose = require('mongoose');

// Load the environment variables from the .env file
require('dotenv').config();

// Use the correct environment variable name (mongodb_url)
mongoose.connect(process.env.mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('Error connecting to database');
});

connection.on('connected', () => {
    console.log('Mongodb connection successful');
});

module.exports = connection;
