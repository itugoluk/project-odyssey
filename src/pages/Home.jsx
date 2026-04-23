import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

const projects = [
  {
    id: 1,
    name: 'Spurs Tracker',
    tag: 'Football Analytics',
    description:
      'Real-time performance tracking and analytics platform for Tottenham Hotspur, delivering deep statistical insights and visualisations.',
    color: '#6366f1',
  },
  {
    id: 2,
    name: 'Personal Agent',
    tag: 'AI Assistant',
    description:
      'An intelligent personal assistant powered by advanced AI, built to streamline daily workflows and support faster decision-making.',
    color: '#06b6d4',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20, delay: i * 0.12 },
  }),
}

export default function Home() {
  return (
    <motion.div
      className="page home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
    >
      <section className="hero">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Introducing
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 140, damping: 18 }}
        >
          Project
          <br />
          <span className="text-accent">Odyssey</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.55 }}
        >
          A portfolio of ventures at the intersection of technology, sport, and
          intelligence. Every project, one vision.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52, type: 'spring', stiffness: 220, damping: 20 }}
        >
          <Link to="/about" className="btn btn-primary">Our story</Link>
          <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
        </motion.div>
      </section>

      <section className="projects-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label">Current Work</p>
          <h2 className="section-heading">Active Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card glass"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ scale: 1.025, y: -7 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
            >
              <div
                className="project-card-glow"
                style={{
                  background: `radial-gradient(circle at top left, ${project.color}1a, transparent 65%)`,
                }}
              />
              <div className="project-tag-row">
                <span className="project-tag">{project.tag}</span>
                <span className="project-status-pill">WIP</span>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-footer">
                <span className="wip-badge">In Progress</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="manifesto glass"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 140, damping: 20 }}
      >
        <p className="manifesto-quote">
          "We build at the edge of what's possible — deliberately, obsessively,
          and without compromise."
        </p>
      </motion.section>
    </motion.div>
  )
}
