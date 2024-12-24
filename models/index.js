const sequelize = require('../config/database');
const Book = require('./book');
const Tag = require('./Tag');
const User = require('./User')
const Comment = require('./Comment')

// Relación muchos a muchos
const BookTag = sequelize.define('BookTag', {});
Book.belongsToMany(Tag, { through: BookTag });
Tag.belongsToMany(Book, { through: BookTag });

const UserComment = sequelize.define("UserComment", {});
User.belongsToMany(Comment, { through : UserComment});
Comment.belongsToMany(User, { through : UserComment});

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
