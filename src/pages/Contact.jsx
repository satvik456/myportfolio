import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      toast.error('Please fix the errors before submitting.')
      return
    }

    emailjs
      .sendForm(
        'service_dvzh9mq',     // Replace with your actual EmailJS service ID
        'template_i26fcw7',    // Replace with your actual EmailJS template ID
        e.target,
        'yIYA4SyEINSA42Qxv'    // Replace with your actual EmailJS public key
      )
      .then(() => {
        toast.success('Message Sent Successfully! 🚀')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again.')
      })
  }

  return (
    <section
      id="contact"
      className="w-full min-h-screen px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center text-purple-400 drop-shadow-md"
      >
        <span className="text-white">Let's</span> Connect
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: GIF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src="/img/boy.gif"
            alt="Coding GIF"
            className="w-[300px] md:w-[400px] h-auto object-contain select-none pointer-events-none"
            style={{ background: 'transparent' }}
          />
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/70 border border-purple-600/30 p-8 rounded-3xl shadow-[0_0_30px_#6d28d980] space-y-6 w-full"
        >
          {['name', 'email', 'message'].map((field, idx) => (
            <div className="relative" key={idx}>
              {field === 'message' ? (
                <textarea
                  name={field}
                  rows="5"
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className={`peer w-full bg-transparent border px-4 py-3 rounded-md text-white placeholder-transparent focus:outline-none ${
                    errors[field]
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-purple-600 focus:border-purple-400'
                  }`}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                ></textarea>
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className={`peer w-full bg-transparent border px-4 py-3 rounded-md text-white placeholder-transparent focus:outline-none ${
                    errors[field]
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-purple-600 focus:border-purple-400'
                  }`}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                />
              )}
              <label className="absolute left-4 top-2 text-sm text-purple-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                Your {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition duration-300 shadow-lg"
          >
            Send Message 🚀
          </motion.button>

          {/* Social Links */}
          <div className="bg-[#151515] mt-6 p-4 rounded-xl shadow-[0_0_20px_#9333ea33] border border-purple-800/30 flex items-center justify-between flex-wrap gap-4">
            <span className="text-white font-medium text-base">Connect with me:</span>
            <div className="flex gap-5 text-2xl text-purple-400">
              <a
                href="https://linkedin.com/in/satvik-tiwari-635051250"
                target="_blank"
                className="hover:text-white transition-transform transform hover:scale-125"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/satvik456"
                target="_blank"
                className="hover:text-white transition-transform transform hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/satvik_tiwari73"
                target="_blank"
                className="hover:text-white transition-transform transform hover:scale-125"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
