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

app.get('/api/v1/models', (request, response) => {
  database('models').select()
    .then((models) => {
      response.status(200).json(models);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;