const express = require('express');
const router = express.Router();
const { home } = require('../controllers/index');

// Define the routes
router.get('/', home);

// Export the router
module.exports = router;