import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Ricky delivered our e-commerce platform ahead of schedule and beyond expectations. Clean code, great communication, and a real eye for design.",
      name: "Sarah Mwangi",
      role: "Founder, Bloom Beauty Co.",
      initials: "SM",
    },
    {
      quote:
        "Working with Ricky was a game-changer for our startup. He took a vague idea and turned it into a fully-functional SaaS in record time.",
      name: "David Ochieng",
      role: "CEO, Kwanza Finance",
      initials: "DO",
    },
    {
      quote:
        "The most reliable developer I've worked with. Ricky doesn't just write code — he understands the business problem.",
      name: "Amina Hassan",
      role: "Product Lead, Tusker Tech",
      initials: "AH",
    },
    {
      quote:
        "Ricky's frontend work is exceptional. Our site went from clunky to silky smooth. Page load times dropped by 60%.",
      name: "James Kimani",
      role: "CTO, Nairobi Digital",
      initials: "JK",
    },
    {
      quote:
        "Professional, fast, and honest. He delivered a full admin dashboard in under two weeks. Already hired him again.",
      name: "Grace Wanjiru",
      role: "Operations Manager, Soko Fresh",
      initials: "GW",
    },
    {
      quote:
        "Beyond just coding, Ricky brings ideas. He suggested improvements that saved us months of future headaches.",
      name: "Peter Njoroge",
      role: "Co-founder, School Stack",
      initials: "PN",
    },
  ];

  return (
    <section
      id="testimonials"
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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
              What people{" "}
              <span
                className="italic text-blue-400"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                say
              </span>
              .
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md md:text-right">
            Real feedback from clients, collaborators, and people I've built alongside.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-[#111827] border border-blue-900/30 rounded-2xl p-5 hover:border-blue-500/50 transition-all duration-300 flex flex-col"
            >
              <FaQuoteLeft className="text-blue-500/30 text-2xl mb-3" />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" size={11} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs text-gray-300 leading-relaxed italic flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-blue-900/30">
                <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-[10px]">
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{t.name}</p>
                  <p className="text-[10px] text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;