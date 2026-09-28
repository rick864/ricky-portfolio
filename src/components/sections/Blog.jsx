import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaClock, FaArrowRight, FaCalendar } from "react-icons/fa6";
import { posts } from "../../data/posts";

function Blog() {
  return (
    <section
      id="blog"
      className="bg-[#0b0f19] text-white py-16 relative overflow-hidden"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
              Writing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
              Notes &{" "}
              <span
                className="italic text-blue-400"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                thoughts
              </span>
              .
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md md:text-right">
            I write about building products, working with React and Node.js,
            and life as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="bg-[#111827] border border-blue-900/30 rounded-2xl p-5 hover:border-blue-500/60 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-3 flex-wrap">
                  <span className="text-blue-400">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="flex items-center gap-1">
                    <FaCalendar size={9} /> {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="flex items-center gap-1">
                    <FaClock size={9} /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-gray-400 mt-3 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 mt-4 text-[11px] font-bold text-blue-400">
                  Read Article
                  <FaArrowRight
                    size={9}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;