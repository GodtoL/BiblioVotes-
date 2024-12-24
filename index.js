const sequelize = require('./config/database');
const { Book, Tag } = require('./models');
express = require('express')
require('dotenv').config();
sequelize
app = express()
app.use(express.json())

app.get("/", async(req,res) => {
    res.send("hOLA");
})


app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo...");  
})