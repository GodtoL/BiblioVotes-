const sequelize = require('../config/database.js')
const User = require('../models/User.js')

const insert = async (req, res) => {
    try {
        const newUser = await User.create({
            username : req.body.username,
            password : req.body.password
        })

        res.status(201).json({
            message : "Se creo el usuario",
            data : newUser
        })
    } catch (error){
        res.status(500).json({ message : "Hubo un error al crear el usuario"})
        console.log("El error es", error)
    }
}

module.exports = {insert }