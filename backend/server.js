const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors'); // Importa cors
const port = process.env.PORT || 8000;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

// Crear la instancia de la aplicación
const app = express();

// Conectar a la base de datos
connectDB();

// Configurar CORS
app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500'], // Permitir ambos orígenes
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true, // Permitir cookies si es necesario
}));

app.use(express.json()); // Para parsear JSON
app.use(express.urlencoded({ extended: false })); // Para parsear datos de formularios

// Rutas
app.use('/api/usuarios', require('./routes/userRoutes'));
app.use('/api/paquetes', require('./routes/paqueteRoutes'));
app.use('/api/reservas', require('./routes/reservasRoutes')); // Agregar rutas de reservas

// Middleware para manejar errores
app.use(errorHandler);

// Iniciar servidor
app.listen(port, () =>
    console.log(`Servidor iniciado en el puerto ${port}`.yellow.bold)
);


