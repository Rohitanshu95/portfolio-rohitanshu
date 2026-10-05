const Project = require('../models/Project');
const { seedProjects } = require('../seeds/seedData');

// @desc    Get all featured projects with optional filter
// @route   GET /api/v1/projects
// @access  Public
const getProjects = async (req, res, next) => {
  try {
    const { category, featured } = req.query;
    const filter = {};
    if (category) filter.categoryBadge = new RegExp(category, 'i');
    if (featured !== undefined) filter.featured = featured === 'true';

    let projects = await Project.find(filter).sort({ order: 1 });
    if (!projects || projects.length === 0) {
      projects = seedProjects;
      if (category) {
        projects = projects.filter((p) =>
          p.categoryBadge.toLowerCase().includes(category.toLowerCase())
        );
      }
    }

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProjects,
};
