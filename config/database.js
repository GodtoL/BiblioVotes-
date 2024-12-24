const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuración de la base de datos PostgreSQL
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
});

// Conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Base de datos PostgreSQL conectada');
    })
    .catch(err => {
        console.error('Error conectando a la base de datos', err);
    });

module.exports = sequelize;