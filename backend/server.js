const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const packageRoutes = require('./routes/packagesRoutes');
const connectDB = require('./config/db');

// Conectar a la base de datos
connectDB();

const app = express();

app.use(express.json()); // Para parsear JSON
app.use(express.urlencoded({ extended: false })); // Para parsear datos de formularios

app.use('/api/packages', packageRoutes); // Rutas para los paquetes

app.use(errorHandler); // Middleware para manejar errores


// Iniciar servidor
app.listen(port, () =>
  console.log(`Servidor iniciado en el puerto ${port}`.yellow.bold)
);


