
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome file</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="restful-api-for-customer-information">RESTful API for Customer Information</h1>
<p>This project is a Node.js-based RESTful API that allows the frontend team to retrieve and update customer information. The API uses the Express.js framework and connects to a MongoDB database using the Mongoose ORM.</p>
<h2 id="requirements">Requirements</h2>
<p>The following requirements must be met by the API:</p>
<ul>
<li>Allow the frontend team to retrieve customer information by sending a GET request to the endpoint /api/customers/:id, where id is the ID of the customer.</li>
<li>Allow the frontend team to update customer information by sending a PUT request to the endpoint /api/customers/:id, where id is the ID of the customer. The request should contain a JSON object with the updated customer information.</li>
<li>Validate incoming requests to ensure that the required fields are present and that the data is in the correct format. A validation library like Joi should be used to handle validation.</li>
<li>Connect to a MongoDB database to store and retrieve customer information using the Mongoose ORM.</li>
<li>Handle errors gracefully and return meaningful error messages to the frontend team.</li>
<li>Write unit tests for the code using a testing library like Jest. The tests should cover all main functionality of the API.</li>
<li>Use Git for version control and push the code to a public repository on GitHub.</li>
</ul>
<h2 id="installation">Installation</h2>
<p>To install the API, follow these steps:</p>
<ol>
<li>Clone the repository from GitHub</li>
<li>Run  <code>npm install</code>  to install all dependencies</li>
<li>Create a  <code>.env</code>  file based on the example  <code>.env.example</code>  file and provide your own values for the environment variables</li>
<li>Run  <code>npm start</code>  to start the server</li>
</ol>
<h2 id="usage">Usage</h2>
<p>Once the server is running, the following endpoints are available:</p>
<h3 id="get-apicustomersid">GET /api/customers/:id</h3>
<p>Retrieves customer information for the specified ID. Returns a JSON object with the customer information or an error message if the ID is not found.</p>
<h3 id="put-apicustomersid">PUT /api/customers/:id</h3>
<p>Updates customer information for the specified ID. Expects a JSON object with the updated customer information in the request body. Returns a JSON object with the updated customer information or an error message if the ID is not found or the validation fails.</p>
<h2 id="testing">Testing</h2>
<p>To run the tests, use the command <code>npm test</code>. This will run all tests located in the <code>tests</code> directory.</p>
</div>
</body>

</html>
