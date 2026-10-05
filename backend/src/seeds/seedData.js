const seedProfile = {
  name: 'Rohitanshu Dhar',
  role: 'AI Engineer',
  statusBadge: 'Available for AI Engineering Roles',
  specializationPill: 'RAG & Agents',
  headlinePrefix: "Hi, I'm",
  headlineHighlight: 'Rohitanshu Dhar',
  subheadline: 'AI Engineer building production-ready GenAI, RAG & AI agent applications',
  summary: 'Specializing in context-aware retrieval pipelines, autonomous multi-agent systems, and low-latency LLM serving with deterministic benchmarks.',
  aboutHeading: 'Engineering Intelligence at Scale',
  aboutBio: [
    'AI Engineer with 1+ year of hands-on experience in Python, FastAPI, React, and Generative AI, building scalable AI apps with LLMs, RAG, vector databases, prompt engineering, and autonomous agents.',
    'Currently pursuing B.Tech in Computer Science and Engineering from GIET, Bhubaneswar (2022–2026). My engineering philosophy centers on deterministic evaluation over vibecoding: systematically driving down hallucination rates, optimizing TTFT (Time to First Token), and implementing reliable multi-agent orchestration loops for mission-critical client workloads.'
  ],
  microMetrics: [
    { label: 'Low-Latency Serving', icon: 'verified', color: 'secondary' },
    { label: 'Deterministic Benchmarking', icon: 'analytics', color: 'primary' },
    { label: 'Multi-Agent Graph Workflows', icon: 'hub', color: 'tertiary' }
  ],
  metrics: [
    {
      title: 'Production Experience',
      value: '1+ Years',
      description: 'End-to-end GenAI & fullstack apps',
      icon: 'terminal'
    },
    {
      title: 'Commercial Engagement',
      value: '4',
      description: 'Internships & delivered client solutions',
      icon: 'work_history'
    },
    {
      title: 'Competitive Track Record',
      value: '3',
      description: 'Hackathon podiums & fast prototyping',
      icon: 'emoji_events'
    }
  ],
  floatingBadges: [
    { label: 'Python 3.12', icon: '', color: 'secondary' },
    { label: 'FastAPI Async', icon: 'bolt', color: 'secondary' },
    { label: 'LangGraph Agents', icon: 'account_tree', color: 'primary' },
    { label: 'Vector RAG', icon: 'database', color: 'tertiary' }
  ],
  location: 'Bhubaneswar, Odisha, India',
  email: 'rohitanshudhar07@gmail.com',
  phone: '+91 8144598272',
  githubUrl: 'https://github.com/Rohitanshu95',
  linkedinUrl: 'https://linkedin.com/in/rohitanshu-dhar',
  resumeUrl: '/resume.pdf',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqoaGGAnziDEbngJ-LmfICvomHyTXXqiJgsif7Fl5AQV02w5pNfqzERGEosM86fHKYDtT0WZ6TrQOWKLCZcCBxMNXzOWSMax-CA3Khqj3h8RPnwr6e0nrwnOpdDcUpGM7w3zZxoDWlMXl1cyrPLrRJaTsHIJz8epNlARRoa0kQuUQCNWp2nkSNNqPDAHkgtwjDtvMu_OnDLjBA2ENfXtU9Yv5j0_HnQctHfYse7y8SToIu5IaK_UWCkg',
  education: {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    institution: 'GIET, Bhubaneswar (Affiliated to BPUT)',
    cohort: '2022 – 2026',
    location: 'Bhubaneswar, Odisha',
    coursework: 'Core coursework: Artificial Intelligence, Distributed Systems, Data Structures & Algorithms, Machine Learning, Database Management Systems.'
  }
};

