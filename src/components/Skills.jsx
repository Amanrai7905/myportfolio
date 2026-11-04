import { skillCategories } from '../data/skills'
import { useInView } from '../hooks/useInView'

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
      <section id="skills" ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 border-t border-line">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="endpoint-label mb-1.5 sm:mb-2">GET /skills</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4 mb-6 sm:mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-text">Technical Skills &amp; Stack</h2>
                <p className="text-dim text-xs sm:text-sm mt-1">Categorized competencies verified through production delivery</p>
              </div>
                <div className="flex items-center gap-3 text-xs font-mono text-dim self-start sm:self-auto">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber" /> Production Focus
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal" /> Proficient
                  </span>
                </div>
              </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {skillCategories.map((group) => (
                      <div
                        key={group.category}
                        className="bg-surface border border-line rounded-xl p-4 sm:p-5 hover:border-line/90 transition-all hover-shimmer shadow-sm flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-mono text-xs text-amber font-semibold uppercase tracking-wider">
                              {group.category}
                            </h3>
                            <span className="text-[10px] font-mono text-dim px-2 py-0.5 rounded bg-surfaceAlt border border-line">
                              {group.skills.length} items
                            </span>
                          </div>
                          <p className="text-dim text-xs mb-3.5 sm:mb-4 leading-relaxed">{group.description}</p>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {group.skills.map((skill) => (
                                <span
                                  key={skill.name}
                                  className={`text-xs px-2.5 py-1 rounded-md border font-mono transition-all skill-chip ${skill.highlight
                                      ? 'bg-amber/10 border-amber/30 text-amber font-medium'
                                      : 'bg-surfaceAlt border-line text-text/80'
                                    }`}
                                >
                                  {skill.name}
                                </span>
                              ))}
                            </div>
                          </div>

                            <div className="mt-4 sm:mt-5 pt-3 border-t border-line/60 flex items-center justify-between text-[11px] font-mono text-dim">
                              <span>Domain</span>
                              <span className="text-teal">Enterprise Grade</span>
                            </div>
                          </div>
          ))}
                        </div>
                      </div>
    </section>
                )
}
