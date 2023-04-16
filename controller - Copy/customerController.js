const Customer = require("../model/customer");
const Joi = require('joi')

// 
exports.getCustomerById = async (req, res) => {
    try { 
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).send("Customer not found");
        res.send(customer);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
}

// Define the validation schema
const customerValidationSchema = Joi.object({
    name: Joi.string().min(5).max(50),
    email: Joi.string().email().min(5).max(255),
    phone: Joi.string().min(5).max(50),
});

// Update customer information by ID
exports.updateCustomerById = async (req, res) => {
    console.log("req.body: ", req.body);
    try {
      const { error } = customerValidationSchema.validate(req.body);
      if (error) return res.status(400).send(error.details[0].message);
  
      const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!customer) return res.status(404).send("Customer not found");
      res.send(customer);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    }
}


// create a customer
exports.createCustomer = async(req,res) => {
    console.log(req.body);
    const obj = {
        name : 'yashaswi',
        email:'yash@gmail.com',
        phone:'2345678'
    }
    try {
        const customer = await Customer.create(obj)
        if(!customer) {
            return res.status(400).json({message: "customer creation error!!!"})
        }
        return res.status(200).json({message: "customer added successfully!!!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"})
    }
}

// read or fetch all customer
exports.getCustomer = async(req,res) => {
    try {
        const customer = await Customer.find()
        if(!customer){
            return res.status(400).json({message: "customer fetching error!!!"})
        }
        return res.status(200).json({customer: customer,message: "customer fetch successfully!!!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"})
    }
}



