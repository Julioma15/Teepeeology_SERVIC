const express = require('express');
const router = express.Router();
const {
    getPackages,
    createPackage,
    updatePackage,
    deletePackage
} = require('../controllers/packagesController');

// Routes for packages
router.get('/', getPackages);            // Get all packages
router.post('/', createPackage);         // Create a new package
router.put('/:id', updatePackage); // Update a package by ID
router.delete('/:id', deletePackage); // Delete a package by ID

module.exports = router;
