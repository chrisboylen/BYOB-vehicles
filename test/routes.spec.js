const chai = require('chai');

const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('API ROUTES', () => {
  it.only('/api/v1/makes should return all makes', (done) => {
    chai.request(server)
      .get('/api/v1/makes')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(3);
        response.body[0].should.have.property('make_name');
        response.body[0].make_name.should.equal('Turing');
        response.body[0].should.have.property('manufacturer');
        response.body[0].manufacturer.should.equal('FE');
        response.body[0].should.have.property('created_at');
        response.body[0].created_at.should.equal(true);
        response.body[0].should.have.property('updated_at');
        response.body[0].updated_at.should.equal(true);
        done();
      });
  });

  it('POST /api/v1/students HAPPY', (done) => {
    chai.request(server)
      .post('/api/v1/students')
      .send({
        lastname: 'Jaeger',
        program: 'FE',
        enrolled: true,
      })
      .end((err, response) => {
        response.should.have.status(201);
        response.should.be.json;
        response.body.should.have.property('message');
        response.body.message.should.equal('Student successfully added');
        done();
      });
  });

  it('POST /api/v1/students SAD', (done) => {
    chai.request(server)
      .post('/api/v1/students')
      .send({
        lastname: 'Jaeger',
        enrolled: true,
      })
      .end((err, response) => {
        response.should.have.status(422);
        response.should.be.json;
        response.body.should.have.property('error');
        response.body.error.should.equal('You are missing a required parameter');
        done();
      });
  });
});

describe('CLIENTS ROUTES', () => {
  it('GET / HAPPY PATH', (done) => {
    chai.request(server)
      .get('/')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.html;
        done();
      });
  });

  it('GET / SAD PATH', (done) => {
    chai.request(server)
      .get('/SADPATH')
      .end((err, response) => {
        response.should.have.status(404);
        response.should.be.html;
        done();
      });
  });
});
