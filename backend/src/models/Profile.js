const mongoose = require('mongoose');

const MetricSchema = new mongoose.Schema({
  title: { type: String, required: true },
  value: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'analytics' }
}, { _id: false });

const FloatingBadgeSchema = new mongoose.Schema({
  label: { type: String, required: true },
  icon: { type: String },
  color: { type: String, default: 'secondary' }
}, { _id: false });

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true, default: 'Rohitanshu Dhar' },
  role: { type: String, required: true, default: 'AI Engineer' },
  statusBadge: { type: String, default: 'Available for AI Engineering Roles' },
  specializationPill: { type: String, default: 'RAG & Agents' },
  headlinePrefix: { type: String, default: "Hi, I'm" },
  headlineHighlight: { type: String, default: 'Rohitanshu Dhar' },
  subheadline: { 
    type: String, 
    default: 'AI Engineer building production-ready GenAI, RAG & AI agent applications' 
  },
  summary: { 
    type: String, 
    default: 'Specializing in context-aware retrieval pipelines, autonomous multi-agent systems, and low-latency LLM serving with deterministic benchmarks.' 
  },
  aboutHeading: { type: String, default: 'Engineering Intelligence at Scale' },
  aboutBio: [
    { type: String }
  ],
  microMetrics: [
    {
      label: String,
      icon: String,
      color: String
    }
  ],
  metrics: [MetricSchema],
  floatingBadges: [FloatingBadgeSchema],
  location: { type: String, default: 'Bhubaneswar, Odisha, India' },
  email: { type: String, default: 'rohitanshudhar07@gmail.com' },
  phone: { type: String, default: '+91 8144598272' },
  githubUrl: { type: String, default: 'https://github.com/Rohitanshu95' },
  linkedinUrl: { type: String, default: 'https://linkedin.com/in/rohitanshu-dhar' },
  resumeUrl: { type: String, default: '/resume.pdf' },
  avatarUrl: { type: String, default: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqoaGGAnziDEbngJ-LmfICvomHyTXXqiJgsif7Fl5AQV02w5pNfqzERGEosM86fHKYDtT0WZ6TrQOWKLCZcCBxMNXzOWSMax-CA3Khqj3h8RPnwr6e0nrwnOpdDcUpGM7w3zZxoDWlMXl1cyrPLrRJaTsHIJz8epNlARRoa0kQuUQCNWp2nkSNNqPDAHkgtwjDtvMu_OnDLjBA2ENfXtU9Yv5j0_HnQctHfYse7y8SToIu5IaK_UWCkg' },
  education: {
    degree: { type: String, default: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering' },
    institution: { type: String, default: 'GIET, Bhubaneswar (Affiliated to BPUT)' },
    cohort: { type: String, default: '2022 – 2026' },
    location: { type: String, default: 'Bhubaneswar, Odisha' },
    coursework: { type: String, default: 'Core coursework: Artificial Intelligence, Distributed Systems, Data Structures & Algorithms, Machine Learning, Database Management Systems.' }
  }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
