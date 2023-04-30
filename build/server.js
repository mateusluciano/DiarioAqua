const { Client } = require('pg');
const config = require('./config');

const client = new Client({
  user: config.databaseUser,
  host: config.databaseHost,
  database: config.databaseName,
  password: config.databasePassword,
  port: 5432, // padrão para PostgreSQL
});

app.get('/', async (req, res) => {
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM tempo_user');
    res.send(result.rows);
  } catch (error) {
    console.error('Erro ao buscar usuários no banco de dados', error);
    res.status(500).send('Erro ao buscar usuários no banco de dados');
  } finally {
    await client.end();
  }
});
