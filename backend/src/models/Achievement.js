const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
  type: { type: String, enum: ['hackathon', 'certification'], required: true },
  title: { type: String, required: true },
  badge: { type: String }, // "1st Place • Winner", "Runner-Up", etc.
  badgeColor: { type: String, default: 'secondary' },
  description: { type: String },
  icon: { type: String, default: 'emoji_events' },
  order: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Achievement', AchievementSchema);
