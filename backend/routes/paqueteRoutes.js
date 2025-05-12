const express = require('express');
const router = express.Router();
const { getPaquetes, createPaquete, deletePaquete } = require('../controllers/paqueteControllers');

// Ruta para obtener todos los paquetes
router.get('/', getPaquetes);

// Ruta para crear un nuevo paquete
router.post('/', createPaquete);

// Ruta para eliminar un paquete por ID
router.delete('/:id', deletePaquete);

module.exports = router;