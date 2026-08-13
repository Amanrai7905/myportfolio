import { useEffect, useState } from 'react'

const projects = [
  {
    name: 'AI ChatBot',
    stack: 'ASP.NET Core Web API · React.js · Groq API',
    description:
      'Full-stack AI chatbot with a secure backend that protects API keys, integrates the Groq API for LLM-powered responses, and optimizes error handling for reliable conversations.',
    status: '200',
  },
  {
    name: 'Eazyshopee',
    stack: 'ASP.NET Core · SQL Server · REST API',
    description:
      'School registration and online book purchase platform with backend REST APIs, SQL Server data logic, and an optimized order-processing workflow.',
    status: '200',
  },
  {
    name: 'Pilgrim Book House',
    stack: 'ASP.NET Core · SQL Server',
    description:
      'Online bookstore with SEO APIs and admin screens for dynamic Meta Title, Meta Description, and Keywords management, improving search visibility.',
    status: '200',
  },
  {
    name: 'School Management System',
    stack: 'ASP.NET Core · SQL Server',
    description:
      'Web application for managing student and staff records, with REST APIs, a normalized SQL Server schema, and full CRUD operations.',
    status: '200',
  },
]

export default function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <p className={`endpoint-label mb-3 ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '60ms' }}>GET /projects</p>
      <h2 className={`text-2xl md:text-3xl font-bold text-text mb-8 ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '120ms' }}>Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          const chips = project.stack.split(' · ').slice(0, 4)
          return (
            <article
              key={project.name}
              className={`bg-surface border border-line rounded-lg p-6 transform-gpu hover:shadow-lg hover:-translate-y-1 transition-all card-entrance`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-3 gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-text">{project.name}</h3>
                  <p className="font-mono text-xs text-dim mt-1">{project.description.slice(0, 110)}{project.description.length > 110 ? '...' : ''}</p>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-teal/10 text-teal border border-teal/30">
                  {project.status} OK
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {chips.map((c) => (
                  <span key={c} className="text-[11px] px-2 py-1 rounded-md bg-surfaceAlt border border-line text-dim skill-chip">{c}</span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <a href="#" className="text-xs px-3 py-1.5 rounded bg-amber text-bg font-semibold hover:opacity-95 btn-cta">View repo</a>
                <a href="#" className="text-xs px-3 py-1.5 rounded border border-line text-text hover:border-teal hover:text-teal transition-colors">Live</a>
                <div className="ml-auto text-xs text-dim font-mono">Updated recently</div>
              </div>
            </article>
          )
        })}
      </div>

      <p className="text-dim text-xs mt-6 font-mono">
        * Add live demo / GitHub links to each card once you have public repos or deployed URLs.
      </p>
    </section>
  )
}
