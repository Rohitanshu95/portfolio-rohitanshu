const Profile = require('../models/Profile');
const { seedProfile } = require('../seeds/seedData');

// @desc    Get portfolio profile & bio data
// @route   GET /api/v1/profile
// @access  Public
const getProfile = async (req, res, next) => {
  try {
    let profile = await Profile.findOne().sort({ createdAt: -1 });
    if (!profile) {
      profile = seedProfile;
    }
    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
};
