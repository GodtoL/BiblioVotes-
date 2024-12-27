const sequelize = require('../config/database');
const  Book  = require('./Book');
const Tag = require('./Tag');
const User = require('./User')
const Comment = require('./Comment')

// Relación muchos a muchos
const BookTag = sequelize.define('BookTag', {});

Book.belongsToMany(Tag, { through: BookTag, as: 'tags' });
Tag.belongsToMany(Book, { through: BookTag, as: 'books' });


const UserComment = sequelize.define("UserComment", {});
User.belongsToMany(Comment, { through : UserComment});
Comment.belongsToMany(User, { through : UserComment});

const BookComment = sequelize.define("BookComment", {});
Book.belongsToMany(Comment, { through : BookComment});
Comment.belongsToMany(Book, { through : BookComment});

async function syncDatabase() {
    try {
        await sequelize.sync({alter : true}); // Cambia a `true` para recrear tablas
        console.log('Tablas sincronizadas correctamente.');
    } catch (error) {
        console.error('Error al sincronizar las tablas:', error);
    }
}

syncDatabase();
module.exports = { sequelize, Book, Tag, BookTag, Comment, User, UserComment, BookComment };
