/* eslint-disable */

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/byob_vehicles',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev',
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/byob_vehicles_test',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/test',
    },
    useNullAsDefault: true,
  },
};
