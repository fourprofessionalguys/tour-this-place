module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:Safe@localhost/airbnb_clone_tour',
    migrations: {
      directory: __dirname + '/server/database/migrations',
      seeds: __dirname + '/server/'
    }
  },
  production: {
    client: 'pg',
    connection: 'http://airbnb-tour.c13ufv3uqugk.us-west-1.rds.amazonaws.com/',
    migrations: {
      directory: __dirname + '/server/database/migrations',
      seeds: __dirname + '/server/seeds/seed.js'
    }
  }
};