const seedSkills = [
  {
    category: 'Core Languages',
    icon: 'code',
    iconColor: 'secondary',
    colSpanDesktop: 1,
    order: 1,
    skills: [
      { name: 'Python', dotColor: 'secondary' },
      { name: 'SQL', dotColor: 'primary' }
    ]
  },
  {
    category: 'AI/ML & Generative AI',
    icon: 'psychology',
    iconColor: 'primary',
    specializationTag: 'Specialization',
    colSpanDesktop: 2,
    order: 2,
    skills: [
      { name: 'Machine Learning', dotColor: 'secondary' },
      { name: 'Deep Learning', dotColor: 'secondary' },
      { name: 'NLP', dotColor: 'secondary' },
      { name: 'Computer Vision', dotColor: 'secondary' },
      { name: 'LLMs', dotColor: 'primary' },
      { name: 'RAG Pipelines', dotColor: 'primary' },
      { name: 'Prompt Engineering', dotColor: 'primary' },
      { name: 'Embeddings', dotColor: 'tertiary' },
      { name: 'Vector Databases', dotColor: 'tertiary' },
      { name: 'AI Agents', dotColor: 'secondary' },
      { name: 'Tool Calling', dotColor: 'secondary' }
    ]
  },
  {
    category: 'Frameworks & APIs',
    icon: 'api',
    iconColor: 'secondary',
    colSpanDesktop: 1,
    order: 3,
    skills: [
      { name: 'FastAPI', dotColor: '' },
      { name: 'LangGraph', dotColor: '' },
      { name: 'OpenAI API', dotColor: '' },
      { name: 'Gemini API', dotColor: '' },
      { name: 'Ollama', dotColor: '' },
      { name: 'REST APIs', dotColor: '' },
      { name: 'React', dotColor: '' }
    ]
  },
  {
    category: 'Databases & Storage',
    icon: 'database',
    iconColor: 'primary',
    colSpanDesktop: 1,
    order: 4,
    skills: [
      { name: 'MySQL', dotColor: '' },
      { name: 'PostgreSQL', dotColor: '' },
      { name: 'MongoDB', dotColor: '' },
      { name: 'SQLite', dotColor: '' },
      { name: 'Redis', dotColor: '' }
    ]
  },
  {
    category: 'Tools & DevOps',
    icon: 'tune',
    iconColor: 'tertiary',
    colSpanDesktop: 1,
    order: 5,
    skills: [
      { name: 'Git', dotColor: '' },
      { name: 'GitHub', dotColor: '' },
      { name: 'Docker', dotColor: '' },
      { name: 'Linux', dotColor: '' },
      { name: 'Postman', dotColor: '' },
      { name: 'VS Code', dotColor: '' },
      { name: 'Jupyter', dotColor: '' },
      { name: 'Colab', dotColor: '' },
      { name: 'Kaggle', dotColor: '' }
    ]
  }
];

const seedExperiences = [
  {
    role: 'AI & ML Intern',
    company: 'E Square System & Technologies Pvt Ltd',
    period: 'Feb 2026 - Present',
    workType: 'Onsite',
    nodeColor: 'secondary',
    companyColor: 'secondary',
    order: 1,
    highlights: [
      'Built production AI apps with FastAPI, OpenAI, Gemini, RAG, LangGraph, and vector DBs, covering multilingual conversational AI, recommendations, document analysis, and data extraction.',
      'Engineered context-aware retrieval and autonomous agent pipelines for tourism and document intelligence apps.',
      'Designed robust backend APIs with FastAPI, MongoDB, Redis, and Docker, including LLM-based document analysis for automated PQ, TQ, and FQ tender evaluation.'
    ],
    techStack: ['FastAPI', 'OpenAI', 'Gemini', 'LangGraph', 'RAG', 'Redis', 'Docker', 'Vector DBs']
  },
  {
    role: 'Software Developer Intern',
    company: 'Quotus Software Solution Pvt. Ltd.',
    period: 'Jan 2026',
    workType: 'Onsite',
    nodeColor: 'primary',
    companyColor: 'primary',
    order: 2,
    highlights: [
      'Built an SLM-powered hotel chatbot using Llama 2B and Ollama for guest queries, room services, instant reservations, and bookings.',
      'Engineered FastAPI backends and optimized local model deployment for low-latency, cost-effective inference pipelines without external cloud costs.'
    ],
    techStack: ['Llama 2B', 'Ollama', 'FastAPI', 'SLM', 'On-Premise AI']
  },
  {
    role: 'Freelance AI Developer',
    company: 'Direct Enterprise Client Engagements',
    period: 'Jul 2025 - Jan 2026',
    workType: 'Hybrid',
    nodeColor: 'tertiary',
    companyColor: 'tertiary',
    order: 3,
    highlights: [
      'Architected an AI-powered OD Survey solution for Arkitechno Consultants India Pvt. Ltd. to automate survey categorization and spatial trend identification.',
      'Delivered an AI-powered Smart Attendance System for IDCO, Bhubaneswar using real-time edge processing and biometric facial verification.'
    ],
    techStack: ['Computer Vision', 'Survey Automation', 'Fast Prototyping']
  },
  {
    role: 'Data Analytics Intern',
    company: 'Infotact Solutions',
    period: 'May - Jul 2025',
    workType: 'Remote',
    nodeColor: 'surface-variant',
    companyColor: 'on-surface-variant',
    order: 4,
    highlights: [
      'Conducted in-depth retail sales analysis on the Blinkit dataset to isolate drop-off points and channel demand surges.',
      'Engineered interactive Power BI and Excel dashboards, and authored a Python-based customer RFM segmentation model using Matplotlib.'
    ],
    techStack: ['Python', 'Power BI', 'Matplotlib', 'Data Segmentation', 'SQL']
  }
];

