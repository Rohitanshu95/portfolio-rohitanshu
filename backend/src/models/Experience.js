const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true }, // "Feb 2026 - Present"
  workType: { type: String, default: 'Onsite' }, // "Onsite", "Hybrid", "Remote"
  nodeColor: { type: String, default: 'secondary' }, // "secondary" | "primary" | "tertiary" | "surface-variant"
  companyColor: { type: String, default: 'secondary' },
  highlights: [{ type: String }],
  techStack: [{ type: String }],
  order: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Experience', ExperienceSchema);
