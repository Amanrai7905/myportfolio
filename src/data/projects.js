export const projectCategories = ['All', 'Full-Stack', 'Backend & APIs', 'AI & Cloud']

export const projects = [
  {
    id: 'ai-chatbot',
    name: 'AI ChatBot Assistant',
    category: 'AI & Cloud',
    status: '200 OK',
    type: 'Full-Stack Application',
    isPrivate: false,
    githubUrl: 'https://github.com/amanrai4885',
    liveUrl: null,
    summary:
      'Full-stack intelligent conversational application featuring a secure .NET backend that abstracts Groq API LLM orchestration, safeguards API credentials, and handles streaming responses with graceful fallback handling.',
    stack: ['ASP.NET Core Web API', 'React.js', 'Groq API', 'JWT Bearer', 'Tailwind CSS'],
    highlights: [
      'Engineered backend middleware protecting API keys from client exposure',
      'Implemented robust token rate-limiting and resilient error handling for external LLM calls',
      'Developed responsive React UI with real-time markdown rendering and conversation history',
    ],
  },
  {
    id: 'organicstore',
    name: 'OrganicStore — E-Commerce Platform',
    category: 'Full-Stack',
    status: '200 OK',
    type: 'Enterprise Client Project',
    isPrivate: true,
    githubUrl: null,
    liveUrl: null,
    summary:
      'High-throughput school registration and digital book procurement platform with relational SQL Server database architecture and transactional order processing pipelines.',
    stack: ['ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'REST APIs', 'React.js'],
    highlights: [
      'Architected normalized relational schema handling multi-tenant school catalogs and parent orders',
      'Optimized complex multi-table SQL queries, reducing order placement latency',
      'Implemented transactional database operations to eliminate inventory race conditions',
    ],
  },
  {
    id: 'Resume_Anlyzer',
    name: 'Resume Anlyzer',
    category: 'Backend & APIs',
    status: '200 OK',
    type: 'Enterprise AI',
    isPrivate: true,
    githubUrl: null,
    liveUrl: null,
    summary:
      'E-commerce bookstore platform built with ASP.NET Core featuring custom SEO management APIs, automated sitemaps, and dynamic metadata control for search engine indexing.',
    stack: ['ASP.NET Core', 'SQL Server', 'REST API', 'Redis Caching', 'SEO Engine'],
    highlights: [
      'Developed administrative APIs for dynamic Meta Title, Description, and OpenGraph tags',
      'Implemented Redis caching on high-traffic product pages, boosting search crawl efficiency',
      'Created structured REST endpoints consumed by web storefronts and inventory sync services',
    ],
  },
  {
    id: 'school-management-system',
    name: 'School Management System (SMS)',
    category: 'Full-Stack',
    status: '200 OK',
    type: 'Enterprise Management System',
    isPrivate: true,
    githubUrl: null,
    liveUrl: null,
    summary:
      'Comprehensive administrative portal managing student records, attendance tracking, faculty assignments, and grade book analytics with granular role-based permissions.',
    stack: ['ASP.NET Core Web API', 'SQL Server', 'RBAC Security', 'Stored Procedures', 'Bootstrap / React'],
    highlights: [
      'Implemented granular Role-Based Access Control (Admin, Teacher, Student, Parent)',
      'Constructed parameterized Stored Procedures for secure and audited data modifications',
      'Designed responsive dashboard reporting on academic milestones and attendance trends',
    ],
  },
]

