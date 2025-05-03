const Package = require('../models/packageModel');

// Crear un nuevo paquete
const createPackage = async (req, res) => {
  try {
    // Desestructuración de los campos desde req.body
    const { 
      name, 
      description, 
      price, 
      type, 
      capacity, 
      basePrice 
    } = req.body;

    // Validación de los campos recibidos
    if (!name || !description || !price || !type || !capacity || !basePrice) {
      return res.status(400).json({ message: "Todos los campos son requeridos." });
    }

    // Crear un nuevo paquete con los datos recibidos
    const newPackage = new Package({
      name,
      description,
      price,
      isActive,
      type,
      capacity,
      basePrice
    });

    // Guardar el paquete en la base de datos
    await newPackage.save();

    // Responder con el paquete creado
    res.status(201).json(newPackage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al crear el paquete.", error: error.message });
  }
};

// Obtener todos los paquetes
const getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al obtener los paquetes.", error: error.message });
  }
};

// Obtener un paquete por ID
const getPackageById = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id);
    if (!package) {
      return res.status(404).json({ message: "Paquete no encontrado." });
    }
    res.status(200).json(package);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al obtener el paquete.", error: error.message });
  }
};

// Actualizar un paquete por ID
const updatePackage = async (req, res) => {
  try {
    const { 
      name, 
      description, 
      price, 
      isActive, 
      type, 
      capacity, 
      basePrice 
    } = req.body;

    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      { 
        name, 
        description, 
        price, 
        isActive, 
        type, 
        capacity, 
        basePrice 
      },
      { new: true }
    );

    if (!updatedPackage) {
      return res.status(404).json({ message: "Paquete no encontrado." });
    }

    res.status(200).json(updatedPackage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al actualizar el paquete.", error: error.message });
  }
};

// Eliminar un paquete por ID
const deletePackage = async (req, res) => {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);

    if (!deletedPackage) {
      return res.status(404).json({ message: "Paquete no encontrado." });
    }

    res.status(200).json({ message: "Paquete eliminado exitosamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al eliminar el paquete.", error: error.message });
  }
};

module.exports = {
  createPackage,
  getPackages,
  getPackageById,
  updatePackage,
  deletePackage
};
