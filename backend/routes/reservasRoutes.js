const express = require('express');
const router = express.Router();
const { getReservas, createReserva, deleteReserva } = require('../controllers/reservasController');

// Ruta para obtener todas las reservas
router.get('/', getReservas);

// Ruta para crear una nueva reserva
router.post('/', createReserva);

// Ruta para eliminar una reserva por ID
router.delete('/:id', deleteReserva);

module.exports = router;