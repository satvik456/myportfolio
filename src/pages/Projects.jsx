import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "3D Portfolio",
    desc: "3D animated React + Three.js portfolio. Portfolio creates your identity and feedback of your skills.",
    img: "/img/portfolio1.png",
    link: "#",
  },
  {
    title: "E-Commerce Site",
    desc: "A complete MERN stack store with payment gateway, admin dashboard, cart, and responsive design.",
    img: "/img/ecommerce.png",
    link: "https://try-me-frontend.netlify.app/",
  },
  {
    title: "Chat App",
    desc: "Real-time messaging app built with Socket.IO, MongoDB and React — seamless live communication.",
    img: "/img/chatlogo.png",
    link: "https://chatapp-1-jim2.onrender.com",
  },
  {
    title: "TechSparks",
    desc: "Official company website of TechSparks with advanced UI/UX, animations, and deployment setup.",
    img: "/img/mylogo.jpeg",
    link: "https://techsparkspro.netlify.app/",
  },
]

const Projects = () => {
  const [current, setCurrent] = useState(1) // Start from E-Commerce

  const nextSlide = () => setCurrent((current + 1) % projects.length)
  const prevSlide = () => setCurrent((current - 1 + projects.length) % projects.length)

  return (
    <section id="projects" className="w-full py-24 bg-black text-white overflow-hidden relative">
      <h2 className="text-4xl font-bold text-center text-purple-400 underline underline-offset-8 mb-12">
        My Projects
      </h2>

      {/* Carousel */}
      <div className="relative w-full flex justify-center items-center perspective-[1200px] h-[440px]">
        {projects.map((proj, index) => {
          const distance = index - current
          const rotateY = distance * 45
          const scale = distance === 0 ? 1 : 0.82
          const zIndex = 10 - Math.abs(distance)
          const translateX = distance * 300
          const hidden = Math.abs(distance) > 2

          return (
            <motion.div
              key={index}
              className={`absolute w-[300px] h-[400px] bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl overflow-hidden shadow-[0_0_60px_#9333ea55] hover:shadow-[0_0_80px_#9333ea88] transition-all duration-700 ${
                hidden ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              style={{
                transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                transformStyle: "preserve-3d",
                zIndex,
              }}
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-48 object-cover border-b border-purple-400/30"
              />
              <div className="p-5 flex flex-col justify-between h-[calc(100%-192px)]">
                <div>
                  <h3 className="text-xl font-bold text-purple-300 mb-2 tracking-wide relative">
                    {proj.title}
                    <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-purple-500 rounded-full"></span>
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {proj.desc}
                  </p>
                </div>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block px-4 py-2 bg-purple-600/80 backdrop-blur-md text-white rounded-full shadow-md hover:bg-purple-700 transition duration-300 text-sm font-semibold"
                >
                  🔗 View Project →
                </a>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-10 gap-6">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
        >
          ◀ Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
        >
          Next ▶
        </button>
      </div>
    </section>
  )
}

export default Projects
