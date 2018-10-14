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
          response.body[0].should.have.property('make_name');
          response.body[0].should.have.property('manufacturer');
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
          response.body[0].should.have.property('model_name');
          response.body[0].should.have.property('body');
          response.body[0].should.have.property('engine');
          response.body[0].should.have.property('top_speed');
          response.body[0].should.have.property('horse_power');
          response.body[0].should.have.property('transmission');
          response.body[0].should.have.property('make_id');
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

  describe('PATCH', () => {
    it('PATCH /api/v1/makes/:id HAPPY', (done) => {
      const firstMake = 1;
      chai.request(app)
        .patch(`/api/v1/makes/${firstMake}`)
        .send({
          make_name: 'Ford',
        })
        .end((err, response) => {
          response.should.have.status(204);
          done();
        });
    });

    it('PATCH /api/v1/makes/:id SAD', (done) => {
      const notAMake = 55;
      chai.request(app)
        .patch(`/api/v1/makes/${notAMake}`)
        .send({
          make_name: 'Ford',
        })
        .end((err, response) => {
          response.should.have.status(422);
          done();
        });
    });

    it('PATCH /api/v1/makes/:id VERY SAD', (done) => {
      const firstMAke = 1;
      chai.request(app)
        .patch(`/api/v1/makes/${firstMAke}`)
        .send()
        .end((err, response) => {
          response.should.have.status(500);
          done();
        });
    });

    it('PATCH /api/v1/models/:id HAPPY', (done) => {
      const firstModel = 1;
      chai.request(app)
        .patch(`/api/v1/models/${firstModel}`)
        .send({
          top_speed: 123,
        })
        .end((err, response) => {
          response.should.have.status(204);
          done();
        });
    });

    it('PATCH /api/v1/models/:id SAD', (done) => {
      const notAModel = 1234234;
      chai.request(app)
        .patch(`/api/v1/models/${notAModel}`)
        .send({
          top_speed: 234,
        })
        .end((err, response) => {
          response.should.have.status(422);
          done();
        });
    });

    it('PATCH /api/v1/models/:id VERY SAD', (done) => {
      const firstModel = 1;
      chai.request(app)
        .patch(`/api/v1/models/${firstModel}`)
        .send()
        .end((err, response) => {
          response.should.have.status(500);
          done();
        });
    });
  });

  describe('DELETE', () => {
    it('DELETE /api/v1/makes/:id HAPPY', (done) => {
      const firstMake = 1;
      chai.request(app)
        .delete(`/api/v1/makes/${firstMake}`)
        .end((err, response) => {
          response.should.have.status(204);
          done();
        });
    });

    it('DELETE /api/v1/makes/:id SAD', (done) => {
      const notAMake = 1234234;
      chai.request(app)
        .delete(`/api/v1/makes/${notAMake}`)
        .end((err, response) => {
          response.should.have.status(422);
          done();
        });
    });

    it('DELETE /api/v1/models/:id HAPPY', (done) => {
      const firstModel = 1;
      chai.request(app)
        .delete(`/api/v1/models/${firstModel}`)
        .end((err, response) => {
          response.should.have.status(204);
          done();
        });
    });

    it('DELETE /api/v1/models/:id SAD', (done) => {
      const notAModel = 1234234;
      chai.request(app)
        .delete(`/api/v1/models/${notAModel}`)
        .end((err, response) => {
          response.should.have.status(422);
          done();
        });
    });
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
