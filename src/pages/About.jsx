import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './About.css'

// Geometric emergence — right column, no border box.
// viewBox 380×260, centre (190,130). dot → triangle → hexagon → spokes → dissolve.
// Top/bottom hex vertices clip at the column edge — the form extends beyond the frame.
// Cycle: 10s.
const D = 10
const HEX   = 'M 190 35 L 272.3 82.5 L 272.3 177.5 L 190 225 L 107.7 177.5 L 107.7 82.5 Z'
const TRI   = 'M 190 82 L 231.6 154 L 148.4 154 Z'
const SPOKES = ['M 190 82 L 190 35', 'M 231.6 154 L 272.3 177.5', 'M 148.4 154 L 107.7 177.5']
const TRI_PTS = [[190, 82], [231.6, 154], [148.4, 154]]
const HEX_PTS = [[190, 35], [272.3, 82.5], [272.3, 177.5], [190, 225], [107.7, 177.5], [107.7, 82.5]]

function HeroAnimation() {
  return (
    <div className="about-anim-col">
      <svg viewBox="0 0 380 260" className="about-anim-svg" aria-hidden="true">
        <defs>
          <pattern id="form-grid" width="19" height="19" patternUnits="userSpaceOnUse">
            <circle cx="0.8" cy="0.8" r="0.8" fill="var(--ink)" opacity="0.08" />
          </pattern>
        </defs>
        <rect width="380" height="260" fill="url(#form-grid)" />

        {/* Hexagon */}
        <motion.path
          d={HEX} fill="none" stroke="var(--ink)" strokeWidth="0.9" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 0, 1, 1, 0, 0] }}
          transition={{ duration: D, times: [0, 0.18, 0.42, 0.60, 0.78, 1], repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Triangle */}
        <motion.path
          d={TRI} fill="none" stroke="var(--ink)" strokeWidth="0.9" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 0, 1, 1, 0, 0] }}
          transition={{ duration: D, times: [0, 0.03, 0.18, 0.68, 0.82, 1], repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Ember spokes */}
        {SPOKES.map((d, i) => (
          <motion.path
            key={i} d={d} fill="none" stroke="var(--ember)" strokeWidth="0.75"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 0, 1, 1, 0, 0] }}
            transition={{
              duration: D,
              times: [0, 0.40 + i * 0.022, 0.53 + i * 0.01, 0.60, 0.70, 1],
              repeat: Infinity, ease: 'easeInOut',
            }}
          />
        ))}

        {/* Triangle vertex dots */}
        {TRI_PTS.map(([cx, cy], i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={2.5} fill="var(--ink)"
            animate={{ opacity: [0, 0, 0.7, 0.7, 0, 0] }}
            transition={{ duration: D, times: [0, 0.16 + i * 0.015, 0.20, 0.68, 0.80, 1], repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Hexagon vertex dots */}
        {HEX_PTS.map(([cx, cy], i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={1.75} fill="var(--ink)"
            animate={{ opacity: [0, 0, 0.45, 0.45, 0, 0] }}
            transition={{ duration: D, times: [0, 0.38 + i * 0.008, 0.44, 0.60, 0.74, 1], repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Seed dot */}
        <motion.circle cx={190} cy={130} r={3.5} fill="var(--ember)"
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{ duration: D, times: [0, 0.02, 0.05, 0.80, 0.86, 1], repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

const principles = [
  {
    n: '01',
    title: 'Precision',
    body:
      'Every decision is deliberate. Interfaces, models, and systems perform exactly as intended — without excess and without ambiguity.',
  },
  {
    n: '02',
    title: 'Velocity',
    body:
      'Speed of execution without sacrificing quality. We ship, we iterate, and we close the distance between insight and product.',
  },
  {
    n: '03',
    title: 'Ambition',
    body:
      'We pursue work that matters. Not small problems that scale, but meaningful asymmetries where intelligence changes the outcome.',
  },
  {
    n: '04',
    title: 'Clarity',
    body:
      'Complexity is the enemy of trust. We strip systems down to what is legible — then let the remaining work be obvious.',
  },
]

const facts = [
  { label: 'Founded', value: '2024', sub: '31 . 07' },
  { label: 'Projects', value: '02', sub: 'Active now' },
  { label: 'Studios', value: '02', sub: 'Madrid · Singapore' },
  { label: 'Posture', value: 'AI-first', sub: 'Since day one' },
]

const stations = [
  {
    tag: 'ST · 01',
    name: 'Madrid',
    role: 'Founding studio',
    coord: '40.4168° N · 3.7038° W',
    tz: 'CET (UTC+1)',
  },
  {
    tag: 'ST · 02',
    name: 'Singapore',
    role: 'Studio',
    coord: '1.3521° N · 103.8198° E',
    tz: 'SGT (UTC+8)',
  },
]

export default function About() {
  return (
    <motion.div
      className="page about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="shell about-hero">
        <div className="about-hero-top">
          <span className="eyebrow">§ 01 — Studio note</span>
          <span className="about-hero-date">MMXXIV / Vol. I</span>
        </div>

        <div className="about-hero-main">
          <motion.h1
            className="display about-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            We build what
            <br />
            <em>doesn't</em> exist <span className="accent">yet.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.35 }}
          >
            <HeroAnimation />
          </motion.div>
        </div>

        <div className="about-hero-grid">
          <motion.div
            className="about-lede"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="prose-lg">
              Project Odyssey is an AI-first studio. We build intelligent
              products where the gap between available data and human
              understanding is largest.
            </p>
          </motion.div>

          <motion.aside
            className="about-facts"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {facts.map((f) => (
              <div key={f.label} className="about-fact">
                <span className="about-fact-label">{f.label}</span>
                <span className="about-fact-value">{f.value}</span>
                <span className="about-fact-sub">{f.sub}</span>
              </div>
            ))}
          </motion.aside>
        </div>
      </section>

      {/* ── Mission — long-form editorial ─────────── */}
      <section className="shell mission-wrap">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-head-title">
            An <em>odyssey</em>, <br />by design.
          </h2>
          <div className="section-head-meta">
            <span>§ 02 — The name, the mission</span>
            <span>A long journey — uncertain, difficult, defining</span>
          </div>
        </motion.header>

        <div className="mission-grid">
          <motion.div
            className="mission-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mission-drop">O</span>
            <p className="mission-text">
              An odyssey is a long journey — one that is difficult,
              uncertain, and ultimately defining. Ours is about making
              artificial intelligence the foundation of every product we
              build, in every domain we enter.
            </p>
            <p className="mission-text">
              Sport is where the asymmetry is most dramatic. The volume of
              data generated by modern football is enormous; the tools to
              make sense of it, for fans and organisations alike, are still
              catching up. We're building those tools — and the approach
              scales anywhere the same gap exists.
            </p>
            <p className="mission-text">
              We don't chase trends. We pursue problems where intelligence,
              applied deliberately, changes the outcome.
            </p>
          </motion.div>

          <motion.aside
            className="mission-pull"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="mission-pull-mark">§</span>
            <p className="mission-pull-text">
              "We build intelligent products where the gap between
              available data and human understanding is <em>largest</em>."
            </p>
            <span className="mission-pull-attribution">— Studio position</span>
          </motion.aside>
        </div>
      </section>

      {/* ── Principles — numbered list ────────────── */}
      <section className="shell principles-wrap">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-head-title">
            Four <em>principles</em>, <br />non-negotiable.
          </h2>
          <div className="section-head-meta">
            <span>§ 03 — Working posture</span>
            <span>How we decide, what we ship, what we refuse</span>
          </div>
        </motion.header>

        <ol className="principles">
          {principles.map((p, i) => (
            <motion.li
              key={p.n}
              className="principle"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="principle-num">{p.n}</span>
              <div className="principle-body">
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-desc">{p.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* ── Stations ───────────────────────────────── */}
      <section className="shell stations-wrap">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-head-title">
            Two <em>studios</em>, <br />one practice.
          </h2>
          <div className="section-head-meta">
            <span>§ 04 — Where we work</span>
            <span>Madrid is where Project Odyssey was founded. Singapore is its equal — same posture, opposite hemisphere.</span>
          </div>
        </motion.header>

        <ul className="stations">
          {stations.map((s, i) => (
            <motion.li
              key={s.tag}
              className="station"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="station-tag">{s.tag}</span>
              <h3 className="station-name">{s.name}</h3>
              <p className="station-role">{s.role}</p>
              <dl className="station-meta">
                <div>
                  <dt>Coordinates</dt>
                  <dd>{s.coord}</dd>
                </div>
                <div>
                  <dt>Time zone</dt>
                  <dd>{s.tz}</dd>
                </div>
              </dl>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ── CTA / close ───────────────────────────── */}
      <section className="shell about-close">
        <motion.div
          className="about-close-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="index-mark">§ 05 — Invitation</span>
            <p className="prose-lg about-close-lede">
              If any of this resonates — the posture, the projects, or
              the refusal to dilute the idea — we'd like to hear from you.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Get in touch <span className="btn-arrow">→</span>
          </Link>
        </motion.div>
      </section>

      <footer className="shell colophon">
        <span>Project Odyssey</span>
        <span className="colophon-dot">·</span>
        <span>Studio note — Vol. I</span>
        <span className="colophon-spacer" />
        <span>Est. MMXXIV</span>
      </footer>
    </motion.div>
  )
}
