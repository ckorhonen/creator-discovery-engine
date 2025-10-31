import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">✨</span>
          <span className="logo-text">Creator Cross-Poster</span>
        </div>
        
        <nav className="nav">
          <a href="#" className="nav-link">Dashboard</a>
          <a href="#" className="nav-link">Analytics</a>
          <button className="btn-secondary">Settings</button>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header