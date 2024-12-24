const sequelize = require("../config/database");
const {DataTypes} = require('sequelize')
const Tag = require("./Tag.js")

const Book = sequelize.define('Book', {
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    description : {
        type: DataTypes.STRING,
        allowNull: false
    },

    votes_count : {
        type: DataTypes.INTEGER,
    }
})


module.exports = Book;