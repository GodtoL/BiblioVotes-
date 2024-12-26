const userRoute = require('./routes/UserRoute.js');
const bookRoute = require('./routes/bookRoute.js')
const tagRoute = require('./routes/TagRoute.js')
express = require('express');
app = express()
app.use(express.json()); 
require('dotenv').config();
app.use(express.json())

app.use("/api/user", userRoute)
app.use("/api/book", bookRoute)
app.use("/api/tag", tagRoute)

app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo...");  
})