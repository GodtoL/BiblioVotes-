const sequelize = require('./config/database');
const {User, Book, Tag } = require('./models');
const userRoute = require('./routes/UserRoute.js');
express = require('express');
app = express()
app.use(express.json()); 
require('dotenv').config();
app.use(express.json())

app.get("/", async(req,res) => {
    res.send("hOLA");
})

app.use("/api/user", userRoute)

app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo...");  
})