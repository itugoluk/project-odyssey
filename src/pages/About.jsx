import { motion } from 'framer-motion'
import './About.css'

const values = [
  {
    number: '01',
    title: 'Precision',
    description:
      'Every decision is deliberate. We build systems that perform exactly as intended, without excess or ambiguity.',
  },
  {
    number: '02',
    title: 'Velocity',
    description:
      'Speed of execution without compromising quality. We ship, iterate, and improve — continuously.',
  },
  {
    number: '03',
    title: 'Ambition',
    description:
      'We pursue projects that matter. Not small problems, but meaningful challenges with genuine impact.',
  },
]

export default function About() {
  return (
    <motion.div
      className="page about"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ type: 'spring', stiffness: 200, damping: 24 }}
    >
      <section className="about-hero">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12 }}
        >
          Who we are
        </motion.p>
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, type: 'spring', stiffness: 140, damping: 18 }}
        >
          Building what
          <br />
          <span className="text-accent">doesn't exist yet</span>
        </motion.h1>
        <motion.p
          className="about-lead"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.55 }}
        >
          Project Odyssey is an AI-first parent company building intelligent
          systems across industries. We treat AI as the foundational layer —
          not an add-on — and our largest current focus is applying it to sport,
          where the gap between available data and human understanding is vast.
        </motion.p>
      </section>

      <motion.section
        className="mission-section glass"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        whileHover={{ scale: 1.015, y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      >
        <div className="mission-grid">
          <div>
            <p className="section-label">Mission</p>
            <h2 className="mission-heading">
              AI-first,
              <br />
              everywhere
            </h2>
          </div>
          <div>
            <p className="mission-text">
              The name is not incidental. An odyssey is a long journey — one
              that is difficult, uncertain, and ultimately defining. Ours is
              about making artificial intelligence the foundation of every
              product we build, in every domain we enter.
            </p>
            <p className="mission-text">
              Sport is our first and largest front. The volume of data generated
              by modern football is enormous; the tools to make sense of it, for
              fans and organisations alike, are still catching up. We're closing
              that gap with AI. But the approach scales anywhere the same
              asymmetry exists.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="values-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">What drives us</p>
          <h2 className="section-heading">Our principles</h2>
        </motion.div>

        <div className="values-grid">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="value-card glass"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                delay: i * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              whileHover={{ scale: 1.025, y: -5 }}
            >
              <span className="value-number">{v.number}</span>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
