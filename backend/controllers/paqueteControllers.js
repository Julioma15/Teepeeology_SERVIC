const Paquete = require('../models/paqueteModel');

// Obtener todos los paquetes
const getPaquetes = async (req, res) => {
    try {
        const paquetes = await Paquete.find();
        res.status(200).json(paquetes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los paquetes', error: error.message });
    }
};

// Crear un nuevo paquete
const createPaquete = async (req, res) => {
    const { name, type, price } = req.body;

    if (!name || !type || !price) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const newPaquete = await Paquete.create({ name, type, price });
        res.status(201).json(newPaquete);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el paquete', error: error.message });
    }
};

// Eliminar un paquete
const deletePaquete = async (req, res) => {
    const { id } = req.params;

    try {
        const paqueteToDelete = await Paquete.findById(id);

        if (!paqueteToDelete) {
            return res.status(404).json({ message: 'Paquete no encontrado' });
        }

        // Usar findByIdAndDelete para eliminar el paquete
        await Paquete.findByIdAndDelete(id);

        res.status(200).json({ message: 'Paquete eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el paquete', error: error.message });
    }
};

module.exports = { getPaquetes, createPaquete, deletePaquete };