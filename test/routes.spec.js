const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const knex = require('../db/knex');

const should = chai.should();

chai.use(chaiHttp);

beforeEach((done) => {
  knex.migrate.rollback()
    .then(() => {
      knex.migrate.latest()
        .then(() => knex.seed.run()
          .then(() => {
            done();
          }));
    });
});

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
        done();
      });
    });

    it('POST /api/v1/makes HAPPY', (done) => {
      chai.request(server)
        .post('/api/v1/makes')
        .send({
          make_name: 'Cadillac',
          manufacturer: 'GMC',
        })
        .end((err, response) => {
          response.should.have.status(201);
          response.should.be.json;
          response.body.should.have.property('id');
          done();
        });
    });
  });

  it('/api/v1/models should return all models', (done) => {
    chai.request(server)
      .get('/api/v1/models')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(167);
        response.body[0].should.have.property('model_name');
        response.body[0].model_name.should.equal('458 Italia');
        response.body[0].should.have.property('body');
        response.body[0].body.should.equal('Coupe');
        response.body[0].should.have.property('engine');
        response.body[0].engine.should.equal('8');
        response.body[0].should.have.property('top_speed');
        response.body[0].should.have.property('horse_power');
        response.body[0].horse_power.should.equal(578);
        response.body[0].should.have.property('transmission');
        response.body[0].transmission.should.equal('7-speed automatic');
        response.body[0].should.have.property('make_id');
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
