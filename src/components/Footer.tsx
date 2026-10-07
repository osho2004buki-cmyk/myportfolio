
// src/components/Footer.jsx

import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <p className="footer-logo">
              Mide<span>.</span>
            </p>

            <p className="footer-description">
              Building thoughtful digital experiences with clean
              code, modern interfaces, and attention to detail.
            </p>
          </div>

          {/* Back to top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="back-to-top"
          >
            <span>Back to top</span>

            <span className="back-to-top-icon">
              <FiArrowUpRight />
            </span>
          </motion.button>
        </div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mide. All rights reserved.
          </p>

          <p>Built with React & CSS.</p>
        </div>
      </div>
    </footer>
  )
}

