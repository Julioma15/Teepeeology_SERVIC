const mongoose = require('mongoose');

const reservacionSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'El título es obligatorio'],
    },
    start: {
        type: Date,
        required: [true, 'La fecha de inicio es obligatoria'],
    },
    end: {
        type: Date,
        required: [true, 'La fecha de fin es obligatoria'],
    },
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('reservaciones', reservacionSchema, 'reservaciones');
