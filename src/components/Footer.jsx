import { personalInfo } from '../data/personal'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-line bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-mono text-xs text-dim">
            © {new Date().getFullYear()} {personalInfo.name} — Built with React &amp; Tailwind CSS
          </p>
          <p className="font-mono text-[11px] text-dim/80 mt-1">
            status:{' '}
            <span className="text-teal font-medium">available for hire (.NET / Full-Stack)</span>
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-dim hover:text-text transition-colors"
          >
            GitHub
          </a>
          <span className="text-line">•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-dim hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-line">•</span>
          <button
            onClick={scrollToTop}
            className="text-amber hover:underline flex items-center gap-1 focus:outline-none"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
