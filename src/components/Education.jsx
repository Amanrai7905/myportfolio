export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-16 border-t border-line">
      <p className="endpoint-label mb-3">GET /education</p>
      <h2 className="text-2xl md:text-3xl font-bold text-text mb-8">Education</h2>

      <div className="bg-surface border border-line rounded-lg p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-text">
            Diploma in Information Technology
          </h3>
          <span className="font-mono text-xs text-teal">2019 — 2022</span>
        </div>
        <p className="text-dim text-sm mt-1">Government Polytechnic Aurai, Bhadohi</p>
        <p className="text-dim text-sm mt-3">
          Includes a 7-month apprenticeship in .NET technologies (ASP.NET, SQL Server)
          at Techpile Technology Pvt. Ltd., Lucknow.
        </p>
      </div>
    </section>
  )
}
