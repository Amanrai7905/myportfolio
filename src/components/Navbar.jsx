import { useEffect, useState } from 'react'
import { personalInfo } from '../data/personal'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection(['about', 'skills', 'experience', 'projects', 'education', 'contact'])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md transition-all">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-3">
          {/* Logo / Monogram */}
              <a href="#top" className="font-mono text-sm text-text tracking-wide flex items-center gap-3 group min-w-0">
                <span className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber to-red-500 text-white shadow-[0_10px_24px_rgba(229,57,53,0.2)] border border-amber/20 grid place-items-center font-black text-[10px] sm:text-xs tracking-[0.18em] transition-transform duration-200 group-hover:scale-105 group-hover:shadow-[0_12px_28px_rgba(229,57,53,0.28)]">
                  AR
                  <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
                </span>
                <span className="flex items-center min-w-0">
                  <span className="truncate text-base sm:text-lg font-semibold tracking-[-0.04em] text-text">
                    Aman <span className="text-amber">Rai</span>
                  </span>
                  <span className="hidden xs:inline-block text-[9px] sm:text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-full bg-teal/10 text-teal border border-teal/20 ml-2 align-middle">
                    .NET Developer
                  </span>
                </span>
              </a>

                  {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex items-center gap-5 lg:gap-6">
                      {links.map((link) => {
                        const isActive = activeSection === link.id
                        return (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              className={`font-mono text-xs transition-colors py-1 relative ${isActive ? 'text-teal font-semibold' : 'text-dim hover:text-text'
                                }`}
                            >
                              <span className="text-line mr-0.5 font-normal">/</span>
                              {link.label}
                              {isActive && (
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal rounded-full" />
                              )}
                            </a>
                          </li>
                        )
                      })}
                    </ul>

                    {/* Socials & Action Button */}
                      <div className="hidden md:flex items-center gap-2.5">
                        <a
                          href={personalInfo.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub Profile"
                          className="p-1.5 text-dim hover:text-text hover:bg-surfaceAlt rounded transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                        <a
                          href={personalInfo.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="LinkedIn Profile"
                          className="p-1.5 text-dim hover:text-text hover:bg-surfaceAlt rounded transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                          </svg>
                        </a>
                        <a
                          href="#contact"
                          className="font-mono text-xs px-3.5 py-1.5 border border-amber/70 text-amber rounded hover:bg-amber hover:text-bg font-semibold transition-all shadow-sm"
                        >
                          hire_me()
                        </a>
                      </div>

                      {/* Mobile menu trigger */}
                      <div className="flex items-center gap-2 md:hidden">
                        <a
                          href="#contact"
                          className="font-mono text-xs px-2.5 py-1.5 border border-amber/70 text-amber rounded hover:bg-amber hover:text-bg font-semibold transition-colors"
                        >
                          hire_me()
                        </a>
                        <button
                          className="p-2 rounded-md text-dim hover:text-text hover:bg-surfaceAlt focus:outline-none touch-manipulation"
                          aria-controls="mobile-menu"
                          aria-expanded={open}
                          onClick={() => setOpen((s) => !s)}
                        >
                          <span className="sr-only">Toggle navigation menu</span>
                          {!open ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="3" y1="6" x2="21" y2="6" />
                              <line x1="3" y1="12" x2="21" y2="12" />
                              <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                          ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          )}
                        </button>
                      </div>

                      {/* Mobile Menu Dropdown & Backdrop */}
                      {open && (
                            <>
                              <div
                                className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-30 md:hidden"
                                onClick={() => setOpen(false)}
                                aria-hidden="true"
                              />
                              <div
                                id="mobile-menu"
                                className="md:hidden absolute left-0 right-0 top-full z-40 bg-surface border-b border-line shadow-2xl animate-fade-in"
                              >
                                <div className="px-5 py-4 flex flex-col gap-3">
                                  <ul className="flex flex-col gap-1">
                                    {links.map((link) => {
                                      const isActive = activeSection === link.id
                                      return (
                                        <li key={link.href}>
                                          <a
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className={`flex items-center min-h-[44px] font-mono text-sm py-2 px-3 rounded-lg transition-colors ${isActive
                                                ? 'bg-amber/15 text-amber font-semibold'
                                                : 'text-text/80 hover:bg-surfaceAlt hover:text-text'
                                              }`}
                                          >
                                            <span className="text-dim mr-2 font-normal">/</span>
                                            {link.label}
                                          </a>
                                        </li>
                                      )
                                    })}
                                  </ul>

                                      <div className="pt-3 border-t border-line flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                          <a
                                            href={personalInfo.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="GitHub"
                                            className="p-2.5 text-dim hover:text-text bg-surfaceAlt rounded-lg min-h-[40px] min-w-[40px] flex items-center justify-center"
                                          >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                            </svg>
                                          </a>
                                          <a
                                            href={personalInfo.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="LinkedIn"
                                            className="p-2.5 text-dim hover:text-text bg-surfaceAlt rounded-lg min-h-[40px] min-w-[40px] flex items-center justify-center"
                                          >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                                            </svg>
                                          </a>
                                        </div>
                                        <span className="text-[11px] font-mono text-dim">
                                          Mohali, India
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                              </>
        )}
                            </nav>
                          </header>
                          )
}
