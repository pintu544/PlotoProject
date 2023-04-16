const request = require('supertest');
const app = require('./index');
const mongoose = require('mongoose');

describe('Customer API', () => {
  let customerId;

  before((done) => {
    mongoose.connect('mongodb://0.0.0.0:27017/customer')
      .then(() => {
        const customer = new Customer({
          name: 'Pintu',
          email: 'pintu@example.com',
          phone: '123-456-7890'
        });
        return customer.save();
      })
      .then((savedCustomer) => {
        customerId = savedCustomer._id.toString();
        done();
      })
      .catch((err) => done(err));
  });

//   after((done) => {
//     mongoose.connection.db.dropDatabase()
//       .then(() => mongoose.connection.close(() => done()))
//       .catch((err) => done(err));
//   });

  describe('GET /api/customers/:id', () => {
    it('should return a customer by ID', (done) => {
      request(app)
        .get(`/api/customers/${customerId}`)
        .expect(200)
        .expect((res) => {
          const customer = res.body;
          expect(customer.name).to.equal('Pintu');
          expect(customer.email).to.equal('pintu@example.com');
          expect(customer.phone).to.equal('123-456-7890');
        })
        .end(done);
    });
  });

  describe('PUT /api/customers/:id', () => {
    it('should update a customer by ID', (done) => {
      request(app)
        .put(`/api/customers/${customerId}`)
        .send({ name: 'Pintu' })
        .expect(200)
        .expect((res) => {
          const customer = res.body;
          expect(customer.name).to.equal('Pintu');
        })
        .end(done);
    });
  });
});
