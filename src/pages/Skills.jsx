import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress, SiVite } from 'react-icons/si'

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt />, level: 90 },
      { name: "JavaScript", icon: <FaJsSquare />, level: 92 },
      { name: "React.js", icon: <FaReact />, level: 94 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, level: 90 },
      { name: "Express.js", icon: <SiExpress />, level: 88 },
      { name: "MongoDB", icon: <SiMongodb />, level: 91 },
      { name: "Vite", icon: <SiVite />, level: 85 },
    ],
  },
  {
    title: "Tools & Extras",
    items: [
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "GitHub", icon: <FaGithub />, level: 92 },
      { name: "Postman", icon: "📮", level: 85 },
      { name: "Figma", icon: "🎨", level: 80 },
    ],
  },
]

const Skills = () => {
  return (
    <section id='skills' className="w-full min-h-screen px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold mb-16 text-center text-purple-400 drop-shadow-md">My Skills</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.2}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              scale={1.02}
              className="relative group bg-gradient-to-br from-gray-800/80 to-black p-6 rounded-3xl border border-purple-700/40 shadow-[0_0_30px_#6d28d933] hover:shadow-[0_0_60px_#9333ea80] transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-purple-700 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-6 border-b border-purple-500 pb-2">{group.title}</h3>
                <div className="space-y-5">
                  {group.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between text-white text-sm mb-1">
                        <span className="flex items-center gap-2 text-base font-medium">
                          <span className="text-xl">{item.icon}</span>
                          {item.name}
                        </span>
                        <span className="text-xs text-white/70">{item.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 1.2 }}
                          className="h-full bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
