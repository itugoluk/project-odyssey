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
          Project Odyssey is a collection of ventures built at the intersection
          of technology, sport, and artificial intelligence. We are early,
          deliberate, and focused on building tools that genuinely change how
          people interact with information.
        </motion.p>
      </section>

      <motion.section
        className="mission-section glass"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 145, damping: 20 }}
      >
        <div className="mission-grid">
          <div>
            <p className="section-label">Mission</p>
            <h2 className="mission-heading">
              One vision,
              <br />
              many fronts
            </h2>
          </div>
          <div>
            <p className="mission-text">
              The name is not incidental. An odyssey is a long journey — one
              that is difficult, uncertain, and ultimately defining. That's what
              we're on. Each project is a front in a larger effort to understand
              and shape how technology integrates into the domains we care about
              most.
            </p>
            <p className="mission-text">
              Right now, that means sports analytics and personal AI. But the
              principle scales to wherever there is a gap between what technology
              can do and what people actually have access to.
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
