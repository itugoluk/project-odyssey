import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Index', num: '00' },
  { to: '/about', label: 'Studio', num: '01' },
  { to: '/contact', label: 'Contact', num: '02' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="navbar-wrap">
      <motion.div
        className="navbar-strip"
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div className="navbar shell">
          <Link to="/" className="nav-brand" aria-label="Project Odyssey — home">
            <span className="nav-brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="12" cy="12" r="1.6" fill="currentColor" />
              </svg>
            </span>
            <span className="nav-brand-text">
              <span className="nav-brand-name">Project Odyssey</span>
              <span className="nav-brand-sub">An atlas of AI</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map(({ to, label, num }) => {
              const active = pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link ${active ? 'is-active' : ''}`}
                >
                  <span className="nav-link-num">{num}</span>
                  <span className="nav-link-label">{label}</span>
                  {active && (
                    <motion.span
                      className="nav-link-underline"
                      layoutId="navUnderline"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </motion.div>
    </header>
  )
}
