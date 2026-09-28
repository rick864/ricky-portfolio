import React, { useState, useEffect } from "react";
import profile from "../../assets/profile.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaArrowRight,
  FaXmark,
} from "react-icons/fa6";

// =========================================
// CUSTOM HOOK: TYPEWRITER EFFECT
// =========================================
const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

  return words[index].substring(0, subIndex);
};

function Hero() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [githubData, setGithubData] = useState({ repos: 0, followers: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/rick864")
      .then((res) => res.json())
      .then((data) =>
        setGithubData({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
        })
      )
      .catch(() => {});
  }, []);

  const phrases = [
    "I build scalable APIs.",
    "I design modern UIs.",
    "I solve real-world problems.",
    "I deploy cloud architecture.",
  ];

  const text = useTypewriter(phrases);

  return (
    <>
      <section
        id="home"
        className="min-h-[calc(100vh-72px)] bg-[#0b0f19] text-white flex items-center py-10 relative overflow-hidden"
      >
        {/* Mouse Glow */}
        <motion.div
          className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] z-0 hidden lg:block"
          animate={{ x: mousePos.x - 200, y: mousePos.y - 200 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />

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

        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* =========================================
                LEFT SIDE (Text Content)
               ========================================= */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Currently Building → scrolls to #projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs text-gray-500 mb-3 hover:text-gray-300 transition group w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Currently building</span>
                <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition">
                  Nova Labs
                </span>
                <FaArrowRight
                  size={10}
                  className="text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </a>

              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-5 ml-0">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Available for new opportunities
              </div>

              {/* DYNAMIC HEADING (smaller, tighter) */}
              <div className="min-h-[140px] md:min-h-[180px]">
                <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                  <span className="text-gray-400">Full Stack Developer.</span>
                  <br />
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    {text}
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[3px] h-[32px] md:h-[48px] bg-blue-500 ml-2 align-middle"
                  />
                </h1>
              </div>

              {/* Subtitle */}
              <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-400 max-w-lg">
                Passionate Full Stack Developer from Kenya specializing in React,
                Node.js, Express, and MongoDB. I build fast, responsive, and
                scalable web applications.
              </p>

              {/* Compact Stats Row */}
              <div className="grid grid-cols-3 gap-3 mt-6 max-w-md">
                {[
                  { num: "3+", label: "Years Exp" },
                  { num: "20+", label: "Projects" },
                  { num: "15+", label: "Clients" },
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-blue-500/40 pl-3">
                    <p className="text-xl font-bold text-white">{stat.num}</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Compact Tech Stack */}
              <div className="flex items-center gap-4 mt-6 text-xl text-gray-500">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-600">
                  Stack
                </span>
                <div className="flex gap-3">
                  <FaReact className="hover:text-blue-400 transition-colors duration-300" title="React" />
                  <FaNodeJs className="hover:text-green-500 transition-colors duration-300" title="Node.js" />
                  <FaDatabase className="hover:text-emerald-500 transition-colors duration-300" title="MongoDB" />
                  <FaAws className="hover:text-orange-500 transition-colors duration-300" title="AWS" />
                </div>
              </div>

              {/* GitHub Card (compact) */}
              <motion.a
                href="https://github.com/rick864"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="inline-flex items-center gap-3 mt-6 px-4 py-3 bg-[#111827] border border-blue-900/30 rounded-xl hover:border-blue-500/50 hover:bg-[#1a2438] transition group w-fit"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0b0f19] border border-blue-900/50 flex items-center justify-center">
                  <FaGithub className="text-white text-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">@rick864</span>
                  <div className="flex gap-2 text-[10px] text-gray-400 mt-0.5">
                    <span>
                      <strong className="text-blue-400">{githubData.repos}</strong> repos
                    </span>
                    <span>•</span>
                    <span>
                      <strong className="text-blue-400">{githubData.followers}</strong> followers
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-7">
                <button
                  onClick={() => setIsStoryOpen(true)}
                  className="ripple-btn bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl text-sm font-bold shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
                >
                  My{" "}
                  <span className="italic font-semibold text-base tracking-wide">
                    Story
                  </span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#projects"
                  className="group bg-[#111827] border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:-translate-y-1"
                >
                  View{" "}
                  <span className="italic font-semibold text-base text-blue-300 tracking-wide">
                    Work
                  </span>
                  <FaArrowRight className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-5 mt-6 text-lg text-gray-500">
                <a
                  href="https://github.com/rick864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:rickykisiengo@gmail.com"
                  className="hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>

            {/* =========================================
                RIGHT SIDE (Image — smaller, balanced)
               ========================================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:flex justify-center lg:justify-end relative"
            >
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-gray-800 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent z-10 opacity-80" />
                <img
                  src={profile}
                  alt="Ricky Kisiengo"
                  loading="lazy"
                  className="w-full h-full object-cover object-[75%_25%] scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          MY STORY MODAL
         ========================================= */}
      <AnimatePresence>
        {isStoryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
            onClick={() => setIsStoryOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111827] border border-blue-900/50 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl"
            >
              <button
                onClick={() => setIsStoryOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0b0f19] border border-blue-900/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-all z-10"
              >
                <FaXmark />
              </button>

              <div className="p-8 md:p-10 border-b border-blue-900/30">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
                  About Me
                </span>
                <h2 className="text-4xl font-bold text-white mt-2">
                  My <span className="italic text-blue-400">Story</span>
                </h2>
              </div>

              <div className="p-8 md:p-10 space-y-5 text-gray-300 leading-relaxed text-sm md:text-base">
                <p>
                  I grew up in Kenya, where the hum of daily life is constant and the spirit of innovation is everywhere. As a kid, I was always the one taking things apart just to see how they worked. Radios, old computers, anything with a circuit board — I wanted to understand the magic inside.
                </p>
                <p>
                  My journey into tech wasn't a straight line. It started with curiosity, then became a hobby, and eventually turned into an obsession. I spent countless late nights teaching myself how to code. The first time I made a button actually <em className="text-blue-400">do something</em>, I was hooked.
                </p>
                <p>
                  I dove deep into the <strong className="text-white">MERN stack</strong> — React, Node.js, Express, and MongoDB. I didn't just want to build websites; I wanted to build <em className="text-blue-400">experiences</em>. Every bug I fixed and every feature I shipped taught me something new.
                </p>
                <p>
                  Along the way, I learned that being a developer is about more than just writing code. It's about <strong className="text-white">empathy</strong>, <strong className="text-white">resilience</strong>, and <strong className="text-white">vision</strong>.
                </p>
                <p>
                  That vision is what drives me today. I'm currently pouring my heart into founding <strong className="text-blue-400">Nova Labs</strong>, a SaaS company built to empower other developers to ship faster and build better.
                </p>
                <p className="text-blue-400 font-semibold italic">
                  And I'm just getting started.
                </p>
              </div>

              <div className="p-6 md:p-8 border-t border-blue-900/30 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Let's build something great together.
                </p>
                <a
                  href="mailto:rickykisiengo@gmail.com"
                  className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hero;