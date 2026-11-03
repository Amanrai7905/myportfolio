import { useState } from 'react'
import { personalInfo } from '../data/personal'
import { useInView } from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [copied, setCopied] = useState(false)

  const jsonSnippet = `{
  "status": 200,
  "developer": "Aman Rai",
  "role": ".NET Developer",
  "experience": "3+ years",
  "stack": [
    "C#",
    "ASP.NET Core / .NET 8",
    "SQL Server",
    "Entity Framework Core",
    "Redis & Hangfire",
    "React.js"
  ],
  "open_to_relocate": true
}`

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
        <section id="top" ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-14 sm:pt-14 sm:pb-20 md:pt-20 md:pb-28">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Intro & CTAs */}
            <div>
              {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/30 text-teal font-mono text-xs mb-3 sm:mb-4">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  <span>Available for Full-time Roles</span>
                </div>

                  <p className="endpoint-label mb-1.5 sm:mb-2">GET /developers/aman-rai</p>
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-text tracking-tight leading-tight">
                    Aman Rai
                  </h1>
                    <p className="mt-1.5 sm:mt-2 text-lg sm:text-xl md:text-2xl text-teal font-mono font-medium">
                      .NET Developer <span className="text-dim text-sm sm:text-base font-normal">| Full-Stack</span>
                    </p>

                      <p className="mt-4 sm:mt-5 text-dim text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                        3+ years engineering secure, enterprise-grade web applications and high-throughput REST APIs
                        using <span className="text-text font-medium">ASP.NET Core, EF Core, SQL Server</span>, and modern <span className="text-text font-medium">React.js</span> frontends.
                      </p>

                        {/* Action Buttons: Responsive full-width on mobile, auto on sm+ */}
                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                          <a
                            href="#projects"
                            className="px-5 py-2.5 sm:py-2.5 bg-amber text-bg font-semibold rounded-lg hover:brightness-110 btn-cta shadow-md shadow-amber/10 text-sm text-center min-h-[44px] flex items-center justify-center"
                          >
                            View projects
                          </a>

                          <a
                            href={personalInfo.resumeUrl}
                            download="Aman_Rai_Resume.pdf"
                            className="px-5 py-2.5 sm:py-2.5 border border-teal/70 text-teal hover:bg-teal hover:text-bg font-semibold rounded-lg transition-all btn-cta flex items-center justify-center gap-2 text-sm shadow-sm min-h-[44px]"
                          >
                              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              <span>Download CV</span>
                          </a>

                          <a
                            href="#contact"
                            className="px-5 py-2.5 sm:py-2.5 border border-line text-text/90 rounded-lg hover:border-amber hover:text-amber transition-colors btn-cta text-sm text-center min-h-[44px] flex items-center justify-center"
                          >
                            Get in touch
                          </a>
                        </div>

                        {/* Quick Social & Location Info */}
                          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-line/60 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-dim font-mono">
                            <span className="flex items-center gap-1.5">
                              <span className="text-teal">📍</span> Mohali, India
                            </span>
                            <span className="text-line hidden xs:inline">•</span>
                            <span className="text-text/75">Relocating: NCR / Blr</span>
                            <span className="text-line hidden xs:inline">•</span>
                            <div className="flex items-center gap-3">
                              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-dim hover:text-teal transition-colors">
                                GitHub ↗
                              </a>
                              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-dim hover:text-teal transition-colors">
                                LinkedIn ↗
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Right Column: Interactive Terminal */}
                          <div className="relative mt-2 md:mt-0">
                            <div className="relative bg-surface border border-line rounded-xl overflow-hidden shadow-2xl">
                              {/* Ambient Background Blob */}
                              <div className="absolute -right-16 -top-10 hero-blob float-anim" aria-hidden="true" />

                              {/* Terminal Window Header */}
                                <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-line bg-surfaceAlt/80 backdrop-blur">
                                  <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57] inline-block shadow-sm" />
                                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e] inline-block shadow-sm" />
                                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840] inline-block shadow-sm" />
                                    <span className="ml-2 font-mono text-xs text-dim">response.json</span>
                                  </div>
                                  <button
                                    onClick={handleCopy}
                                    aria-label="Copy JSON"
                                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-bg/60 border border-line text-dim hover:text-text hover:border-teal transition-all flex items-center gap-1.5 touch-manipulation min-h-[30px]"
                                  >
                                    {copied ? (
                                      <>
                                        <span className="text-teal">✓</span>
                                        <span className="text-teal font-medium">Copied!</span>
                                      </>
                                    ) : (
                                      <>
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                        </svg>
                                        <span>copy</span>
                                      </>
                                    )}
                                  </button>
                                </div>

                                {/* Terminal Code Body */}
                                  <pre className="relative font-mono text-[11px] xs:text-xs md:text-sm p-4 sm:p-5 leading-relaxed overflow-x-auto text-text/90">
                                    <code>
                                      <span className="text-dim">{'{'}</span>{"\n"}
                                      {'  '}<span className="text-teal">"status"</span>: <span className="text-amber">200</span>,{"\n"}
                                      {'  '}<span className="text-teal">"developer"</span>: <span className="text-amber">"Aman Rai"</span>,{"\n"}
                                      {'  '}<span className="text-teal">"role"</span>: <span className="text-amber">".NET Developer"</span>,{"\n"}
                                      {'  '}<span className="text-teal">"experience"</span>: <span className="text-amber">"3+ years"</span>,{"\n"}
                                      {'  '}<span className="text-teal">"core_stack"</span>: [{"\n"}
                                      {'    '}<span className="text-amber">"C#"</span>,{"\n"}
                                      {'    '}<span className="text-amber">"ASP.NET Core / .NET 8"</span>,{"\n"}
                                      {'    '}<span className="text-amber">"SQL Server"</span>,{"\n"}
                                      {'    '}<span className="text-amber">"Entity Framework Core"</span>,{"\n"}
                                      {'    '}<span className="text-amber">"Redis &amp; Hangfire"</span>,{"\n"}
                                      {'    '}<span className="text-amber">"React.js"</span>{"\n"}
                                      {'  '}],{"\n"}
                                      {'  '}<span className="text-teal">"open_to_relocate"</span>: <span className="text-amber">true</span><span className="blink-cursor" />{"\n"}
                                      <span className="text-dim">{'}'}</span>
                                    </code>
                                  </pre>
                              </div>
                            </div>
                          </div>
                        </section>
                        )
}
