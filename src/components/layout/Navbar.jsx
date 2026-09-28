import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/80 backdrop-blur-lg border-b border-blue-900/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="text-2xl font-extrabold tracking-tight"
        >
          <span className="text-blue-400">Ricky</span>
          <span className="text-white">.</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-400 hover:text-white transition"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4 text-gray-400">
          <a
            href="https://github.com/rick864"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-blue-900/30 bg-[#0b0f19] px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-sm text-gray-300 hover:text-blue-400 transition py-2"
            >
              {link.name}
            </button>
          ))}

          <div className="flex gap-4 pt-3 border-t border-blue-900/30">
            <a
              href="https://github.com/rick864"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;