import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
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
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ type: 'spring', stiffness: 200, damping: 24 }}
    >
      <section className="contact-hero">
        <div className="contact-hero-content">
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
          >
            Let's talk
          </motion.p>
          <motion.h1
            className="contact-title"
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, type: 'spring', stiffness: 140, damping: 18 }}
          >
            Get in
            <br />
            <span className="text-accent">Touch</span>
          </motion.h1>
          <motion.div
            className="contact-lead-block"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, type: 'spring', stiffness: 180, damping: 22 }}
          >
            <p className="contact-lead">
              Have an idea, a question, or want to collaborate?
            </p>
            <p className="contact-lead contact-lead-secondary">
              Reach out directly — responses are personal, not automated.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="contact-hero-visual glass"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 140, damping: 20 }}
        >
          <div className="contact-status-row">
            <span className="contact-status-dot" />
            <span className="contact-status-text">Available now</span>
          </div>
          <div className="contact-divider" />
          <div className="contact-meta-item">
            <span className="contact-meta-label">Response time</span>
            <span className="contact-meta-value">Within 24 hours</span>
          </div>
          <div className="contact-meta-item">
            <span className="contact-meta-label">Time zone</span>
            <span className="contact-meta-value">CET — Madrid</span>
          </div>
          <div className="contact-meta-item">
            <span className="contact-meta-label">Open to</span>
            <span className="contact-meta-value contact-meta-highlight">Collaboration · Ideas · Feedback</span>
          </div>
          <div className="contact-arc-wrap" aria-hidden="true">
            <div className="contact-arc contact-arc-1" />
            <div className="contact-arc contact-arc-2" />
          </div>
        </motion.div>
      </section>

      <div className="contact-layout">
        <motion.form
          className="contact-form glass"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.22, type: 'spring', stiffness: 160, damping: 22 }}
        >
          {sent ? (
            <motion.div
              className="form-success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            >
              <div className="success-icon">✓</div>
              <h3>Message sent</h3>
              <p>We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-input"
                  placeholder="What's on your mind?"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary"
                disabled={sending}
                whileHover={sending ? {} : { scale: 1.03, y: -2 }}
                whileTap={sending ? {} : { scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 420, damping: 16 }}
                style={{ opacity: sending ? 0.7 : 1 }}
              >
                {sending ? 'Sending...' : 'Send message'}
              </motion.button>
            </>
          )}
        </motion.form>

        <motion.div
          className="contact-details"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.32, type: 'spring', stiffness: 160, damping: 22 }}
        >
          {[
            { label: 'Based in', value: 'Madrid, Spain' },
            { label: 'Focus areas', value: 'Sports Tech · AI · Product' },
            { label: 'Status', value: 'Open to collaboration', highlight: true },
          ].map(({ label, value, highlight }) => (
            <motion.div
              key={label}
              className="contact-detail-item glass"
              whileHover={{ scale: 1.025, y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <p className="detail-label">{label}</p>
              <p className={`detail-value${highlight ? ' detail-open' : ''}`}>{value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
