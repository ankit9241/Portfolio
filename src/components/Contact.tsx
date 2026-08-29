"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { playClickSound } from "../utils/audio";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
      return;
    }
    setIsSubmitting(true);
    try {
      // Keep your EmailJS values or replace with real ones
      const serviceId = "service_c4bz07r";
      const templateId = "template_yr9gqb3";
      const publicKey = "GAyorinfHSZ0EIyrB";
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "ankitkumar.iitp09@gmail.com",
        },
        publicKey,
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="w-full relative py-24 px-6 md:px-12 bg-black overflow-hidden border-t border-white/5">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-45 z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/footer_bg.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/85 z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-white leading-[0.88] text-center lg:text-left select-none">
              <span className="block font-sans">Get in</span>
              <span className="block font-serif italic font-normal text-[#E1E0CC]">Touch</span>
            </h2>

            <p className="mt-6 text-lg text-text-secondary max-w-lg text-center lg:text-left font-sans">
              Ready to collaborate? Let&apos;s create something amazing together.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mt-8">
              <a
                href="https://github.com/ankit9241"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/10 text-xs font-medium text-[#C0C0C0] hover:text-white transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5 text-[#BDBDBD] group-hover:text-white transition-colors" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/ankitkumar1109/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClickSound()}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/10 text-xs font-medium text-[#C0C0C0] hover:text-white transition-all duration-200"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#BDBDBD] group-hover:text-white transition-colors" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="mailto:ankitkumar.iitp09@gmail.com"
                onClick={() => playClickSound()}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/10 text-xs font-medium text-[#C0C0C0] hover:text-white transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-[#BDBDBD] group-hover:text-white transition-colors" />
                <span>Email</span>
                <ArrowUpRight className="w-3 h-3 text-[#666666] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="text-center">
                <h4 className="text-xl font-medium text-white font-sans">
                  Send a message
                </h4>
                <p className="text-sm text-text-secondary mt-1">
                  I&apos;ll reply as soon as I can.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              id="contact-form"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  required
                  className="w-full px-4 py-3.5 rounded-2xl text-text-primary placeholder-text-secondary focus:outline-none bg-black/60 backdrop-blur-md border border-white/15 focus:border-white/40 transition-all"
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3.5 rounded-2xl text-text-primary placeholder-text-secondary focus:outline-none bg-black/60 backdrop-blur-md border border-white/15 focus:border-white/40 transition-all"
                />
              </div>

              <textarea
                name="message"
                rows={6}
                maxLength={500}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                required
                className="w-full px-4 py-3.5 rounded-2xl text-text-primary placeholder-text-secondary focus:outline-none resize-none bg-black/60 backdrop-blur-md border border-white/15 focus:border-white/40 transition-all"
              />

              <div className="flex items-center justify-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-full font-medium text-black bg-[#E1E0CC] hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-pointer"
                >
                  {isSubmitting
                    ? "Sending..."
                    : submitStatus === "success"
                      ? "Message Sent!"
                      : "Send Message"}
                </button>

                <div className="text-sm text-text-secondary font-mono">
                  <div>{formData.message.length}/500</div>
                </div>
              </div>

              {submitStatus && (
                <div
                  role="status"
                  className={`mt-3 rounded-xl px-4 py-2.5 text-sm backdrop-blur-md ${
                    submitStatus === "success"
                      ? "text-emerald-300 bg-emerald-950/40 border border-emerald-500/30"
                      : "text-rose-300 bg-rose-950/40 border border-rose-500/30"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Message sent - Thanks!</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      <span>Failed to send. Try again.</span>
                    </div>
                  )}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
