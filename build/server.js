const { Client } = require('pg');
const config = require('./config');

const client = new Client({
  user: config.databaseUser,
  host: config.databaseHost,
  database: config.databaseName,
  password: config.databasePassword,
  port: 5432, // padrão para PostgreSQL
});

async function connect() {
  await client.connect();
  console.log('Conectado ao banco de dados PostgreSQL');
}

connect();
