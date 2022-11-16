const express = require('express');

const router = express.Router();

const healthRoutes = require('./health.route');

router.use('/health', healthRoutes);

module.exports = router;