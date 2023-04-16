const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/customer');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error conection on mongodb'));

db.once('open', function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;