const sequelize = require('./config/database');
const {User, Book, Tag } = require('./models');

express = require('express');
app = express()
app.use(express.json()); 
require('dotenv').config();
app = express()
app.use(express.json())

app.get("/", async(req,res) => {
    res.send("hOLA");
})

app.post("/create-user", async(req,res) => {
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
})

app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo...");  
})