const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  categoryBadge: { type: String, required: true }, // e.g. "RAG & Agents", "LLM Document AI", "Local SLM"
  categoryColor: { type: String, default: 'secondary' }, // "primary" | "secondary" | "tertiary"
  icon: { type: String, default: 'code' },
  description: { type: String, required: true },
  tags: [{ type: String }],
  githubUrl: { type: String, default: 'https://github.com/Rohitanshu95' },
  demoUrl: { type: String, default: '#contact' },
  order: { type: Number, default: 0 },
  featured: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
