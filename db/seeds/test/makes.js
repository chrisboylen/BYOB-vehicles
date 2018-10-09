const cleanedCarData = require('../../mockData/mockData');

const createModel = (knex, model) => knex('models').insert(model);

const createMake = (knex, make) => knex('makes').insert({
  make_name: make.make_name,
  manufacturer: make.manufacturer,
}, 'id')
  .then((makeId) => {
    const modelPromises = [];

    make.models.forEach((model) => {
      modelPromises.push(
        createModel(knex, {
          ...model,
          make_id: makeId[0],
        }),
      );
    });

    return Promise.all(modelPromises);
  });

exports.seed = (knex, Promise) => knex('makes').del()
  .then(() => knex('models').del())
  .then(() => {
    const makePromises = [];

    cleanedCarData.forEach((make) => {
      makePromises.push(createMake(knex, make));
    });

    return Promise.all(makePromises);
  })
  .catch(error => console.log(`Error seeding data: ${error}`));
