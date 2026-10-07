
// src/components/Navbar.jsx

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.css'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = links
        .map((link) => document.querySelector(link.href))
        .filter((section) => section instanceof HTMLElement)

      const scrollPosition = window.scrollY + 150

      sections.forEach((section) => {
        const top = section.offsetTop
        const bottom = top + section.offsetHeight

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="navbar-container">
        <div className="navbar-inner">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="navbar-logo"
            aria-label="Go to homepage"
          >
            <span>
              Mide<span className="logo-accent">.</span>
            </span>

            <span className="logo-dot" />
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {links.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="active-nav-background"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="nav-link-text">
                    {link.name}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="active-dot"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <a href="#contact" className="navbar-cta">
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="mobile-menu"
            >
              <div className="mobile-menu-inner">
                {links.map((link, index) => {
                  const sectionId = link.href.replace('#', '')
                  const isActive = activeSection === sectionId

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.25,
                      }}
                      className={`mobile-nav-link ${
                        isActive ? 'active' : ''
                      }`}
                    >
                      <span>{link.name}</span>

                      {isActive && <span className="mobile-active-dot" />}
                    </motion.a>
                  )
                })}

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mobile-cta"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

