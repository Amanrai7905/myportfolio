import { educations } from '../data/education'
import { useInView } from '../hooks/useInView'

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
      <section id="education" ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 border-t border-line">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="endpoint-label mb-1.5 sm:mb-2">GET /education</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6 sm:mb-8">Education &amp; Credentials</h2>

            <div className="space-y-4 sm:space-y-6">
              {educations.map((edu) => (
                <div
                  key={edu.institution}
                  className="bg-surface border border-line rounded-xl p-4 sm:p-6 md:p-8 hover:border-line/90 transition-all shadow-sm"
                >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-3 mb-2">
                      <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-text flex items-center gap-2">
                            <span>🎓</span>
                            <span>{edu.degree}</span>
                          </h3>
                          <p className="text-amber font-mono text-xs sm:text-sm mt-0.5">{edu.institution}</p>
                      </div>
                          <div className="text-left sm:text-right mt-1 sm:mt-0 flex flex-wrap sm:flex-col items-center sm:items-end gap-2 sm:gap-0.5">
                            <span className="font-mono text-xs text-teal px-2.5 py-0.5 sm:py-1 rounded bg-teal/10 border border-teal/20 inline-block">
                              {edu.period}
                            </span>
                            <span className="text-dim text-xs">{edu.location}</span>
                          </div>
                      </div>

                        <div className="space-y-2 mt-3.5 sm:mt-4 text-dim text-xs sm:text-sm leading-relaxed">
                          {edu.details.map((detail, i) => (
                            <p key={i} className="flex items-start gap-2.5 text-text/85">
                              <span className="text-teal font-bold shrink-0 text-xs sm:text-sm">▸</span>
                              <span>{detail}</span>
                            </p>
                          ))}
                        </div>

                        {edu.highlights && (
                            <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-line/60 flex flex-wrap items-center gap-1.5">
                              <span className="font-mono text-xs text-dim mr-2">Focus Areas:</span>
                              {edu.highlights.map((h) => (
                                <span
                                  key={h}
                                  className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-surfaceAlt border border-line text-text/80 font-mono"
                                >
                                  {h}
                                </span>
                              ))}
                            </div>
              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                  )
}
