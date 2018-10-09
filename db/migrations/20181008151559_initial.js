exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('makes', (table) => {
    table.increments('id').primary();
    table.string('make_name');
    table.string('manufacturer');

    table.timestamps(true, true);
  }),

  knex.schema.createTable('models', (table) => {
    table.increments('id').primary();
    table.string('model_name');
    table.string('body');
    table.string('engine');
    table.integer('top_speed');
    table.integer('horse_power');
    table.string('transmission');
    table.integer('make_id').unsigned();
    table.foreign('make_id')
      .references('make_id');

    table.timestamps(true, true);
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('makes'),
  knex.schema.dropTable('models'),
]);
