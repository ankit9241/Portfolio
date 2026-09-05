"use client";
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { playClickSound } from "../utils/audio";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    playClickSound();
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleResumeOpen = () => {
    playClickSound();
    window.open("/resume/Ankit_Kumar_Resume.pdf", "_blank");
  };

  return (
    <footer className="relative bg-black text-text-primary pt-20 pb-0 overflow-hidden border-t border-white/[0.03]">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-45 z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/footer_bg.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/85 z-10 pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[72%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent z-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16">
        <div className="md:col-span-5 flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-wider uppercase text-white">
              Ankit
            </span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
            Passionate Full-Stack Developer specializing in building high-performance web applications, premium user interfaces, and interactive experiences.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/ankit9241"
              target="_blank"
              rel="me noopener noreferrer"
              onClick={() => playClickSound()}
              className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition text-text-secondary hover:text-white"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankitkumar1109/"
              target="_blank"
              rel="me noopener noreferrer"
              onClick={() => playClickSound()}
              className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition text-text-secondary hover:text-white"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="mailto:ankitkumar.iitp09@gmail.com"
              onClick={() => playClickSound()}
              className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition text-text-secondary hover:text-white"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">Explore</h4>
          <ul className="space-y-2.5 text-sm text-text-secondary font-medium">
            <li>
              <button
                onClick={() => handleNavClick("home")}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("skills")}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Tech Stack
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("experience")}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Experience
              </button>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">Projects</h4>
          <ul className="space-y-2.5 text-sm text-text-secondary font-medium">
            <li>
              <button
                onClick={() => handleNavClick("projects")}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Featured
              </button>
            </li>
            <li>
              <button
                onClick={() => { playClickSound(); navigate("/projects"); }}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                All Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("certificates")}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Certificates
              </button>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">Office</h4>
          <ul className="space-y-2.5 text-sm text-text-secondary font-medium">
            <li className="flex items-start gap-2 text-left">
              <MapPin className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
              <span>Jamshedpur, JH, India</span>
            </li>
            <li className="flex items-start gap-2 text-left">
              <Mail className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
              <span className="break-all">ankitkumar.iitp09@gmail.com</span>
            </li>
            <li>
              <button
                onClick={handleResumeOpen}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer group text-left"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>
            </li>
          </ul>
        </div>

      </div>

      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-4 -mb-2 sm:-mb-4 md:-mb-6">
        <h1
          className="text-center font-black tracking-[0.05em] leading-none select-none text-[18vw] sm:text-[20vw] md:text-[22vw]"
          style={{
            backgroundImage: "linear-gradient(to top, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.02) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Instrument Sans', sans-serif",
          }}
        >
          Ankit
        </h1>

        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-white/[0.06] via-white/[0.02] to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent z-20" />
      </div>
    </footer>
  );
};

export default Footer;
