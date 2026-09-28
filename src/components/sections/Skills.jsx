import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

function Skills() {
  // =========================================
  // SKILLS DATA — Grouped by category
  // =========================================
  const skillGroups = [
    {
      category: "Frontend",
      subtitle: "User Interfaces",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", level: 92 },
        { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400", level: 90 },
        { name: "React", icon: <FaReact />, color: "text-cyan-400", level: 93 },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400", level: 94 },
      ],
    },
    {
      category: "Backend",
      subtitle: "Servers & APIs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", level: 88 },
        { name: "Express", icon: <SiExpress />, color: "text-white", level: 87 },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500", level: 85 },
      ],
    },
    {
      category: "Tools",
      subtitle: "Workflow",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-600", level: 90 },
        { name: "GitHub", icon: <FaGithub />, color: "text-white", level: 92 },
      ],
    },
  ];

  // Flatten for a nice grid
  const allSkills = skillGroups.flatMap((group) =>
    group.skills.map((s) => ({ ...s, category: group.category }))
  );

  return (
    <section
      id="skills"
      className="bg-[#0b0f19] text-white py-16 relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* =========================================
            SECTION HEADER
           ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
              Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
              My{" "}
              <span
                className="italic text-blue-400"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                toolbox
              </span>
              .
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md md:text-right">
            Technologies I use daily to build fast, modern, and scalable web applications.
          </p>
        </motion.div>

        {/* =========================================
            SKILLS GRID
           ========================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-[#111827] border border-blue-900/30 rounded-2xl p-5 flex flex-col items-center text-center hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500 pointer-events-none" />

              {/* Icon */}
              <div
                className={`text-5xl ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="text-sm font-bold text-white relative z-10">
                {skill.name}
              </h3>

              {/* Category tag */}
              <span className="text-[9px] uppercase tracking-widest text-gray-500 mt-1 relative z-10">
                {skill.category}
              </span>

              {/* Progress bar */}
              <div className="w-full mt-3 h-1 bg-[#0b0f19] rounded-full overflow-hidden relative z-10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.04 + 0.3 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            BOTTOM CTA ROW
           ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 border-t border-blue-900/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm font-bold text-white">
              Always learning, always building.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Currently exploring TypeScript, Next.js, and AWS.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl text-xs font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-300 group"
          >
            Let's Work Together
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;