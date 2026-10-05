const Achievement = require('../models/Achievement');
const { seedAchievements } = require('../seeds/seedData');

// @desc    Get achievements and certifications
// @route   GET /api/v1/achievements
// @access  Public
const getAchievements = async (req, res, next) => {
  try {
    const { type } = req.query; // 'hackathon' | 'certification'
    const filter = {};
    if (type) filter.type = type;

    let achievements = await Achievement.find(filter).sort({ order: 1 });
    if (!achievements || achievements.length === 0) {
      achievements = seedAchievements;
      if (type) {
        achievements = achievements.filter((a) => a.type === type);
      }
    }

    res.status(200).json({
      success: true,
      count: achievements.length,
      data: achievements,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAchievements,
};
