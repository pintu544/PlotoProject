const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({ 
  name: {
    type: String,
    // required: true,
    minlength: 5,
    maxlength: 50,
  }, 
  email: {
    type: String,
    // required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  phone: {
    type: String,
    // required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer