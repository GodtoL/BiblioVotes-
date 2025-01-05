const userRoute = require('./routes/UserRoute.js');
const bookRoute = require('./routes/BookRoute.js')
const tagRoute = require('./routes/TagRoute.js')
const cors = require('cors');
const commentRoute = require('./routes/CommentRoute.js')
const express = require('express');
const { sequelize, Book, Tag, BookTag } = require('./models/index.js'); 
app = express()
app.use(express.json()); 
require('dotenv').config()
const allowedOrigins = [ 'http://127.0.0.1:5500', 'http://localhost:5173'];
app.use(cors({ origin: allowedOrigins }));


app.use("/api/user", userRoute)
app.use("/api/book", bookRoute)
app.use("/api/tag", tagRoute)
app.use("/api/comment", commentRoute)

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}...`);
});
