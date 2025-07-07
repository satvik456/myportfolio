import { motion } from "framer-motion"
import CanvasScene from "../components/CanvasScene"
import { Typewriter } from "react-simple-typewriter"

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
}

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Canvas Background */}
      <div className="absolute inset-0 z-0">
        <CanvasScene />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left 3D Canvas */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="flex-1 w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden"
        >
          <CanvasScene />
        </motion.div>

        {/* Right Text Content */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-4"
          >
            Hi, I'm <span className="text-purple-400 drop-shadow-lg">Satvik</span>
          </motion.h1>

          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="text-purple-400 text-lg md:text-2xl font-semibold mb-4"
          >
            <Typewriter
              words={[
                "MERN Stack Developer",
                "3D Website Enthusiast",
                "Frontend Animator",
                "Full Stack Engineer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="text-white text-base md:text-lg lg:text-xl max-w-lg leading-relaxed mb-4"
          >
            I'm a passionate full stack developer from India, deeply interested in creating fast, modern, and user-friendly web experiences.
            I specialize in building performance-first web apps using the MERN stack, blended with beautiful UI/UX and interactive elements.
          </motion.p>

          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="text-white text-base md:text-lg max-w-lg leading-relaxed mb-4"
          >
            My goal is to turn your ideas into impactful digital experiences using clean code, scalable architecture, and next-level animations — all tailored to your brand.
          </motion.p>

          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            className="text-purple-300 italic text-sm md:text-base mb-6"
          >
            "Blending creativity with clean code — turning ideas into memorable experiences."
          </motion.p>

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={7}
            className="flex gap-5 flex-wrap justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105"
            >
              🚀 Hire Me
            </a>
            <a
              href="/img/mycv.pdf"
              download
              className="px-6 py-3 border border-purple-500 text-purple-400 rounded-md font-semibold hover:bg-purple-700 hover:text-white transition-all duration-300 hover:scale-105"
            >
              📄 Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
