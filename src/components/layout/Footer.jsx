import {
  FaGithub,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ricky <span className="text-blue-500">Kisiengo</span>
            </h2>

            <p className="leading-7">
              Full Stack Developer passionate about building
              modern, responsive, and scalable web applications
              using the latest technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500">About</a></li>
              <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/rick864"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:rickykisiengo@gmail.com"
                className="hover:text-blue-500 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-slate-800 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">

          <p>
            © {new Date().getFullYear()} Ricky Kisiengo. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-5 md:mt-0 bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition"
          >
            <FaArrowUp className="text-white" />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;