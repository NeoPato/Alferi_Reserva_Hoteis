import express from 'express';
import mysql from 'mysql2';
const app = express();
const port = 3001;

app.use(express.json());

// Conectar ao banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Altere para seu usuário do MySQL
  password: 'password', // Altere para sua senha do MySQL
  database: 'my_database' // Altere para seu banco de dados
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para obter itens
app.get('/api/items', (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ items: results });
  });
});

// Rota para adicionar item
app.post('/api/items', (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO items (name) VALUES (?)', [name], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: results.insertId });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});