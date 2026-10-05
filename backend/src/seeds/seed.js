const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const mongoose = require('mongoose');

const Profile = require('../models/Profile');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Project = require('../models/Project');
const Achievement = require('../models/Achievement');

const {
  seedProfile,
  seedSkills,
  seedExperiences,
  seedProjects,
  seedAchievements
} = require('./seedData');

const seedDatabase = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio_db';
  try {
    console.log('[Seed] Connecting to MongoDB at', mongoUri);
    await mongoose.connect(mongoUri);

    console.log('[Seed] Clearing existing collections...');
    await Profile.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    await Project.deleteMany({});
    await Achievement.deleteMany({});

    console.log('[Seed] Inserting fresh portfolio data...');
    await Profile.create(seedProfile);
    await Skill.insertMany(seedSkills);
    await Experience.insertMany(seedExperiences);
    await Project.insertMany(seedProjects);
    await Achievement.insertMany(seedAchievements);

    console.log('[Seed] Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('[Seed Error] Failed to seed database:', error);
    process.exit(1);
  }
};

seedDatabase();
