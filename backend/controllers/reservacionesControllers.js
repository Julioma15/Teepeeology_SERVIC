const Reservacion = require('../models/reservacionesModels');

// Obtener todas las reservaciones
const getReservaciones = async (req, res) => {
    try {
        const reservaciones = await Reservacion.find();

        // Mapear los datos para que coincidan con el formato esperado por FullCalendar
        const events = reservaciones.map(reservacion => ({
            id: reservacion._id,
            title: reservacion.titulo, // Nombre del evento
            start: reservacion.start, // Fecha de inicio
            end: reservacion.end,     // Fecha de fin
        }));

        res.status(200).json(events); // Enviar los eventos al frontend
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reservaciones', error: error.message });
    }
};

// Crear una nueva reservación
const createReservacion = async (req, res) => {
    const { titulo, start, end } = req.body;

    if (!titulo || !start || !end) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const nuevaReservacion = await Reservacion.create({
            titulo,
            start,
            end,
        });

        // Devolver la reservación recién creada
        res.status(201).json({
            id: nuevaReservacion._id,
            title: nuevaReservacion.titulo,
            start: nuevaReservacion.start,
            end: nuevaReservacion.end,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la reservación', error: error.message });
    }
};

module.exports = { getReservaciones, createReservacion };