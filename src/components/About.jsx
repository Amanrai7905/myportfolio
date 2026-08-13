import { useEffect, useState } from 'react'

const skills = [
  'C#',
  'ASP.NET Core',
  'Entity Framework',
  'SQL Server',
  'React.js',
  'Docker',
  'Redis',
]

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <p className={`endpoint-label mb-3 ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '80ms' }}>GET /about</p>
          <h2 className={`text-2xl md:text-3xl font-bold text-text mb-4 ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '140ms' }}>
            Summary
          </h2>
          <p className={`text-dim text-base md:text-lg leading-relaxed max-w-3xl ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '200ms' }}>
            Results-driven <span className="text-text font-semibold">.NET Developer</span> with 3+ years of experience designing, developing, and maintaining
            enterprise web applications using <span className="text-text">ASP.NET Core, C#, Entity Framework Core, and SQL Server</span>. I build secure
            RESTful APIs, implement JWT authentication, optimize SQL queries, and integrate React.js front-ends.
            Comfortable with Docker, Redis, Hangfire, and following SOLID principles and clean architecture patterns.
          </p>
        </div>

        <aside className={`rounded-lg border border-line bg-surface p-5 shadow-sm ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '260ms' }}>
          <p className="font-mono text-xs text-dim mb-3">Technologies & Tools</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span
                key={s}
                className="text-xs px-3 py-1 rounded-md bg-surfaceAlt border border-transparent text-text/90 hover:scale-105 transform transition-transform"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-4 text-dim text-sm">Open to new opportunities and collaborations.</p>
        </aside>
      </div>
    </section>
  )
}
