
// src/components/Skills.jsx
import { motion } from 'framer-motion'
import {
  FiCode,
  FiMonitor,
  FiZap,
  FiCpu,
  FiDatabase,
} from 'react-icons/fi'
import './Skills.css'

const skillGroups = [
  {
    icon: <FiCode />,
    title: 'HTML',
    description:
      'Building clear, semantic structures that provide a solid foundation for web experiences.',
    level: 'Web Structure',
  },
  {
    icon: <FiMonitor />,
    title: 'CSS',
    description:
      'Creating responsive layouts and polished interfaces with attention to spacing, typography, and visual detail.',
    level: 'Styling & Layout',
  },
  {
    icon: <FiZap />,
    title: 'JavaScript',
    description:
      'Adding interactivity and functionality while developing a stronger understanding of modern web development.',
    level: 'Programming',
  },
  {
    icon: <FiDatabase />,
    title: 'C#',
    description:
      'Working with object-oriented programming concepts and building practical software applications.',
    level: 'Software Development',
  },
  {
    icon: <FiCpu />,
    title: 'Java',
    description:
      'Developing programming fundamentals through structured, object-oriented problem solving.',
    level: 'Programming',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="skills-header"
        >
          <div className="skills-eyebrow">
            <span className="skills-eyebrow-line" />
            <span>Skills & expertise</span>
          </div>

          <div className="skills-heading-row">
            <h2 className="skills-title">
              Technologies I use to
              <span> bring ideas to life.</span>
            </h2>

            <p className="skills-intro">
              A growing toolkit built through practice, projects,
              experimentation, and a genuine curiosity for technology.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillGroups.map((skill, index) => (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="skill-card"
            >
              <div className="skill-card-top">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span className="skill-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <div className="skill-footer">
                <span>{skill.level}</span>
                <span className="skill-line" />
              </div>

              <div className="skill-corner">
                <span />
                <span />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="skills-note"
        >
          <span className="skills-note-dot" />
          <span>Always learning. Always improving.</span>
        </motion.div>
      </div>
    </section>
  )
}
