const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho completo para o arquivo do banco de dados e nome do arquivo
const dbPath = path.resolve(__dirname, 'DB', 'database.db');

// Abre a conexão com o banco de dados (ou cria o arquivo do banco de dados se não existir)
const db = new sqlite3.Database(dbPath);

// Defina a consulta SQL para criar uma tabela chamada 'users'
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        cpf TEXT UNIQUE,
        email TEXT UNIQUE,
        date_of_birth DATE,
        password TEXT,
        phone TEXT
    )
`;

// Executa a consulta para criar a tabela
db.run(createTableQuery, function(err) {
    if (err) {
        return console.error('Erro ao criar a tabela:', err.message);
    }
    console.log('Tabela criada com sucesso');
});

// Fecha a conexão com o banco de dados quando terminar
db.close();