const seedProjects = [
  {
    title: 'Odisha Tourism Chatbot',
    categoryBadge: 'RAG & Agents',
    categoryColor: 'secondary',
    icon: 'explore',
    description: 'Multilingual RAG conversational assistant providing personalized destination recommendations, historical context, and itinerary planning.',
    tags: ['FastAPI', 'LangGraph', 'Gemini', 'Vector DB', 'React'],
    githubUrl: 'https://github.com/Rohitanshu95',
    demoUrl: '#contact',
    order: 1,
    featured: true
  },
  {
    title: 'TenderIntel - AI Tender Evaluation',
    categoryBadge: 'LLM Document AI',
    categoryColor: 'primary',
    icon: 'description',
    description: 'Enterprise LLM-based PQ/TQ/FQ scoring and ranking engine for automated compliance and comprehensive bid assessment.',
    tags: ['FastAPI', 'OpenAI', 'RAG', 'MongoDB', 'Docker'],
    githubUrl: 'https://github.com/Rohitanshu95',
    demoUrl: '#contact',
    order: 2,
    featured: true
  },
  {
    title: 'Hotel Assistant Chatbot',
    categoryBadge: 'Local SLM',
    categoryColor: 'tertiary',
    icon: 'room_service',
    description: 'Lightweight SLM chatbot leveraging Llama 2B and Ollama for guest queries, room services, and instant reservations with near-zero latency.',
    tags: ['Llama 2B', 'Ollama', 'FastAPI', 'Python'],
    githubUrl: 'https://github.com/Rohitanshu95',
    demoUrl: '#contact',
    order: 3,
    featured: true
  },
  {
    title: 'OD Survey AI Solution',
    categoryBadge: 'Analytics & NLP',
    categoryColor: 'secondary',
    icon: 'alt_route',
    description: 'AI survey automation and insight generation system developed for Arkitechno Consultants India Pvt. Ltd.',
    tags: ['Python', 'NLP', 'Pandas', 'Streamlit'],
    githubUrl: 'https://github.com/Rohitanshu95',
    demoUrl: '#contact',
    order: 4,
    featured: true
  },
  {
    title: 'Smart Attendance System',
    categoryBadge: 'Computer Vision',
    categoryColor: 'primary',
    icon: 'face',
    description: 'Automated tracking and real-time monitoring platform built for IDCO, Bhubaneswar using facial recognition and edge processing.',
    tags: ['Computer Vision', 'OpenCV', 'FastAPI', 'SQLite'],
    githubUrl: 'https://github.com/Rohitanshu95',
    demoUrl: '#contact',
    order: 5,
    featured: true
  },
  {
    title: 'Customer Segmentation Hub',
    categoryBadge: 'Data Science',
    categoryColor: 'tertiary',
    icon: 'insights',
    description: 'End-to-end exploratory analysis and RFM customer segmentation engine with interactive visual reporting.',
    tags: ['Python', 'Matplotlib', 'Power BI', 'SQL'],
    githubUrl: 'https://github.com/Rohitanshu95',
    demoUrl: '#contact',
    order: 6,
    featured: true
  }
];

const seedAchievements = [
  {
    type: 'hackathon',
    title: 'GIET HackFest 2025',
    badge: '1st Place • Winner',
    badgeColor: 'secondary',
    description: 'Championed first prize for best end-to-end production architecture.',
    icon: 'emoji_events',
    order: 1
  },
  {
    type: 'hackathon',
    title: 'Festronix 2025',
    badge: 'Runner-Up',
    badgeColor: 'primary',
    description: 'AI & ML Competition podium for low-latency neural pipeline.',
    icon: 'military_tech',
    order: 2
  },
  {
    type: 'hackathon',
    title: 'Smart India Hackathon',
    badge: '2nd Runner-Up',
    badgeColor: 'tertiary',
    description: 'Internal selection (2024-25) for national-scale civic technology prototype.',
    icon: 'workspace_premium',
    order: 3
  },
  {
    type: 'hackathon',
    title: 'Innovatex 4.0',
    badge: 'Runner-Up',
    badgeColor: 'secondary',
    description: 'GIET Baniatangi flagship hackathon for autonomous agent software.',
    icon: 'rewarded_ads',
    order: 4
  },
  {
    type: 'certification',
    title: 'Python & Data Science (Dynamic System)',
    badge: 'Certified',
    badgeColor: 'secondary',
    description: 'Validated domain competencies in data science and automated pipelines.',
    icon: 'verified',
    order: 5
  },
  {
    type: 'certification',
    title: 'SQL Basic & Advanced (HackerRank)',
    badge: 'Certified',
    badgeColor: 'primary',
    description: 'Advanced relational database design and high-performance querying.',
    icon: 'verified',
    order: 6
  }
];

module.exports = {
  seedProfile,
  seedSkills,
  seedExperiences,
  seedProjects,
  seedAchievements
};
