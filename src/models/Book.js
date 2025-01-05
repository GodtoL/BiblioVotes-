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
    shortDescription :{
        type : DataTypes.STRING(100),
        allowNull: false
    },
    description : {
        type: DataTypes.STRING(500),
        allowNull: false
    },

    votesCount : {
        type: DataTypes.INTEGER,
        defaultValue : 0
    }
})

module.exports = Book;
