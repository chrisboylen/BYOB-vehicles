const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(express.static('public/'));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB Vehicles';

app.get('/', (request, response) => {
  response.send('Server working');
});

app.get('/api/v1/makes', (request, response) => {
  database('makes').select()
    .then((makes) => {
      response.status(200).json(makes);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/makes', (request, response) => {
  const { make_name, manufacturer } = request.body;
  const make = {
    make_name,
    manufacturer,
  };

  for (const requiredParameter of ['make_name', 'manufacturer']) {
    if (!make[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { make_name: <String>, manufacturer: <String> }. You're missing a '${requiredParameter}' property.` });
    }
  }

  database('makes').insert(make, 'id')
    .then((make) => {
      response.status(201).json({ id: make[0] });
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/models', (request, response) => {
  database('models').select()
    .then((models) => {
      response.status(200).json(models);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/models', (request, response) => {
  const { 
    model_name, 
    body,
    engine, 
    top_speed, 
    horse_power, 
    transmission, 
    make_id 
  } = request.body;
  const model = {
    model_name,
    body,
    engine,
    top_speed,
    horse_power,
    transmission,
    make_id
  };

  for (let requiredParameter of ['model_name', 'body', 'engine', 'top_speed', 'horse_power', 'transmission', 'make_id']) {
    if (!model[requiredParameter]) {
      return response 
        .status(422)
        .send({ error: `Expected format: { model_name: <String>, body: <String>, engine: <String>, top_speed: <Integer>, horse_power: <Integer>, transmission: <String>, make_id: <Integer> }. You're missing a '${requiredParameter}' property.` });
    }
  }

  database('models').insert(model, 'id')
    .then(model => {
      response.status(201).json(model);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
