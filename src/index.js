const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoute = require('./routes/UserRoute.js');
const bookRoute = require('./routes/BookRoute.js');
const tagRoute = require('./routes/TagRoute.js');
const commentRoute = require('./routes/CommentRoute.js');
const { sequelize, Book, Tag, BookTag } = require('./models/index.js');

dotenv.config();
const app = express();

// Configurar middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar CORS
const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://localhost:5173',
  'https://tuusuario.github.io', 
  'https://bibliovotes-production.up.railway.app' 
];
app.use(cors({ origin: allowedOrigins }));

// Configurar rutas
app.use("/api/user", userRoute);
app.use("/api/book", bookRoute);
app.use("/api/tag", tagRoute);
app.use("/api/comment", commentRoute);

// Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}...`);
});
