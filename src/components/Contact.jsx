import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { personalInfo } from '../data/personal'
import { useInView } from '../hooks/useInView'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const emailJsConfigured = Boolean(serviceId && templateId && publicKey)

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15 })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitMessage, setSubmitMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const formRef = useRef(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2200)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const cleanName = formData.name.trim()
    const cleanEmail = formData.email.trim()
    const cleanMessage = formData.message.trim()

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return
    }

    setIsSending(true)
    setSubmitMessage('')

    try {
      if (!emailJsConfigured) {
        throw new Error('EmailJS not configured')
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

      setFormData({ name: '', email: '', message: '' })
      setSubmitMessage('✅ Your message was sent successfully.')
    } catch (error) {
      const subject = `Portfolio Inquiry from ${cleanName}`
      const body = [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        '',
        'Message:',
        cleanMessage,
      ].join('\n')

      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
      setSubmitMessage('⚠️ Email service is not configured yet, so your email client opened instead.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 border-t border-line">
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <p className="endpoint-label mb-2">POST /contact</p>
        <h2 className="text-2xl md:text-4xl font-bold text-text mb-3">
          Let&apos;s build something exceptional
        </h2>
        <p className="text-dim max-w-2xl mb-10 text-base leading-relaxed">
          I am actively exploring full-time opportunities as a <span className="text-text font-medium">.NET Developer</span> or{' '}
          <span className="text-text font-medium">Full-Stack Engineer</span> in{' '}
          <span className="text-teal font-medium">Noida, Gurgaon, Delhi NCR, Bangalore, or Remote</span>. Whether you have an open role, a freelance architecture project, or just want to connect, my inbox is always open.
        </p>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-surface border border-line rounded-xl p-5 hover:border-line/90 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-dim uppercase">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="font-mono text-[11px] text-amber hover:underline flex items-center gap-1"
                >
                  {copiedEmail ? '✓ Copied!' : 'Copy to clipboard'}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-text font-mono text-sm md:text-base font-semibold hover:text-teal transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="bg-surface border border-line rounded-xl p-5 hover:border-line/90 transition-all shadow-sm">
              <span className="font-mono text-xs text-dim uppercase block mb-2">Phone / WhatsApp</span>
              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="text-text font-mono text-base font-semibold hover:text-teal transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-surface border border-line rounded-xl p-4 hover:border-teal hover:text-teal transition-all flex items-center justify-between group shadow-sm"
              >
                <div>
                  <span className="text-xs text-dim block font-mono">Professional</span>
                  <span className="text-sm font-semibold text-text group-hover:text-teal">LinkedIn</span>
                </div>
                <span className="text-teal text-lg">↗</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="bg-surface border border-line rounded-xl p-4 hover:border-amber hover:text-amber transition-all flex items-center justify-between group shadow-sm"
              >
                <div>
                  <span className="text-xs text-dim block font-mono">Code Repos</span>
                  <span className="text-sm font-semibold text-text group-hover:text-amber">GitHub</span>
                </div>
                <span className="text-amber text-lg">↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface border border-line rounded-xl p-6 md:p-7 shadow-sm">
            <h3 className="text-lg font-bold text-text mb-1 flex items-center gap-2">
              <span>Send a Quick Message</span>
              <span className="font-mono text-xs text-teal font-normal px-2 py-0.5 rounded bg-teal/10 border border-teal/20">
                Direct Dispatch
              </span>
            </h3>
            <p className="text-dim text-xs mb-5">
              Messages are sent through a real backend-powered email service when configured.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-dim mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full bg-surfaceAlt border border-line rounded-lg px-3.5 py-2.5 text-sm text-text placeholder-dim/50 focus:outline-none focus:border-amber transition-colors font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-dim mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full bg-surfaceAlt border border-line rounded-lg px-3.5 py-2.5 text-sm text-text placeholder-dim/50 focus:outline-none focus:border-amber transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-dim mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, team, or role..."
                  className="w-full bg-surfaceAlt border border-line rounded-lg px-3.5 py-2.5 text-sm text-text placeholder-dim/50 focus:outline-none focus:border-amber transition-colors font-sans resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto px-6 py-2.5 bg-amber text-bg font-semibold rounded hover:brightness-110 btn-cta shadow-md shadow-amber/10 text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSending ? 'Sending...' : 'Dispatch Message'}</span>
                  <span className="font-mono">→</span>
                </button>

                {submitMessage && (
                  <span className="text-xs font-mono text-teal animate-fade-in">
                    {submitMessage}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
