export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <p className="endpoint-label mb-3">POST /contact</p>
      <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">Let's build something</h2>
      <p className="text-dim max-w-xl mb-8">
        Open to full-time .NET / full-stack roles in Noida, Gurgaon, Delhi NCR, or Bangalore.
        Feel free to reach out directly.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:amanrai965194@gmail.com"
          className="px-5 py-3 bg-amber text-bg font-semibold rounded hover:opacity-90 transition-opacity"
        >
          amanrai965194@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/amanrai4885"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 border border-line text-text rounded hover:border-teal hover:text-teal transition-colors"
        >
          LinkedIn ↗
        </a>
        <a
          href="tel:7905804885"
          className="px-5 py-3 border border-line text-text rounded hover:border-teal hover:text-teal transition-colors"
        >
          +91 79058 04885
        </a>
      </div>
    </section>
  )
}
