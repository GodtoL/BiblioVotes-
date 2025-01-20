# Bibliovotes Backend

Este repositorio contiene el backend de **Bibliovotes**, una aplicación web para que los usuarios recomienden libros, comenten y asignen etiquetas. La API está diseñada para integrarse con tres frontends desarrollados en diferentes tecnologías.

## Estructura del Proyecto

```plaintext
src/

├── config/              # Configuración de la base de datos y otros ajustes.

├── controllers/         # Controladores para manejar la lógica de negocio.
│   ├── BookController.js
│   ├── CommentController.js
│   ├── TagController.js
│   └── UserController.js

├── models/              # Modelos de Sequelize para representar las entidades del sistema.
│   ├── Book.js
│   ├── Comment.js
│   ├── Tag.js
│   ├── User.js
│   └── index.js

├── routes/              # Definición de las rutas para cada recurso.
│   ├── BookRoute.js
│   ├── CommentRoute.js
│   ├── TagRoute.js
│   └── UserRoute.js

└── index.js             # Punto de entrada principal de la aplicación.
```

### Archivos Principales

- `.env.example`: Contiene las variables de entorno necesarias para configurar la aplicación.
- `docker-compose.yml`: Permite ejecutar el backend en un contenedor Docker.
- `package.json`: Define las dependencias y scripts del proyecto.

---

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/bibliovotes-backend.git
   cd bibliovotes-backend
   ```

2. Crea un archivo `.env` basado en `.env.example` y llena las variables de entorno necesarias.

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura la base de datos:

   - Si usas Docker, simplemente ejecuta:
     ```bash
     docker-compose up
     ```
   - Si configuras la base de datos localmente, asegúrate de que las credenciales coincidan con las de tu archivo `.env`.

5. Ejecuta las migraciones y semillas (opcional):

   ```bash
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```

6. Inicia el servidor:

   ```bash
   npm start
   ```

El backend estará disponible en `http://localhost:3000` por defecto.

---

## Integración con Frontends

Este backend es consumido por tres frontends diferentes:

1. **Frontend en Vanilla JS**
   - Repositorio: [bibliovotes-frontend-vanilla](https://github.com/GodtoL/bibliovotes-frontend-js)

2. **Frontend en React**
   - Repositorio: [bibliovotes-frontend-react](https://github.com/GodtoL/bibliovotes-frontend-react)

3. **Frontend en Angular**
   - Repositorio: [bibliovotes-frontend-angular](https://github.com/GodtoL/bibliovotes-frontend-angular)

---

## Tecnologías Usadas

- **Node.js**: Plataforma de desarrollo.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para manejar la base de datos.
- **PostgreSQL**: Sistema de gestión de bases de datos.
- **Docker**: Contenerización para el despliegue.

