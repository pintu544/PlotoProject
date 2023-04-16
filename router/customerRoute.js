const express = require('express')
const { createCustomer, getCustomer, getCustomerById, updateCustomerById } = require('../controller/customerController')
const route = express.Router()


// create project
route.post('/customers', createCustomer)
// fetch all project
route.get('/customers', getCustomer)
// fetch customer by id
route.get('/customers/:id', getCustomerById)
// // delete project
// route.delete('/deleteProject/:id', deleteProject)
// update project
route.put('/customers/:id',updateCustomerById)


module.exports = route