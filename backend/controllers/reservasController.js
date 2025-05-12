const Reserva = require('../models/reservasModel');

// Obtener todas las reservas
const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reservas', error: error.message });
    }
};

// Crear una nueva reserva
const createReserva = async (req, res) => {
    const { username, paqueteName, paqueteType, paquetePrice } = req.body;

    if (!username || !paqueteName || !paqueteType || !paquetePrice) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const newReserva = await Reserva.create({ username, paqueteName, paqueteType, paquetePrice });
        res.status(201).json(newReserva);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la reserva', error: error.message });
    }
};

// Eliminar una reserva
const deleteReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reservaToDelete = await Reserva.findById(id);

        if (!reservaToDelete) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }

        await Reserva.findByIdAndDelete(id);

        res.status(200).json({ message: 'Reserva eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la reserva', error: error.message });
    }
};

module.exports = { getReservas, createReserva, deleteReserva };