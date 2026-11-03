import { useState } from 'react'
import { projects, projectCategories } from '../data/projects'
import { useInView } from '../hooks/useInView'

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 border-t border-line">
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <p className="endpoint-label mb-1.5 sm:mb-2">GET /projects</p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text">Featured Projects</h2>
            <p className="text-dim text-xs sm:text-sm mt-1">
              Production systems, RESTful microservices, and full-stack solutions
            </p>
          </div>

          {/* Filter Categories: Scrollable / wrap on mobile */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 bg-surface p-1 rounded-lg border border-line self-start sm:self-auto max-w-full">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-2.5 sm:px-3 py-1.5 rounded-md transition-all touch-manipulation min-h-[34px] ${activeCategory === cat
                  ? 'bg-amber text-bg font-semibold shadow-sm'
                  : 'text-dim hover:text-text'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 1 column on mobile, 2 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-surface border border-line rounded-xl p-4 sm:p-6 flex flex-col justify-between hover:border-line/90 hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-lg group"
            >
              <div>
                {/* Header: Name, Type, Status */}
                <div className="flex items-start justify-between gap-2.5 mb-2.5 sm:mb-3">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-amber uppercase tracking-wider block mb-0.5 sm:mb-1">
                      {project.type}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-text group-hover:text-amber transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-teal/10 text-teal border border-teal/30 shrink-0 font-medium">
                    {project.status}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-dim text-xs sm:text-sm leading-relaxed mb-3.5 sm:mb-4">
                  {project.summary}
                </p>

                {/* Key Technical Highlights */}
                {project.highlights && (
                  <div className="mb-3.5 sm:mb-4 space-y-1.5 text-xs text-text/80">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-teal font-bold shrink-0">✓</span>
                        <span className="text-[11px] sm:text-xs">{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                  {project.stack.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-surfaceAlt border border-line text-dim font-mono skill-chip"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions: Fully responsive wrap */}
              <div className="pt-3.5 sm:pt-4 border-t border-line/60 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs px-3 py-1.5 rounded-lg bg-amber text-bg font-semibold hover:opacity-95 transition-opacity btn-cta flex items-center gap-1.5 min-h-[36px]"
                    >
                      <span>View Code</span>
                      <span>↗</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs px-3 py-1.5 rounded-lg border border-line text-text hover:border-teal hover:text-teal transition-colors flex items-center gap-1.5 min-h-[36px]"
                    >
                      <span>Live Demo</span>
                      <span>↗</span>
                    </a>
                  )}

                  {project.isPrivate && (
                    <span className="text-[11px] font-mono text-dim px-2.5 py-1.5 rounded-lg bg-surfaceAlt border border-line flex items-center gap-1.5 min-h-[36px]">
                      <svg className="w-3 h-3 text-amber/80 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span>Enterprise Code</span>
                    </span>
                  )}
                </div>

                <div className="text-[10px] sm:text-[11px] text-dim font-mono">
                  {project.category}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
