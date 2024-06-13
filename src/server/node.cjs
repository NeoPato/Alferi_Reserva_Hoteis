const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;

app.use(express.json());

const db = new sqlite3.Database('./DB/database.db');

app.post('/api/cadastrar', (req, res) => {
    const { name, cpf, email, dateOfBirth, telefone, senha } = req.body;

    const insertQuery = `INSERT INTO users (name, cpf, email, date_of_birth, phone, password) VALUES (?, ?, ?, ?, ?, ?)`;
    db.run(insertQuery, [name, cpf, email, dateOfBirth, telefone, senha], function(err) {
        if (err) {
            return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
        res.status(200).json({ message: 'Usuário cadastrado com sucesso' });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
