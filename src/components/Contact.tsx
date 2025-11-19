"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HiMail } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const gradient = "linear-gradient(90deg,#49BFC9 0%,#5F8DFF 50%,#9A8DFF 100%)";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        publicKey
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
    <section id="contact" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Heading + paragraph + email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            // Center on small screens, left-align on lg+
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            <h2
              className="
    font-extrabold leading-tight 
    text-center lg:text-left
    whitespace-nowrap          /* mobile: force single line */
    lg:whitespace-normal       /* desktop: allow wrapping */
  "
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                background: gradient,
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: 0.95,
              }}
            >
              Get in
              <span className="hidden lg:inline">
                <br />
              </span>{" "}
              Touch
            </h2>

            <p className="mt-6 text-lg text-gray-300 max-w-lg text-center lg:text-left">
              Ready to collaborate? Let's create something amazing together.
            </p>
          </motion.div>

          {/* RIGHT: Form card only (location removed) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-6"
          >
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                border: "1px solid rgba(95,141,255,0.04)",
                boxShadow: "0 12px 40px rgba(7,10,20,0.55)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(90deg,#9A8DFF,#5F8DFF)",
                      boxShadow: "0 6px 22px rgba(95,141,255,0.12)",
                    }}
                  >
                    <HiMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Send a message
                    </h4>
                    <p className="text-sm text-gray-400">
                      I'll reply as soon as I can.
                    </p>
                  </div>
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
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    style={{
                      background: "#0b1224c9", // visible panel background
                      border: "1px solid rgba(255,255,255,0.06)",
                      transition: "box-shadow 100ms ease, transform 100ms ease",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 8px 30px rgba(95,141,255,0.09)")
                    }
                    onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                  />

                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    required
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    style={{
                      background: "#0b1224c9",
                      border: "1px solid rgba(255,255,255,0.06)",
                      transition: "box-shadow 100ms ease, transform 100ms ease",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 8px 30px rgba(95,141,255,0.09)")
                    }
                    onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
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
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none resize-none"
                  style={{
                    background: "#0b1224c9",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "box-shadow 100ms ease, transform 100ms ease",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(95,141,255,0.09)")
                  }
                  onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                />

                <div className="flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg font-semibold text-[#021021]"
                    style={
                      isSubmitting
                        ? {
                            background: "rgba(255,255,255,0.04)",
                            cursor: "not-allowed",
                          }
                        : { background: gradient }
                    }
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  <div className="text-sm text-gray-400">
                    <div>{formData.message.length}/500</div>
                  </div>
                </div>

                {submitStatus && (
                  <div
                    role="status"
                    className={`mt-3 rounded-md px-4 py-2 text-sm ${
                      submitStatus === "success"
                        ? "text-emerald-200"
                        : "text-rose-200"
                    }`}
                    style={{
                      background:
                        submitStatus === "success"
                          ? "linear-gradient(90deg, rgba(73,191,201,0.03), rgba(95,141,255,0.02))"
                          : "linear-gradient(90deg, rgba(255,80,80,0.03), rgba(255,80,80,0.02))",
                      border:
                        submitStatus === "success"
                          ? "1px solid rgba(73,191,201,0.06)"
                          : "1px solid rgba(255,80,80,0.06)",
                    }}
                  >
                    {submitStatus === "success"
                      ? "✅ Message sent — thanks!"
                      : "❌ Failed to send. Try again."}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
