const mongoose = require('mongoose');

const SkillItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dotColor: { type: String, default: '' }, // 'secondary' | 'primary' | 'tertiary' | ''
}, { _id: false });

const SkillCategorySchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g. "Core Languages", "AI/ML & Generative AI"
  icon: { type: String, default: 'code' },
  iconColor: { type: String, default: 'secondary' },
  specializationTag: { type: String, default: '' }, // e.g. "Specialization"
  colSpanDesktop: { type: Number, default: 1 }, // 2 for AI/ML card
  skills: [SkillItemSchema],
  order: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Skill', SkillCategorySchema);
