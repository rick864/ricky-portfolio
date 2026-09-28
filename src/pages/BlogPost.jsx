import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaClock, FaCalendar } from "react-icons/fa6";
import { getPostBySlug } from "../data/posts";

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="bg-[#0b0f19] text-white min-h-screen flex items-center justify-center px-6 pt-28">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-blue-400">404</h1>
          <p className="text-gray-400 mt-4">Article not found.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300 transition"
          >
            <FaArrowLeft size={12} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (content) => {
    const lines = content.split("\n").filter((line) => line.trim() !== "");
    const elements = [];

    lines.forEach((line, i) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        elements.push(
          <h2
            key={i}
            className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("- ")) {
        elements.push(
          <li key={i} className="text-gray-300 ml-6 list-disc my-1">
            {trimmed.replace("- ", "")}
          </li>
        );
      } else {
        elements.push(
          <p key={i} className="text-gray-300 leading-relaxed my-4">
            {trimmed}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="bg-[#0b0f19] text-white min-h-screen pt-28 pb-16 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[760px] mx-auto px-6 lg:px-12 relative z-10">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition mb-8 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4 flex-wrap">
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

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {post.title}
          </h1>

          <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed">
            {post.excerpt}
          </p>

          <div className="border-t border-blue-900/30 mt-8 pt-8">
            <article className="text-gray-300 text-base leading-relaxed">
              {renderContent(post.content)}
            </article>
          </div>

          <div className="border-t border-blue-900/30 mt-12 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Thanks for reading. Want to chat?
            </p>
            <a
              href="mailto:rickykisiengo@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl text-xs font-bold transition-all"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogPost;