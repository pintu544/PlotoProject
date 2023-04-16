RESTful API for Customer Information
This project is a Node.js-based RESTful API that allows the frontend team to retrieve and update customer information. The API uses the Express.js framework and connects to a MongoDB database using the Mongoose ORM.


Requirements
The following requirements must be met by the API:
Allow the frontend team to retrieve customer information by sending a GET request to the endpoint /api/customers/:id, where id is the ID of the customer.
Allow the frontend team to update customer information by sending a PUT request to the endpoint /api/customers/:id, where id is the ID of the customer. The request should contain a JSON object with the updated customer information.
Validate incoming requests to ensure that the required fields are present and that the data is in the correct format. A validation library like Joi should be used to handle validation.
Connect to a MongoDB database to store and retrieve customer information using the Mongoose ORM.
Handle errors gracefully and return meaningful error messages to the frontend team.
Write unit tests for the code using a testing library like Jest. The tests should cover all main functionality of the API.
Use Git for version control and push the code to a public repository on GitHub.


Installation
To install the API, follow these steps:
Clone the repository from GitHub
Run npm install to install all dependencies
Create a .env file based on the example .env.example file and provide your own values for the environment variables
Run npm start to start the server
Usage
Once the server is running, the following endpoints are available:
GET /api/customers/:id
Retrieves customer information for the specified ID. Returns a JSON object with the customer information or an error message if the ID is not found.
PUT /api/customers/:id
Updates customer information for the specified ID. Expects a JSON object with the updated customer information in the request body. Returns a JSON object with the updated customer information or an error message if the ID is not found or the validation fails.
Testing
To run the tests, use the command npm test. This will run all tests located in the tests directory.

