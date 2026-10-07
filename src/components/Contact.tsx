
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiCheck,
} from 'react-icons/fi'
import './Contact.css'

const socials = [
  {
    name: 'GitHub',
    icon: <FiGithub />,
    href: 'https://github.com/osho2004buki-cmyk',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/ayomide-osobukola-a91b672a7',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(form)

    setSubmitted(true)

    setForm({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />

      <div className="contact-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <div className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            <span>Contact</span>
          </div>

          <h2 className="contact-title">
            Let's build something
            <span> worth talking about.</span>
          </h2>
        </motion.div>

        {/* Contact Layout */}
        <div className="contact-layout">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="contact-info"
          >
            <p className="contact-description">
              Have an idea, a project, or just want to connect?
              I'd love to hear what you're working on and see how
              I can help bring it to life.
            </p>

            {/* Email */}
            <a
              href="mailto:osho2004buki@gmail.com"
              className="contact-email"
            >
              <span className="contact-email-icon">
                <FiMail />
              </span>

              <span>
                <span className="contact-email-label">Email me</span>
                <span className="contact-email-address">
                  osho2004buki@gmail.com
                </span>
              </span>
            </a>

            {/* Socials */}
            <div className="contact-socials">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="contact-social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="contact-availability">
              <span className="availability-indicator">
                <span className="availability-ping" />
                <span className="availability-dot" />
              </span>

              <span>
                Currently available for select projects
              </span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="contact-form-card"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  {/* Name */}
                  <div className="form-field">
                    <label htmlFor="name">Name</label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="form-field">
                    <label htmlFor="email">Email</label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <div className="form-field">
                    <label htmlFor="message">Message</label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me a little about your project..."
                      required
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    <span>Send Message</span>
                    <FiArrowUpRight />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="contact-success"
                >
                  <div className="success-icon">
                    <FiCheck />
                  </div>

                  <h3>Message received.</h3>

                  <p>
                    Thanks for reaching out. I'll get back to you
                    as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="send-another"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

