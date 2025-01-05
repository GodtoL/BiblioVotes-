const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Permitir todos los orígenes
app.use(cors());

// Middleware para analizar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tus rutas
const userRoute = require('./routes/UserRoute.js');
const bookRoute = require('./routes/BookRoute.js');
const tagRoute = require('./routes/TagRoute.js');
const commentRoute = require('./routes/CommentRoute.js');

app.use('/api/user', userRoute);
app.use('/api/book', bookRoute);
app.use('/api/tag', tagRoute);
app.use('/api/comment', commentRoute);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}...`);
});
