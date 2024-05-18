const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log('Database connection successful...');
    } catch (err) {
        console.error('Error while connecting to the database:', err);
        process.exit(1); 
    }
};

module.exports = connectDB;
