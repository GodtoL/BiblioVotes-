const sequelize = require("../config/database");
const {DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    hooks: {
        // Hook para encriptar la contraseña antes de guardarla
        beforeCreate: async (user) => {
            if (user.password) {
                user.password = await bcrypt.hash(user.password, 10); 
            }
        },
        beforeUpdate: async (user) => {
            if (user.password) {
                user.password = await bcrypt.hash(user.password, 10); 
            }
        }
    }
});

module.exports = User;