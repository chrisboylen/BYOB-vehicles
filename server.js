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

app.get('/', (request, response) => response.send('Server working'));

app.get('/api/v1/makes', (request, response) => {
  database('makes').select()
    .then(makes => response.status(200).json(makes))
    .catch(error => response.status(500).json({ error: 'Internal server error!' }));
});

app.get('/api/v1/models', (request, response) => {
  database('models').select()
    .then(models => response.status(200).json(models))
    .catch(error => response.status(500).json({ error: 'Internal server error!' }));
});

app.get('/api/v1/makes/:id', (request, response) => {
  database('makes').where('id', request.params.id).select()
    .then((makes) => {
      if (makes.length) {
        return response.status(200).json(makes);
      }
      return response.status(404).json({ error: `Could not find make with id ${request.params.id}` });
    })
    .catch(error => response.status(500).json({ error: 'Internal server error!' }));
});

app.get('/api/v1/models/:id', (request, response) => {
  database('models').where('id', request.params.id).select()
    .then((models) => {
      if (models.length) {
        return response.status(200).json(models);
      }
      return response.status(404).json({ error: `Could not find model with id ${request.params.id}` });
    })
    .catch(error => response.status(500).json({ error: 'Internal server error!' }));
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
    .then(make => response.status(201).json({ id: make[0] }))
    .catch(error => response.status(500).json({ error: 'Internal server error!' }));
});

app.post('/api/v1/models', (request, response) => {
  const {
    model_name,
    body,
    engine,
    top_speed,
    horse_power,
    transmission,
    make_id,
  } = request.body;
  const model = {
    model_name,
    body,
    engine,
    top_speed,
    horse_power,
    transmission,
    make_id,
  };

  for (const requiredParameter of ['model_name', 'body', 'engine', 'top_speed', 'horse_power', 'transmission', 'make_id']) {
    if (!model[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { model_name: <String>, body: <String>, engine: <String>, top_speed: <Integer>, horse_power: <Integer>, transmission: <String>, make_id: <Integer> }. You're missing a '${requiredParameter}' property.` });
    }
  }

  database('models').insert(model, 'id')
    .then(model => response.status(201).json({ id: model[0] }))
    .catch(error => response.status(500).json({ error: 'Internal server error!' }));
});

app.patch('/api/v1/makes/:id', (request, response) => {
  database('makes').where('id', request.params.id).update(request.body)
    .then((updated) => {
      if (!updated) {
        return response.status(422).json({ error: 'Please prove a valid make id.' });
      }
      return response.sendStatus(204);
    })
    .catch(error => response.status(500).json({ error: 'Internal server error!' }));
});

app.patch('/api/v1/models/:id', (request, response) => {
  database('models').where('id', request.params.id).update(request.body)
    .then((updated) => {
      if (!updated) {
        return response.status(422).json({ error: 'Please prove a valid model id.' });
      }
      return response.sendStatus(204);
    })
    .catch(error => response.status(500).json({ error: 'Internal server error!' }));
});

app.delete('/api/v1/makes/:id', (request, response) => {
  database('makes').where('id', request.params.id).del()
    .then((foundMake) => {
      if (!foundMake) {
        return response.status(422).json({ error: 'This make does not exist!' });
      }
      return response.sendStatus(204);
    })
    .catch(error => response.status(500).json({ error: 'Internal server error!' }));
});

app.delete('/api/v1/models/:id', (request, response) => {
  database('models').where('id', request.params.id).del()
    .then((foundModel) => {
      if (!foundModel) {
        return response.status(422).json({ error: 'This model does not exist!' });
      }
      return response.sendStatus(204);
    })
    .catch(error => response.status(500).json({ error: 'Internal server error!' }));
});

app.listen(app.get('port'), () => console.log(`${app.locals.title} is running on ${app.get('port')}.`));

module.exports = { app, database };
