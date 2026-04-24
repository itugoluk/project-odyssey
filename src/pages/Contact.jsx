import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Contact.css'

const channels = [
  { label: 'Email', value: 'hello@projectodyssey.ai', href: 'mailto:hello@projectodyssey.ai' },
  { label: 'GitHub', value: '@ivantu', href: 'https://github.com' },
  { label: 'LinkedIn', value: 'Ivan Tugolukov', href: 'https://linkedin.com' },
]

const openTo = [
  'Collaboration',
  'Sport-tech briefs',
  'Research conversations',
  'Introductions',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'Collaboration', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 900)
  }

  return (
    <motion.div
      className="page contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="shell contact-hero">
        <div className="contact-hero-top">
          <span className="eyebrow">§ 02 — Open line</span>
          <span className="contact-hero-date">CET — Madrid</span>
        </div>

        <motion.h1
          className="display contact-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Start a
          <br />
          <span className="accent">conversation.</span>
        </motion.h1>

        <motion.div
          className="contact-lede"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="prose-lg">
            Have an idea, a brief, or a question? Reach out directly.
            Replies are personal, not templated — <em>usually within a day</em>.
          </p>
          <div className="contact-availability">
            <span className="dot dot-signal" aria-hidden="true" />
            <span className="contact-availability-label">
              Available — taking on one collaboration this quarter
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── Form + sidebar ───────────────────────────── */}
      <section className="shell contact-layout">
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <header className="contact-form-head">
            <span className="index-mark">§ 02.01 — Compose</span>
            <h2 className="contact-form-title">
              Send a <em>message</em>
            </h2>
          </header>

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                className="form-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-mark" aria-hidden="true">
                  <svg viewBox="0 0 48 48" width="48" height="48">
                    <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M14 24 L21 31 L34 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                </div>
                <h3 className="success-title">Message received</h3>
                <p className="success-body">
                  Filed under <em>{form.topic}</em>.
                  <br />
                  You'll hear from us within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="form-body"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="form-row form-row-split">
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-name">
                      <span className="form-label-num">01</span>
                      <span>Your name</span>
                    </label>
                    <input
                      id="f-name"
                      className="form-input"
                      type="text"
                      placeholder="Jane Hart"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-email">
                      <span className="form-label-num">02</span>
                      <span>Email</span>
                    </label>
                    <input
                      id="f-email"
                      className="form-input"
                      type="email"
                      placeholder="jane@field.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="f-topic">
                    <span className="form-label-num">03</span>
                    <span>Filed under</span>
                  </label>
                  <div className="form-topic-group" role="radiogroup">
                    {openTo.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className={`form-topic ${form.topic === t ? 'is-selected' : ''}`}
                        onClick={() => setForm({ ...form, topic: t })}
                        aria-pressed={form.topic === t}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="f-message">
                    <span className="form-label-num">04</span>
                    <span>Message</span>
                  </label>
                  <textarea
                    id="f-message"
                    className="form-input form-textarea"
                    placeholder="What are you building, and where might we overlap?"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <div className="form-footer">
                  <span className="form-footer-meta">
                    Encrypted · Not shared with third parties
                  </span>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={sending}
                  >
                    {sending ? 'Sending…' : 'Send message'}
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.aside
          className="contact-aside"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="contact-card">
            <span className="index-mark">§ 02.02 — Direct</span>
            <h3 className="contact-card-title">Channels</h3>
            <ul className="contact-channels">
              {channels.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="contact-channel">
                    <span className="contact-channel-label">{c.label}</span>
                    <span className="contact-channel-value">{c.value}</span>
                    <span className="contact-channel-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-card">
            <span className="index-mark">§ 02.03 — Logistics</span>
            <h3 className="contact-card-title">Working details</h3>
            <dl className="contact-details">
              <div>
                <dt>Based</dt>
                <dd>Madrid, Spain · Singapore roots</dd>
              </div>
              <div>
                <dt>Time zone</dt>
                <dd>CET (UTC+1)</dd>
              </div>
              <div>
                <dt>Response</dt>
                <dd>Within 24 hours</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Sport-tech · AI · Product</dd>
              </div>
            </dl>
          </div>
        </motion.aside>
      </section>

      <footer className="shell colophon">
        <span>Project Odyssey</span>
        <span className="colophon-dot">·</span>
        <span>Open line — Vol. I</span>
        <span className="colophon-spacer" />
        <span>MMXXVI</span>
      </footer>
    </motion.div>
  )
}
