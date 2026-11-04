export const projectCategories = ['All', 'Full-Stack','Full Stack & AI' ,'AI & Cloud']

export const projects = [
  {
    id: 'ai-chatbot',
    name: 'AI ChatBot Assistant',
    category: 'AI & Cloud',
    status: 'Completed',
    type: 'Full-Stack Application',
    isPrivate: false,
    githubUrl: 'https://github.com/Amanrai7905/AIChatApp-Backend-New.git',
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
  id: 'organiccart',
  name: 'Organiccart — E-Commerce Platform',
  category: 'Full-Stack',
  status: 'Completed',
  type: 'Enterprise Client Project',
  isPrivate: true,
  githubUrl: null,
  liveUrl: null,

  summary:
    'Developed a full-stack e-commerce platform for browsing organic products, managing shopping carts, and placing orders, with a Python-based backend and React frontend.',

  stack: [
    'Python',
    'FastAPI',
    'React.js',
    'SQLAlchemy',
    'REST APIs'
  ],

  highlights: [
    'Developed RESTful APIs using Python and FastAPI for e-commerce operations.',
    'Built a responsive frontend using React.js for product browsing and shopping experiences.',
    'Designed and integrated relational database operations for product and order management.',
    'Implemented backend functionality to support shopping cart and order processing.',
  ],
},
  {
  id: 'Resume_Analyzer',
  name: 'AI Resume Analyzer',
  category: 'Full Stack & AI',
  status: 'In Progress',
  type: 'Enterprise AI',
  isPrivate: true,
  githubUrl: null,
  liveUrl: null,

  summary:
    'Developed an AI-powered Resume Analyzer that allows users to upload PDF resumes and receive automated analysis, ATS scores, skill identification, missing skill detection, and AI-generated improvement suggestions.',

  stack: [
    'C#',
    'ASP.NET Core Web API (.NET 8)',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'SQL Server',
    'Entity Framework Core',
    'Redis',
    'Hangfire',
    'SignalR',
    'Groq AI'
  ],

  highlights: [
    'Developed a full-stack AI-powered Resume Analyzer using ASP.NET Core Web API (.NET 8) and React.',
    'Integrated Groq AI to generate resume scores, ATS scores, skill analysis, and personalized improvement suggestions.',
    'Implemented PDF text extraction and automated background processing using Hangfire.',
    'Integrated SignalR for real-time resume analysis status updates.',
    'Implemented secure authentication using JWT and refresh token management.',
    'Integrated Redis caching to improve API response performance.',
    'Developed resume search, status filtering, pagination, and detailed analysis views.',
    'Applied Repository Pattern, Dependency Injection, and layered architecture.'
  ],
},
  {
  id: 'school-management-system',
  name: 'School Management System (SMS)',
  category: 'Full-Stack',
  status: 'Completed',
  type: 'Enterprise Management System',
  isPrivate: true,
  githubUrl: null,
  liveUrl: null,

  summary:
    'Developed a comprehensive School Management System to manage student records, attendance, faculty assignments, academic performance, and administrative operations with role-based access control.',

  stack: [
    'C#',
    'ASP.NET Core Web API',
    'SQL Server',
    'Entity Framework Core',
    'Stored Procedures',
    'Role-Based Access Control (RBAC)',
    'React',
    'Bootstrap'
  ],

  highlights: [
    'Implemented Role-Based Access Control (RBAC) for Admin, Teacher, Student, and Parent roles.',
    'Developed parameterized SQL Stored Procedures for secure and efficient database operations.',
    'Designed responsive dashboards for monitoring student attendance, academic performance, and school activities.',
    'Implemented student record management, attendance tracking, faculty assignments, and grade management.',
    'Built a structured administrative portal to streamline school management operations.'
  ],
},
]

