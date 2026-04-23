import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <div className="navbar-positioner">
      <motion.nav
        className="navbar glass"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22, delay: 0.1 }}
      >
        <Link to="/" className="nav-logo">
          <span className="nav-logo-accent">P</span>ROJECT&nbsp;
          <span className="nav-logo-accent">O</span>DYSSEY
        </Link>
        <div className="nav-links">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${pathname === to ? 'active' : ''}`}
            >
              {label}
              {pathname === to && (
                <motion.span
                  className="nav-active-dot"
                  layoutId="navDot"
                  transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                />
              )}
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  )
}
