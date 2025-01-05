const sequelize = require('../config/database');
const  Book  = require('./Book');
const Tag = require('./Tag');
const User = require('./User')
const Comment = require('./Comment')

// Tabla intermedia BookTag (N:M entre Book y Tag)
const BookTag = sequelize.define('BookTag', {});
Book.belongsToMany(Tag, { through: BookTag, as: 'tags' });
Tag.belongsToMany(Book, { through: BookTag, as: 'books' });

// Relación User ↔ Comment (1:N)
Comment.belongsTo(User, { as: 'user', foreignKey: 'userId' });
User.hasMany(Comment, { as: 'comments', foreignKey: 'userId' });

// Relación Book ↔ Comment (1:N)
Comment.belongsTo(Book, { as: 'book', foreignKey: 'bookId' });
Book.hasMany(Comment, { as: 'comments', foreignKey: 'bookId' });


async function syncDatabase() {
    try {
        await sequelize.sync({alter : true}); // Cambia a `true` para recrear tablas
        console.log('Tablas sincronizadas correctamente.');
    } catch (error) {
        console.error('Error al sincronizar las tablas:', error);
    }
}

syncDatabase();
module.exports = { sequelize, Book, Tag, BookTag, Comment, User };
