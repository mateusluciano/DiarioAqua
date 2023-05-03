import { Client } from 'pg';
import config from 'config';

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
    const result = await client.query('SELECT * FROM teste');
    res.send(result.rows);
    console.log(res,result)
  } catch (error) {
    console.error('Erro ao buscar usuários no banco de dados', error);
    res.status(500).send('Erro ao buscar usuários no banco de dados');
  } finally {
    await client.end();
  }
});
