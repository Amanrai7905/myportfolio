export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-xs text-dim">
          © {new Date().getFullYear()} Aman Rai. Built with React &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-dim">status: <span className="text-teal">available for hire</span></p>
      </div>
    </footer>
  )
}
