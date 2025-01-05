const { Sequelize } = require('sequelize');
require('dotenv').config();

const databaseUrl = process.env.DATABASE_URL;

// Configuración de Sequelize para conectarse usando la URL
const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = sequelize;

// Conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Base de datos PostgreSQL conectada');
    })
    .catch(err => {
        console.error('Error conectando a la base de datos', err);
    });

module.exports = sequelize;