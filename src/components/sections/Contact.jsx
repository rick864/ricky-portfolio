import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // =========================================
  // FORMSPREE SUBMISSION
  // =========================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xnpnlanb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name || "Portfolio Visitor"}`,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  // =========================================
  // CONTACT INFO
  // =========================================
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "rickykisiengo@gmail.com",
      href: "mailto:rickykisiengo@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+254 704 178 814",
      href: "tel:+254704178814",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/rick864",
      href: "https://github.com/rick864",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/rickykisiengo",
      href: "https://linkedin.com",
    },
  ];

  return (
    <section
      id="contact"
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
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
              Let's{" "}
              <span
                className="italic text-blue-400"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                connect
              </span>
              .
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md md:text-right">
            Open to freelance projects, full-time roles, and collaborations.
          </p>
        </motion.div>

        {/* =========================================
            MAIN GRID — Info + Form
           ========================================= */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">

          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2 space-y-3"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-4 bg-[#111827] border border-blue-900/30 rounded-2xl p-4 hover:border-blue-500/50 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                    {info.label}
                  </p>
                  <p className="text-sm text-gray-300 group-hover:text-blue-400 transition truncate">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Location mini-card */}
            <div className="flex items-center gap-4 bg-[#111827] border border-blue-900/30 rounded-2xl p-4">
              <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-lg shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  Based in
                </p>
                <p className="text-sm text-gray-300">Nairobi, Kenya</p>
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 bg-green-900/20 border border-green-500/30 rounded-2xl p-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              <p className="text-xs text-green-400 font-semibold">
                Currently available for new projects
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-3 bg-[#111827] border border-blue-900/30 rounded-3xl p-6 md:p-8 relative overflow-hidden"
          >
            {/* Subtle glow inside form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#0b0f19] border border-blue-900/40 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#0b0f19] border border-blue-900/40 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 block">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#0b0f19] border border-blue-900/40 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === "sent"
                    ? "bg-green-600 text-white"
                    : status === "error"
                    ? "bg-red-600 text-white"
                    : "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5"
                } disabled:cursor-not-allowed`}
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <FaPaperPlane size={12} />
                  </>
                )}
                {status === "sending" && (
                  <>
                    Sending
                    <span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  </>
                )}
                {status === "sent" && (
                  <>
                    Message Sent
                    <FaCheck size={12} />
                  </>
                )}
                {status === "error" && (
                  <>
                    Something went wrong — Try again
                  </>
                )}
              </button>

              <p className="text-[10px] text-gray-600 text-center">
                I typically respond within 24 hours.
              </p>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;