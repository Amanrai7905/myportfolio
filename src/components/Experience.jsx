const highlights = [
  'Developed and maintained 20+ RESTful APIs for Education, E-Commerce, and Business Management applications',
  'Implemented JWT authentication and role-based authorization for secure API access',
  'Integrated React.js front-end applications with ASP.NET Core Web APIs',
  'Implemented Redis caching and Hangfire background jobs to improve performance',
  'Containerized applications using Docker and documented APIs with Swagger/OpenAPI',
]

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <p className="endpoint-label mb-3">GET /experience</p>
      <h2 className="text-2xl md:text-3xl font-bold text-text mb-8">Professional Experience</h2>

      <div className="bg-surface border border-line rounded-lg p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="text-lg md:text-xl font-semibold text-text">.NET Developer</h3>
          <span className="font-mono text-xs text-teal">Mar 2023 — Present</span>
        </div>
        <p className="text-dim text-sm mb-5">Bloomwise Infotech Pvt. Ltd., Mohali</p>
        <ul className="space-y-3">
          {highlights.map((point) => (
            <li key={point} className="flex gap-3 text-dim text-sm md:text-base leading-relaxed">
              <span className="text-amber mt-1">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
