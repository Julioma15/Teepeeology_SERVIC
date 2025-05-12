const mongoose = require('mongoose');

const reservaSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'El nombre del usuario es obligatorio'],
    },
    paqueteName: {
        type: String,
        required: [true, 'El nombre del paquete es obligatorio'],
    },
    paqueteType: {
        type: String,
        required: [true, 'El tipo del paquete es obligatorio'],
    },
    paquetePrice: {
        type: Number,
        required: [true, 'El precio del paquete es obligatorio'],
    },
    date: {
        type: Date,
        default: Date.now, // Fecha de la reserva
    },
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Reserva', reservaSchema);