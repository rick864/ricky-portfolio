import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaStar,
  FaRocket,
} from "react-icons/fa6";

function Projects() {
  const projects = [
    {
      title: "Developer Portfolio",
      subtitle: "Personal Brand",
      description:
        "A modern, animated portfolio built from scratch with React, Tailwind, and Framer Motion.",
      tech: ["React", "Tailwind", "Vite"],
      status: "Live",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "https://github.com/rick864",
    },
    {
      title: "E-Commerce Website",
      subtitle: "Full-Stack Store",
      description:
        "Online shopping platform with auth, cart, and secure payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "https://github.com/rick864",
    },
    {
      title: "Task Manager",
      subtitle: "Productivity Tool",
      description:
        "Collaborative task manager with CRUD, auth, and real-time updates.",
      tech: ["React", "Express", "MongoDB"],
      status: "Live",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "https://github.com/rick864",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0b0f19] text-white py-12 relative overflow-hidden"
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

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
              Selected <span className="italic text-blue-400">work</span>.
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md md:text-right">
            Real products, real problems solved — from ideation to deployment.
          </p>
        </motion.div>

        {/* NOVA LABS FLAGSHIP BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#111827] border border-blue-500/30 rounded-2xl p-5 md:p-6 relative overflow-hidden group hover:border-blue-500/60 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[90px] rounded-full pointer-events-none" />

            {/* Top Row */}
            <div className="relative z-10 flex flex-col md:flex-row gap-4 md:items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
                <FaRocket className="text-white" size={22} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    <span className="italic text-blue-400">Nova</span> Labs
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-900/40 border border-blue-500/40 text-blue-300 text-[10px] font-bold uppercase tracking-widest">
                    <FaStar size={8} />
                    Flagship
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-[10px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Coming 2026
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed max-w-2xl">
                  My SaaS venture building tools that{" "}
                  <span className="italic text-blue-400">empower</span> developers to ship faster.
                </p>
              </div>
            </div>

            {/* Waitlist Form */}
            <WaitlistForm />
          </div>
        </motion.div>

        {/* PROJECT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#111827] border border-blue-900/30 rounded-2xl overflow-hidden group hover:border-blue-500/60 hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="h-40 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="text-[9px] uppercase tracking-widest text-white font-bold bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mt-1">
                  {project.subtitle}
                </p>

                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] px-2 py-0.5 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-5 pt-3 border-t border-blue-900/30">
                  <a
                    href={project.liveUrl}
                    className="text-[11px] font-bold text-white hover:text-blue-400 transition flex items-center gap-1 group/btn"
                  >
                    Live
                    <FaArrowUpRightFromSquare
                      size={9}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-gray-400 hover:text-white transition flex items-center gap-1"
                  >
                    <FaGithub size={11} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-blue-900/30 pt-6"
        >
          <p className="text-sm text-gray-400">
            Want to work together on something great?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl text-xs font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-300 group"
          >
            Start a Project
            <FaArrowUpRightFromSquare
              size={10}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

// =========================================
// WAITLIST FORM — Wired to Formspree
// =========================================
function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xvkgdpbg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "Nova Labs Waitlist Signup",
          source: "Projects page - Nova Labs",
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 mt-5 flex flex-col sm:flex-row gap-2 max-w-md"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        disabled={status !== "idle"}
        className="flex-1 bg-[#0b0f19] border border-blue-900/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status !== "idle"}
        className={`text-xs font-bold px-5 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center justify-center gap-2 ${
          status === "sent"
            ? "bg-green-600 text-white"
            : status === "error"
            ? "bg-red-600 text-white"
            : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 hover:-translate-y-0.5"
        } disabled:cursor-not-allowed`}
      >
        {status === "idle" && "Join Waitlist"}
        {status === "sending" && (
          <>
            Joining
            <span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          </>
        )}
        {status === "sent" && "You're on the list ✓"}
        {status === "error" && "Try again"}
      </button>
    </form>
  );
}

export default Projects;