const { Sequelize } = require('sequelize');

// Configuración de la base de datos PostgreSQL
const sequelize = new Sequelize('topics', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
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