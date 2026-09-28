import React from "react";
import { motion } from "framer-motion";
import profile from "../../assets/profile.jpeg";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaRocket,
  FaHeart,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

function About() {
  // =========================================
  // TIMELINE — Edit to match your real journey
  // =========================================
  const timeline = [
    {
      year: "2022",
      title: "The Spark",
      description:
        "Took apart my first computer. Discovered the internet had no limits — and neither did I.",
      icon: <FaLightbulb />,
    },
    {
      year: "2023",
      title: "Learning to Code",
      description:
        "Started with HTML & CSS. Built my first real website. The first time a button did something, I was hooked.",
      icon: <FaCode />,
    },
    {
      year: "2024",
      title: "The MERN Stack",
      description:
        "Went deep into React, Node.js, Express, and MongoDB. Learned to ship full-stack apps end-to-end.",
      icon: <FaServer />,
    },
    {
      year: "2026",
      title: "Nova Labs",
      description:
        "Founding my first SaaS company. Building tools that empower developers to ship faster. Just getting started.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#0b0f19] text-white py-16 relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

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
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
              Turning ideas into{" "}
              <span
                className="italic text-blue-400"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                reality
              </span>
              .
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md md:text-right">
            Get to know more about me, my journey, and the technologies I work with.
          </p>
        </motion.div>

        {/* =========================================
            MAIN GRID — Image + Bio
           ========================================= */}
        <div className="grid lg:grid-cols-5 gap-10 items-center mb-16">

          {/* LEFT: Image (smaller, modern card) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[360px]">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-3xl" />

              {/* Image card */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-blue-900/40 shadow-2xl">
                <img
                  src={profile}
                  alt="Ricky Kisiengo"
                  loading="lazy"
                  className="w-full h-full object-cover object-[75%_25%] scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-70" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#111827] border border-blue-900/50 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">
                    Status
                  </p>
                  <p className="text-xs font-bold text-white">Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Hi, I'm{" "}
              <span
                className="italic text-blue-400"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ricky Kisiengo
              </span>
            </h3>

            <p className="text-gray-400 leading-relaxed mt-5 text-sm md:text-base">
              I'm a passionate Full Stack Developer from Kenya who enjoys
              building modern, secure, and responsive web applications. I
              specialize in creating user-friendly interfaces with React
              and developing powerful backend systems using Node.js,
              Express, and MongoDB.
            </p>

            <p className="text-gray-400 leading-relaxed mt-4 text-sm md:text-base">
              I believe technology should solve real-world problems. Every
              project I build is an opportunity to learn, improve, and
              create meaningful digital experiences.
            </p>

            {/* Quick Facts */}
            <div className="flex flex-wrap gap-5 mt-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-blue-400" />
                <span>Self-taught Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRocket className="text-blue-400" />
                <span>Founding Nova Labs</span>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <ServiceCard
                icon={<FaCode />}
                title="Frontend"
                description="React, HTML, Tailwind"
              />
              <ServiceCard
                icon={<FaServer />}
                title="Backend"
                description="Node, Express, MongoDB"
              />
              <ServiceCard
                icon={<FaLaptopCode />}
                title="Full Stack"
                description="Complete web solutions"
              />
            </div>
          </motion.div>
        </div>

        {/* =========================================
            TIMELINE
           ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
              The Journey
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">
              How I got{" "}
              <span
                className="italic text-blue-400"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                here
              </span>
              .
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#111827] border border-blue-900/30 rounded-2xl p-5 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">
                    {item.year}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =========================================
            VALUES ROW
           ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
              Principles
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">
              What I{" "}
              <span
                className="italic text-blue-400"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                stand for
              </span>
              .
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ValueCard
              icon={<FaLightbulb />}
              title="Simplicity"
              description="The best code is code you don't have to write. Clarity over cleverness."
            />
            <ValueCard
              icon={<FaHandshake />}
              title="Empathy"
              description="Code serves people. I always think about the user on the other side."
            />
            <ValueCard
              icon={<FaHeart />}
              title="Craftsmanship"
              description="Every detail matters. I build things I'm proud to put my name on."
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// =========================================
// HELPER COMPONENTS
// =========================================
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-[#111827] border border-blue-900/30 rounded-2xl p-4 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-3">
      {icon}
    </div>
    <h4 className="text-sm font-bold text-white">{title}</h4>
    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
      {description}
    </p>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-[#111827] border border-blue-900/30 rounded-2xl p-5 hover:border-blue-500/50 transition-colors duration-300">
    <div className="text-blue-400 text-xl mb-3">{icon}</div>
    <h4 className="text-base font-bold text-white">{title}</h4>
    <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
      {description}
    </p>
  </div>
);

export default About;