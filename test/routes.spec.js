const chai = require('chai');

const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('API ROUTES', () => {
  it('/api/v1/makes should return all makes', (done) => {
    chai.request(server)
      .get('/api/v1/makes')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(3);
        response.body[0].should.have.property('make_name');
        response.body[0].make_name.should.equal('ferrari');
        response.body[0].should.have.property('manufacturer');
        response.body[0].manufacturer.should.equal('ferrari');
        response.body[0].should.have.property('created_at');
        response.body[0].created_at.should.equal('2018-10-09T14:35:15.492Z');
        response.body[0].should.have.property('updated_at');
        response.body[0].updated_at.should.equal('2018-10-09T14:35:15.492Z');
        done();
      });
  });
});

describe('CLIENTS ROUTES', () => {

});
