import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="top" className="relative max-w-5xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className={`endpoint-label mb-4 ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '100ms' }}>GET /developers/aman-rai</p>
          <h1 className={`text-4xl md:text-6xl font-extrabold text-text leading-tight ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '160ms' }}>
            Aman Rai
          </h1>
          <p className={`mt-3 text-xl md:text-2xl text-teal font-mono ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '220ms' }}>
            .NET Developer
          </p>
          <p className={`mt-6 text-dim text-base md:text-lg leading-relaxed max-w-md ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '280ms' }}>
            3+ years building secure, high-performance web applications and APIs
            with ASP.NET Core, Entity Framework Core, SQL Server, and React.js.
          </p>
          <div className={`mt-8 flex flex-wrap gap-3 ${mounted ? 'fade-up' : ''}`} style={{ animationDelay: '340ms' }}>
            <a
              href="#projects"
              className="px-5 py-2.5 bg-amber text-bg font-semibold rounded hover:opacity-90 transition-opacity btn-cta transform-gpu"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border border-line text-text rounded hover:border-teal hover:text-teal transition-colors btn-cta transform-gpu"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative bg-surface border border-line rounded-lg overflow-hidden shadow-2xl">
          <div className="absolute -right-16 -top-8 hero-blob float-anim" aria-hidden="true" />
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-surfaceAlt">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-dim">response.json</span>
          </div>
          <pre className="relative font-mono text-xs md:text-sm p-5 leading-relaxed overflow-x-auto">
<code>
<span className="text-dim">{'{'}</span>{"\n"}
{'  '}<span className="text-teal">"status"</span>: <span className="text-amber">200</span>,{"\n"}
{'  '}<span className="text-teal">"role"</span>: <span className="text-amber">".NET Developer"</span>,{"\n"}
{'  '}<span className="text-teal">"experience"</span>: <span className="text-amber">"3+ years"</span>,{"\n"}
{'  '}<span className="text-teal">"stack"</span>: [{"\n"}
{'    '}<span className="text-amber">"ASP.NET Core"</span>,{"\n"}
{'    '}<span className="text-amber">"React.js"</span>,{"\n"}
{'    '}<span className="text-amber">"SQL Server"</span>{"\n"}
{'  '}],{"\n"}
{'  '}<span className="text-teal">"location"</span>: <span className="text-amber">"Mohali, India"</span>,{"\n"}
{'  '}<span className="text-teal">"open_to_relocate"</span>: <span className="text-amber">true</span><span className="blink-cursor" />{"\n"}
<span className="text-dim">{'}'}</span>
</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
