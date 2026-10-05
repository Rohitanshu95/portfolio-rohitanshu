const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');
const { contactLimiter } = require('../middlewares/rateLimiter');

router.post('/', contactLimiter, submitContactForm);

module.exports = router;
