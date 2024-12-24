const sequelize = require("../config/database");
const {DataTypes} = require('sequelize')

const Book = sequelize.define('Book', {
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    author : {
        type : DataTypes.STRING,
        defaultValue : "Anònimo"
    },
    description : {
        type: DataTypes.STRING,
        allowNull: false
    },

    votes_count : {
        type: DataTypes.INTEGER,
        defaultValue : 0
    }
})


module.exports = Book;