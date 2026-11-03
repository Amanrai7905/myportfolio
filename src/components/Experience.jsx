import { experiences } from '../data/experience'
import { useInView } from '../hooks/useInView'

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
      <section id="experience" ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 border-t border-line">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="endpoint-label mb-1.5 sm:mb-2">GET /experience</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4 mb-6 sm:mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-text">Professional Experience</h2>
                <p className="text-dim text-xs sm:text-sm mt-1">Track record of enterprise software development and API delivery</p>
              </div>
              <span className="font-mono text-xs text-teal px-3 py-1 rounded bg-teal/10 border border-teal/20 self-start sm:self-auto">
                3+ Years Total
              </span>
            </div>

                  <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-line">
                    {experiences.map((exp) => (
                      <div key={exp.company} className="relative pl-7 sm:pl-9 group">
                        {/* Timeline marker perfectly centered at 12px */}
                        <div
                                ? 'border-teal shadow-[0_0_10px_rgba(63,201,176,0.5)]'
                                : 'border-line group-hover:border-amber'
                              }`}
              >
                {exp.isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-teal animate-ping" />}
              </div>

              {/* Card */}
              <div className="bg-surface border border-line rounded-xl p-4 sm:p-6 md:p-7 hover:border-line/90 transition-all shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-3 mb-2">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-text flex flex-wrap items-center gap-2">
                      <span>{exp.role}</span>
                      {exp.isCurrent && (
                        <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-teal/15 text-teal border border-teal/30 font-normal">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-amber font-mono text-xs sm:text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="text-left sm:text-right mt-1 sm:mt-0 flex flex-wrap sm:flex-col items-center sm:items-end gap-2 sm:gap-0.5">
                    <span className="font-mono text-xs text-teal px-2.5 py-0.5 sm:py-1 rounded bg-teal/10 border border-teal/20 inline-block">
                      {exp.period}
                    </span>
                    <span className="text-dim text-xs">{exp.location}</span>
                  </div>
                </div>

                <p className="text-dim text-xs sm:text-sm mt-2.5 sm:mt-3 mb-3.5 sm:mb-4 leading-relaxed">{exp.summary}</p>

                <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-text/90 text-xs sm:text-sm leading-relaxed">
                      <span className="text-amber mt-0.5 shrink-0 font-bold text-xs sm:text-sm">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack used in this role */}
                <div className="pt-3.5 sm:pt-4 border-t border-line/60 flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-xs text-dim mr-1">Stack:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-surfaceAlt border border-line text-dim font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
