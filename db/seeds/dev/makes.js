const cleanedCarData = require('../../mockData/mockData');

const createMake = (knex, make) => {
  return knex('makes').insert({
    make_name: make.make_name,
    manufacturer: make.manufacturer
  }, 'id')
  .then(makeId => {
    let modelPromises = [];

    make.models.forEach(model => {
      modelPromises.push(
        createModel(knex, {
          ...model,
          make_id: makeId[0]
        })
      );
    });

    return Promise.all(modelPromises);
  })
};

const createModel = (knex, model) => {
  return knex('models').insert(model)
};

exports.seed = function(knex, Promise) {
  return knex('makes').del()
    .then(() => knex('models').del())
    .then(() => {
      let makePromises = [];

      cleanedCarData.forEach(make => {
        makePromises.push(createMake(knex, make));
      });

      return Promise.all(makePromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
