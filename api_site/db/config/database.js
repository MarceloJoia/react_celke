// Incluir o arquivo com as variáveis de ambiente
require('dotenv').config();

// Exportar as credenciais do banco de dados
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": "root",
    "password": "zaq1xsw2",
    "database": "celke",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "zaq1xsw2",
    "database": "celke",
    "host": "localhost",
    "dialect": "mysql"
  }
}
