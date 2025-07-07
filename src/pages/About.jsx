import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"
import { useRef } from "react"

const SpinningBox = () => {
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color="#a855f7" wireframe />
    </mesh>
  )
}

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Mobile Cube Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 md:hidden pointer-events-none">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 4, 5]} intensity={1.5} />
          <SpinningBox />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left Text */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-8 underline underline-offset-8 decoration-purple-600"
          >
            About Me
          </motion.h2>

          <p className="text-lg text-white/90 leading-relaxed mb-5">
            I'm a passionate{" "}
            <span className="text-purple-400 font-semibold">Full Stack Developer</span> currently in my final year of{" "}
            <span className="text-purple-400 font-semibold">B.Tech in Computer Science & Engineering</span>, set to graduate in <span className="text-purple-400 font-semibold">2025</span>.
            I bring a unique blend of technical skill and creativity to every project I work on.
          </p>

          <p className="text-lg text-white/90 leading-relaxed mb-5">
            I completed a{" "}
            <span className="text-purple-400 font-semibold">6-month internship at Digicoders</span>, where I worked on live industry projects, sharpened my practical skills, and contributed to real-world applications.
          </p>

          <p className="text-lg text-white/80 leading-relaxed mb-8">
            I specialize in the{" "}
            <span className="text-purple-400 font-semibold">MERN stack</span>, and I’m deeply passionate about creating fast, interactive, and visually stunning experiences using{" "}
            <span className="text-purple-400 font-semibold">3D animations</span>, smooth transitions, and scalable logic. Whether it's performance or design, I believe in crafting applications that leave a lasting impact.
          </p>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-indigo-300 italic text-[1.1rem] md:text-[1.2rem] leading-relaxed"
          >
            "I don't just code websites — I engineer experiences, blending creativity with logic to build what inspires."
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="block mt-3 text-purple-400 font-bold text-right tracking-wide"
            >
              — Satvik
            </motion.span>
          </motion.p>
        </div>

        {/* Right Cube (Desktop Only) */}
        <div className="hidden md:block flex-1 h-[450px] w-full">
          <div className="relative h-full">
            <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[2, 5, 5]} intensity={1.7} />
              <OrbitControls enableZoom={false} />
              <SpinningBox />
            </Canvas>
            <div className="absolute inset-0 rounded-full blur-2xl shadow-[0_0_100px_#a855f7aa] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
