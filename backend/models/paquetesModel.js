const mongoose = require('mongoose');
const packageModel = require('../models/packageModel');

const packageSchema = mongoose.Schema(
    {
        name: { type: String, required: true }, // Nombre del paquete
        description: { type: String, required: true }, // Descripción del paquete
        price: { type: Number, required: true }, // Precio del paquete
        type: { type: String, required: true }, // Tipo de paquete (Ej: Luum, Zahra, etc.)
        capacity: { type: Number, required: true }, // Capacidad máxima que soporta el paquete
        basePrice: { type: Number, required: true }, // Precio base del paquete
    },
    {
        timestamps: true, // Crea automáticamente los campos createdAt y updatedAt
    }
);

module.exports = mongoose.model('Package', packageSchema);
