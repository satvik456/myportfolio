import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-[#0f0f0f] to-black text-white px-6 py-12 border-t border-purple-800/30 backdrop-blur-lg relative z-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
        {/* 🔹 Name + Scroll Up */}
        <div className="space-y-3">
          <h2
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl md:text-3xl font-bold text-purple-400 cursor-pointer hover:text-white transition duration-300 inline-flex items-center gap-2"
          >
            Satvik
            <FaArrowUp className="text-sm hover:translate-y-[-4px] transition duration-300" />
          </h2>
          <p className="text-sm text-white/70">
            Designed & built with 💜 using React + Tailwind + Framer Motion.
          </p>
        </div>

        {/* 🔹 Social Media */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-purple-300">Follow Me</h3>
          <div className="flex gap-6 text-2xl text-purple-400">
            <a
              href="https://linkedin.com/in/satvik-tiwari-635051250"
              target="_blank"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/satvik456"
              target="_blank"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/satvik_tiwari73"
              target="_blank"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* 🔹 Copyright */}
        <div className="space-y-3">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} <span className="text-purple-400">Satvik Tiwari</span>
          </p>
          <p className="text-sm text-white/60">All Rights Reserved | Made with 🚀</p>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-purple-600/40 blur-sm rounded-full mt-8"></div>
    </motion.footer>
  )
}

export default Footer
