import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

const projects = [
  {
    id: 1,
    name: 'Spurs Tracker',
    tag: 'Sports AI',
    description:
      'AI-powered performance tracking and analytics for Tottenham Hotspur — surfacing deep insights, automating analysis, and changing how fans engage with the game.',
    accentColor: 'rgba(245, 158, 11, 0.5)',
    glowColor: 'rgba(245, 158, 11, 0.06)',
  },
  {
    id: 2,
    name: 'Personal Agent',
    tag: 'AI Assistant',
    description:
      'An intelligent personal assistant powered by advanced AI, built to streamline daily workflows and support faster decision-making.',
    accentColor: 'rgba(20, 184, 166, 0.5)',
    glowColor: 'rgba(20, 184, 166, 0.06)',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 220, damping: 22, delay: i * 0.1 },
  }),
}

export default function Home() {
  return (
    <motion.div
      className="page home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <section className="hero">
        <div className="hero-content">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            Introducing
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150, damping: 18 }}
          >
            Project
            <br />
            <span className="text-accent">Odyssey</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.5 }}
          >
            An AI-first parent company building the next generation of intelligent
            products — starting with sport, expanding everywhere.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 240, damping: 20 }}
          >
            <Link to="/about" className="btn btn-primary">Our story</Link>
            <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 120, damping: 20 }}
        >
          <div className="hero-ring hero-ring-1" />
          <div className="hero-ring hero-ring-2" />
          <div className="hero-ring hero-ring-3" />
          <div className="hero-ring-dot" />
          <div className="hero-inner-text">
            AI-first<br />frontier
          </div>
        </motion.div>
      </section>

      <section className="projects-section">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Current Work</p>
          <h2 className="section-heading">Active Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card glass"
              style={{ '--card-accent': project.accentColor }}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ type: 'spring', stiffness: 360, damping: 20 }}
            >
              <div
                className="project-card-glow"
                style={{
                  background: `radial-gradient(ellipse at top left, ${project.glowColor}, transparent 60%)`,
                }}
              />
              <div className="project-card-inner">
                <div className="project-tag-row">
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-status-pill">WIP</span>
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-footer">
                  <span className="wip-badge">In Progress</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="manifesto glass"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        whileHover={{ scale: 1.012, y: -4 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      >
        <p className="manifesto-quote">
          AI is not a feature — it's the foundation. We build on that
          foundation, deliberately and without compromise.
        </p>
      </motion.section>
    </motion.div>
  )
}
