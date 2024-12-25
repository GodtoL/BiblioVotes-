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

const getUser = async (req, res) => {
    try{const user = await User.findOne({
        where : {id:req.params.id}
    })
    if (!user){
        res.status(404).json({message : "No se encontro al usuario con id ", id})
    }
    res.status(200).json(user)

    } catch (error){
        res.status(500).json({message : "Hubo un error al recuperar el usuario"})

    }
}
module.exports = {insert, getUser }