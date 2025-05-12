const mongoose = require('mongoose');

const paqueteSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del paquete es obligatorio'],
    },
    type: {
        type: String,
        required: [true, 'El tipo de paquete es obligatorio'],
    },
    price: {
        type: Number,
        required: [true, 'El precio del paquete es obligatorio'],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Paquete', paqueteSchema);