const sequelize = require("../config/database");
const {DataTypes} = require('sequelize')

const Comment = sequelize.define("Comment", {
    content : {
        type : DataTypes.STRING,
        allowNull : false
    },
    created_at : {
        type : DataTypes.DATE,
        defaultValue : sequelize.NOW,
    }
})

module.exports = Comment;