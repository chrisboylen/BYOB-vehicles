const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, database } = require('../server');

const should = chai.should();

chai.use(chaiHttp);


describe('API ROUTES', () => {
  beforeEach((done) => {
    database.migrate.rollback()
      .then(() => {
        database.migrate.latest()
          .then(() => database.seed.run()
            .then(() => {
              done();
            }));
      });
  });

  describe('GETS', () => {
    it('/api/v1/makes should return all makes', (done) => {
      chai.request(app)
        .get('/api/v1/makes')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.length.should.equal(3);
          // response.body[0].should.have.property('make_name');
          // response.body[0].make_name.should.equal('ferrari');
          // response.body[0].should.have.property('manufacturer');
          // response.body[0].manufacturer.should.equal('ferrari');
          done();
        });
    });

    it('/api/v1/models should return all models', (done) => {
      chai.request(app)
        .get('/api/v1/models')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.length.should.equal(167);
          // response.body[0].should.have.property('model_name');
          // response.body[0].model_name.should.equal('458 Italia');
          // response.body[0].should.have.property('body');
          // response.body[0].body.should.equal('Coupe');
          // response.body[0].should.have.property('engine');
          // response.body[0].engine.should.equal('8');
          // response.body[0].should.have.property('top_speed');
          // response.body[0].should.have.property('horse_power');
          // response.body[0].horse_power.should.equal(578);
          // response.body[0].should.have.property('transmission');
          // response.body[0].transmission.should.equal('7-speed automatic');
          // response.body[0].should.have.property('make_id');
          done();
        });
    });
  });

  describe('POST', () => {
    it('POST /api/v1/makes HAPPY', (done) => {
      chai.request(app)
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

    it('POST /api/v1/makes SAD', (done) => {
      chai.request(app)
        .post('/api/v1/makes')
        .send({
          make_name: 'Cadillac',
        })
        .end((err, response) => {
          const requiredParameter = 'manufacturer';
          response.should.have.status(422);
          response.should.be.json;
          response.body.should.have.property('error');
          response.body.error.should.equal(`Expected format: { make_name: <String>, manufacturer: <String> }. You're missing a '${requiredParameter}' property.`);
          done();
        });
    });

    it('POST /api/v1/models HAPPY', (done) => {
      chai.request(app)
        .post('/api/v1/models')
        .send({
          model_name: '599 GTO',
          body: 'Coupe',
          engine: '12',
          top_speed: '335',
          horse_power: '661',
          transmission: 'Manual',
          make_id: '1',
        })
        .end((err, response) => {
          response.should.have.status(201);
          response.should.be.json;
          response.body.should.have.property('id');
          done();
        });
    });

    it('POST /api/v1/models SAD', (done) => {
      chai.request(app)
        .post('/api/v1/models')
        .send({
          model_name: '599 GTO',
          body: 'Coupe',
          top_speed: '335',
          horse_power: '661',
          transmission: 'Manual',
          make_id: '1',
        })
        .end((err, response) => {
          const requiredParameter = 'engine';
          response.should.have.status(422);
          response.should.be.json;
          response.body.should.have.property('error');
          response.body.error.should.equal(`Expected format: { model_name: <String>, body: <String>, engine: <String>, top_speed: <Integer>, horse_power: <Integer>, transmission: <String>, make_id: <Integer> }. You're missing a '${requiredParameter}' property.`);
          done();
        });
    });
  });

  describe('PUTS', () => {

  });

  describe('DELETE', () => {

  });
});

describe('CLIENTS ROUTES', () => {
  it('GET / HAPPY PATH', (done) => {
    chai.request(app)
      .get('/')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.html;
        done();
      });
  });

  it('GET / SAD PATH', (done) => {
    chai.request(app)
      .get('/SADPATH')
      .end((err, response) => {
        response.should.have.status(404);
        response.should.be.html;
        done();
      });
  });
});
