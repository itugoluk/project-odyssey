import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

const projects = [
  {
    id: '001',
    name: 'Spurs Tracker',
    domain: 'Sport · Football Analytics',
    year: '2026',
    status: 'In development',
    description:
      'AI-powered performance tracking for Tottenham Hotspur. Surfaces tactical patterns, automates match analysis, and reframes how supporters read the game.',
    tags: ['Football', 'Vision', 'Language models'],
  },
  {
    id: '002',
    name: 'Personal Agent',
    domain: 'Productivity · Systems',
    year: '2026',
    status: 'In development',
    description:
      'A quiet assistant that lives inside your workflow. Not a chat window — a set of hooks that capture intent, route context, and unblock decisions.',
    tags: ['Agents', 'Workflow', 'Memory'],
  },
]

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Home() {
  return (
    <motion.div
      className="page home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="hero shell">
        <div className="hero-top">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Volume I — 2026
          </motion.span>
          <motion.span
            className="hero-coords"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            40.4168° N  ·  3.7038° W
          </motion.span>
        </div>

        <div className="hero-body">
          <motion.h1
            className="display hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            An atlas
            <br />
            of <em>artificial</em>
            <br />
            <span className="accent">intelligence.</span>
          </motion.h1>

          <motion.aside
            className="hero-side"
            initial="hidden"
            animate="show"
            variants={fade}
            custom={4}
          >
            <p className="hero-side-label">On this volume</p>
            <p className="hero-side-body">
              Project Odyssey is an AI-first studio. We build intelligent
              products where the gap between available data and human
              understanding is largest. Sport is the first front; the approach
              scales.
            </p>
            <div className="hero-side-ctas">
              <Link to="/about" className="btn btn-primary">
                Read the studio note <span className="btn-arrow">→</span>
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Start a conversation
              </Link>
            </div>
          </motion.aside>
        </div>

        <motion.div
          className="hero-horizon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          aria-hidden="true"
        >
          <div className="horizon-labels">
            <span>00</span>
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
            <span>06</span>
            <span>07</span>
            <span>08</span>
            <span>09</span>
            <span>10</span>
          </div>
          <div className="horizon-line">
            <span className="horizon-tick" style={{ left: '0%' }} />
            <span className="horizon-tick" style={{ left: '10%' }} />
            <span className="horizon-tick" style={{ left: '20%' }} />
            <span className="horizon-tick" style={{ left: '30%' }} />
            <span className="horizon-tick" style={{ left: '40%' }} />
            <span className="horizon-tick" style={{ left: '50%' }} />
            <span className="horizon-tick" style={{ left: '60%' }} />
            <span className="horizon-tick" style={{ left: '70%' }} />
            <span className="horizon-tick" style={{ left: '80%' }} />
            <span className="horizon-tick" style={{ left: '90%' }} />
            <span className="horizon-tick" style={{ left: '100%' }} />
            <span className="horizon-cursor" />
          </div>
          <div className="horizon-readout">
            <span>Active field</span>
            <span className="horizon-dash">—</span>
            <span className="horizon-value">Sport · AI · Product</span>
          </div>
        </motion.div>
      </section>

      {/* ─── Manifesto pull-quote ────────────────────── */}
      <section className="shell manifesto-wrap">
        <motion.div
          className="manifesto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="manifesto-mark" aria-hidden="true">§</span>
          <blockquote className="manifesto-quote">
            AI is not a <em>feature</em>. It is the <em>foundation</em> —
            and we build on it deliberately, without compromise.
          </blockquote>
          <span className="manifesto-byline">
            Editorial — Ivan Tugolukov, Founder
          </span>
        </motion.div>
      </section>

      {/* ─── Projects catalog ─────────────────────────── */}
      <section className="shell catalog-wrap">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-head-title">
            Field <em>work</em>, <br />currently in motion.
          </h2>
          <div className="section-head-meta">
            <span>§ 02 — The catalog</span>
            <span>Two projects, both active</span>
          </div>
        </motion.header>

        <ul className="catalog">
          {projects.map((p, i) => (
            <motion.li
              key={p.id}
              className="catalog-entry"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="catalog-index">
                <span className="catalog-id">{p.id}</span>
                <span className="catalog-year">{p.year}</span>
              </div>
              <div className="catalog-body">
                <p className="catalog-domain">{p.domain}</p>
                <h3 className="catalog-name">{p.name}</h3>
                <p className="catalog-desc">{p.description}</p>
                <div className="catalog-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="catalog-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="catalog-status">
                <span className="dot dot-signal" aria-hidden="true" />
                <span className="catalog-status-label">{p.status}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ─── Closing editorial note ─────────────────── */}
      <section className="shell closing-wrap">
        <motion.div
          className="closing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="closing-left">
            <span className="index-mark">§ 03 — Next</span>
          </div>
          <div className="closing-center">
            <p className="prose-lg">
              If you're building in sport, systems, or AI, and the work
              feels aligned — we'd rather talk than describe.
            </p>
          </div>
          <div className="closing-right">
            <Link to="/contact" className="btn btn-primary">
              Open a line <span className="btn-arrow">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Colophon strip */}
      <footer className="shell colophon">
        <span>Project Odyssey</span>
        <span className="colophon-dot">·</span>
        <span>Madrid / Singapore</span>
        <span className="colophon-dot">·</span>
        <span>Volume I — 2026</span>
        <span className="colophon-spacer" />
        <span>MMXXVI</span>
      </footer>
    </motion.div>
  )
}
