
// src/components/Hero.jsx

import { motion } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiArrowDown,
} from 'react-icons/fi'
import './Hero.css'

const socials = [
  {
    name: 'GitHub',
    icon: <FiGithub />,
    href: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin />,
    href: 'https://linkedin.com',
  },
  {
    name: 'Email',
    icon: <FiMail />,
    href: 'mailto:osho2004buki@gmail.com',
  },
]

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Grid */}
      <div className="hero-grid" />

      {/* Main Purple Glow */}
      <div className="hero-glow hero-glow-main" />

      {/* Secondary Lilac Glow */}
      <div className="hero-glow hero-glow-secondary" />

      {/* Main Content */}
      <div className="hero-content">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="availability-badge"
        >
          <span className="availability-indicator">
            <span className="availability-ping" />
            <span className="availability-dot" />
          </span>

          Open to new opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: 'easeOut',
          }}
          className="hero-title"
        >
          Hi, I'm Mide.
          <br />

          <span className="hero-title-accent">
            I build things for the web.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: 'easeOut',
          }}
          className="hero-description"
        >
          I'm a developer who enjoys turning ideas into clean,
          functional, and engaging digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: 'easeOut',
          }}
          className="hero-actions"
        >
          {/* Primary Button */}
          <a href="#projects" className="hero-primary-button">
            View My Work

            <FiArrowUpRight className="hero-button-icon" />
          </a>

          {/* Secondary Button */}
          <a href="#contact" className="hero-secondary-button">
            Let's Connect
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.55,
          }}
          className="hero-socials"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.name === 'Email' ? undefined : '_blank'}
              rel={
                social.name === 'Email'
                  ? undefined
                  : 'noopener noreferrer'
              }
              aria-label={social.name}
              className="hero-social-link"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="hero-role"
        >
          Frontend Developer · Software Developer
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hero-scroll"
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <FiArrowDown />
        </motion.span>
      </motion.a>
    </section>
  )
}
