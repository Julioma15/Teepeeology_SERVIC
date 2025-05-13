const express = require('express');
const router = express.Router();
const { getReservaciones, createReservacion } = require('../controllers/reservacionesControllers');

// Ruta para obtener todas las reservaciones
router.get('/', getReservaciones);

// Ruta para crear una nueva reservación
router.post('/', createReservacion);

module.exports = router;