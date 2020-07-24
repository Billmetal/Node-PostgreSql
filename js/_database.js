const pg = require('pg')

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'database',
  password: 'senha database',
  port: 5432,
})

module.exports = client
