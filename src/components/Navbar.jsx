import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <a href="#top" className="font-mono text-sm text-text tracking-wide flex items-center gap-2">
          <span className="inline-block w-7 h-7 rounded-sm bg-amber/20 text-amber grid place-items-center font-bold">AR</span>
          <span className="hidden sm:inline">aman<span className="text-amber">.</span>rai</span>
        </a>

        <button
          className="md:hidden p-2 rounded-md text-dim hover:text-text focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Toggle menu</span>
          {!open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs text-dim hover:text-teal transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline font-mono text-xs px-4 py-1.5 border border-amber text-amber rounded hover:bg-amber hover:text-bg transition-colors"
        >
          hire_me()
        </a>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 top-full z-40 bg-bg/95 backdrop-blur border-t border-line transition-all ${open ? 'block' : 'hidden'}`}
        >
          <div className="px-6 py-4">
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block font-mono text-sm text-text/90 py-2 px-3 rounded hover:bg-amber/10 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-block font-mono text-sm px-4 py-2 border border-amber text-amber rounded hover:bg-amber hover:text-bg transition-colors"
                >
                  hire_me()
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
