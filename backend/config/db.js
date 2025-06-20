const mongoose = require('mongoose');

const connectToDatabase = async (url) =>{
    await mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });
}

module.exports =  {
    connectToDatabase
};