const express = require('express');
const router = express.Router();
const { getPaquetes, createPaquete, deletePaquete } = require('../controllers/paqueteControllers');
const Paquete = require('../models/paqueteModel');

// Ruta para obtener todos los paquetes
router.get('/', getPaquetes);

// Ruta para obtener un paquete por ID
router.get('/:id', async (req, res) => {
    try {
        const paquete = await Paquete.findById(req.params.id);
        if (!paquete) {
            return res.status(404).json({ message: 'Paquete no encontrado' });
        }
        res.status(200).json(paquete);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el paquete', error: error.message });
    }
});

// Ruta para crear un nuevo paquete
router.post('/', createPaquete);

// Ruta para eliminar un paquete por ID
router.delete('/:id', deletePaquete);

module.exports = router;