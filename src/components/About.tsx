
// src/components/About.jsx

import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiZap,
} from 'react-icons/fi'
import './About.css'

const stats = [
  {
    value: '05',
    label: 'Core technologies',
  },
  {
    value: '04+',
    label: 'Projects built',
  },
  {
    value: '100%',
    label: 'Passion for learning',
  },
]

const focusAreas = [
  {
    icon: <FiCode />,
    title: 'Clean Development',
    description:
      'Writing clear, maintainable, and thoughtful code while continuing to improve.',
  },
  {
    icon: <FiLayers />,
    title: 'Modern Interfaces',
    description:
      'Creating interfaces that are clean, responsive, intuitive, and visually engaging.',
  },
  {
    icon: <FiZap />,
    title: 'Problem Solving',
    description:
      'Turning ideas and problems into practical digital experiences that work.',
  },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            <span>About me</span>
          </div>

          <h2 className="about-title">
            Turning ideas into
            <span> meaningful digital experiences.</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="about-main">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="about-story"
          >
            <div className="about-story-inner">
              <p className="about-intro">
                I'm a developer who enjoys transforming ideas into
                simple, intuitive, and visually engaging experiences.
              </p>

              <p>
                I enjoy working across different areas of software
                development, from building websites and interfaces to
                exploring programming and solving technical problems.
              </p>

              <p>
                I'm constantly learning, experimenting with new ideas,
                and looking for better ways to build things. For me,
                development is not just about writing code — it's about
                understanding the problem and creating something useful.
              </p>

              <a href="#projects" className="about-link">
                <span>Explore my work</span>
                <FiArrowUpRight />
              </a>
            </div>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="about-focus"
          >
            {focusAreas.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.1,
                }}
                className="focus-card"
              >
                <div className="focus-card-content">
                  <div className="focus-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="about-stats"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`about-stat ${
                index !== 0 ? 'about-stat-bordered' : ''
              }`}
            >
              <div className="about-stat-value">
                {stat.value}
              </div>

              <div className="about-stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

