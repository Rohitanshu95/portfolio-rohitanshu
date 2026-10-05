const Experience = require('../models/Experience');
const { seedExperiences } = require('../seeds/seedData');

// @desc    Get work history timeline
// @route   GET /api/v1/experience
// @access  Public
const getExperience = async (req, res, next) => {
  try {
    let experiences = await Experience.find().sort({ order: 1 });
    if (!experiences || experiences.length === 0) {
      experiences = seedExperiences;
    }

    res.status(200).json({
      success: true,
      count: experiences.length,
      data: experiences,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getExperience,
};
