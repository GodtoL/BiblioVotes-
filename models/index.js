const sequelize = require('../config/database');
const Book = require('./book');
const Tag = require('./Tag');

// Relación muchos a muchos
const BookTag = sequelize.define('BookTag', {});
Book.belongsToMany(Tag, { through: BookTag });
Tag.belongsToMany(Book, { through: BookTag });

async function syncDatabase() {
    try {
        await sequelize.sync({ force: false }); // Cambia a `true` para recrear tablas
        console.log('Tablas sincronizadas correctamente.');
    } catch (error) {
        console.error('Error al sincronizar las tablas:', error);
    }
}

syncDatabase();
module.exports = { Book, Tag, BookTag };
