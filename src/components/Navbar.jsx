import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import { HiMenu, HiX } from "react-icons/hi"

const navLinks = ["home", "about", "skills", "projects", "contact"]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-70 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center"
    >
      {/*  LOGO + SATVIK */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-3 cursor-pointer group"
      >
        {/* Animated Circle with 'S' */}
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg animate-pulse group-hover:scale-110 transition duration-300">
          S
        </div>
        <div className="text-2xl font-bold text-purple-400 group-hover:text-white transition duration-300">
          Satvik
        </div>
      </div>

      {/*  DESKTOP NAV */}
      <ul className="hidden md:flex gap-10 text-lg capitalize">
        {navLinks.map((link, idx) => (
          <ScrollLink
            key={idx}
            to={link}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-purple-400 underline underline-offset-8"
            className="cursor-pointer hover:text-purple-400 transition-all duration-300"
          >
            {link}
          </ScrollLink>
        ))}
      </ul>

      {/*  HAMBURGER ICON */}
      <div className="md:hidden z-[999]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <HiX className="text-3xl text-purple-400" />
        ) : (
          <HiMenu className="text-3xl text-purple-400" />
        )}
      </div>

      {/*  MOBILE NAV */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md flex flex-col items-center gap-6 py-8 text-lg md:hidden capitalize"
          >
            {navLinks.map((link, idx) => (
              <ScrollLink
                key={idx}
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                activeClass="text-purple-400 underline underline-offset-8"
                className="cursor-pointer hover:text-purple-400 transition-all duration-300"
              >
                {link}
              </ScrollLink>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
