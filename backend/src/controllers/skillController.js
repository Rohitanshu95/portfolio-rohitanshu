const Skill = require('../models/Skill');
const { seedSkills } = require('../seeds/seedData');

// @desc    Get technical skills categorized
// @route   GET /api/v1/skills
// @access  Public
const getSkills = async (req, res, next) => {
  try {
    let skills = await Skill.find().sort({ order: 1 });
    if (!skills || skills.length === 0) {
      skills = seedSkills;
    }

    res.status(200).json({
      success: true,
      count: skills.length,
      data: skills,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSkills,
};
