const sequelize = require("../config/database");
const {DataTypes} = require('sequelize')

const Comment = sequelize.define("Comment", {
    content : {
        type : DataTypes.STRING,
        allowNull : false
    },
    votesCount: {
        type : DataTypes.INTEGER,
        defaultValue : 0
    }
})

module.exports = Comment;