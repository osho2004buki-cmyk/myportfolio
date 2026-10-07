
// src/components/Projects.jsx

import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiCode,
  FiLayout,
} from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'Hotel Management System',
    description:
      'A software project designed to manage hotel operations and organize essential hotel management tasks.',
    technologies: ['C#'],
    category: 'Software Development',
    icon: <FiCode />,
  },
  {
    number: '02',
    title: 'Car Shop Website',
    description:
      'A modern car shopping website focused on presenting vehicles through a clean and engaging web interface.',
    technologies: ['React'],
    category: 'Web Development',
    icon: <FiLayout />,
  },
  {
    number: '03',
    title: 'Clothing Website',
    description:
      'A stylish clothing website designed to create a smooth browsing experience for fashion products.',
    technologies: ['React'],
    category: 'Web Development',
    icon: <FiLayout />,
  },
  {
    number: '04',
    title: 'Pastry & Ice Cream App',
    description:
      'A food ordering app concept designed in Figma, focused on making pastry and ice cream ordering simple and visually appealing.',
    technologies: ['Figma'],
    category: 'UI/UX Design',
    icon: <FiLayout />,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <div className="projects-eyebrow">
            <span className="projects-eyebrow-line" />
            <span>Selected work</span>
          </div>

          <div className="projects-heading-row">
            <h2 className="projects-title">
              Things I've
              <span> built & explored.</span>
            </h2>

            <p className="projects-intro">
              A collection of projects that reflect my interest in
              development, design, and turning ideas into something
              tangible.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="project-card"
            >
              {/* Project Number */}
              <div className="project-number">
                {project.number}
              </div>

              {/* Visual */}
              <div className="project-visual">
                <div className="project-visual-glow" />

                <div className="project-visual-content">
                  <div className="project-icon">
                    {project.icon}
                  </div>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-visual-lines">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <div>
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <div className="project-bottom">
                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button
                      type="button"
                      className="project-action"
                      aria-label={`${project.title} external link`}
                    >
                      <FiExternalLink />
                    </button>

                    <button
                      type="button"
                      className="project-action"
                      aria-label={`${project.title} GitHub link`}
                    >
                      <FiGithub />
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="project-hover-arrow">
                <FiArrowUpRight />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="projects-footer"
        >
          <span className="projects-footer-line" />
          <span>More projects coming soon.</span>
          <span className="projects-footer-line" />
        </motion.div>
      </div>
    </section>
  )
}

