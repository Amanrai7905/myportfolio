import { useEffect, useState } from 'react'

const skillGroups = [
  { label: 'Languages', items: ['C#', 'SQL', 'JavaScript'] },
  { label: 'Backend', items: ['ASP.NET Core', 'ASP.NET MVC', 'ASP.NET Web API', '.NET 8', 'Entity Framework Core', 'LINQ', 'REST API'] },
  { label: 'Auth & Security', items: ['JWT Authentication', 'Authorization', 'RBAC'] },
  { label: 'Frontend', items: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'React.js', 'jQuery'] },
  { label: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Stored Procedures', 'Query Optimization'] },
  { label: 'Tools', items: ['Git', 'Postman', 'Swagger/OpenAPI', 'Docker', 'IIS', 'SSMS'] },
]

const proficiency = {
  'C#': 94,
  'SQL': 88,
  'JavaScript': 76,
  'ASP.NET Core': 91,
  'Entity Framework Core': 89,
  'React.js': 72,
}

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <p className={`endpoint-label mb-3 ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '60ms' }}>GET /skills</p>
      <h2 className={`text-2xl md:text-3xl font-bold text-text mb-8 ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '120ms' }}>Technical Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, gi) => (
          <div key={group.label} className={`bg-surface border border-line rounded-lg p-5 card-entrance shimmer`} style={{ animationDelay: `${gi * 80}ms` }}>
            <h3 className="font-mono text-xs text-amber mb-3 uppercase tracking-wide">
              {group.label}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 skill-chip bg-surfaceAlt text-dim rounded border border-line"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid gap-2">
                {group.items.filter((it) => proficiency[it]).map((it) => (
                  <div key={it} className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-dim">
                      <span>{it}</span>
                      <span className="font-mono text-xs text-amber">{proficiency[it]}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: mounted ? `${proficiency[it]}%` : '6%' }}
                        aria-hidden
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
