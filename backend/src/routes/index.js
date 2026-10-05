const express = require('express');
const router = express.Router();

const profileRoutes = require('./profileRoutes');
const projectRoutes = require('./projectRoutes');
const skillRoutes = require('./skillRoutes');
const experienceRoutes = require('./experienceRoutes');
const achievementRoutes = require('./achievementRoutes');
const contactRoutes = require('./contactRoutes');

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    version: '1.0.0',
    service: 'AI Engineer Portfolio API'
  });
});

// Mounted sub-routes
router.use('/profile', profileRoutes);
router.use('/projects', projectRoutes);
router.use('/skills', skillRoutes);
router.use('/experience', experienceRoutes);
router.use('/achievements', achievementRoutes);
router.use('/contact', contactRoutes);

module.exports = router;
