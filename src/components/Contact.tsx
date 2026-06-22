"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const gradient = "linear-gradient(90deg, #FFFFFF, #888888)";

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
    <section id="contact" className="py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-5xl mx-auto">
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
              className="font-extrabold leading-tight text-center lg:text-left whitespace-nowrap lg:whitespace-normal"
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

            <p className="mt-6 text-lg text-text-secondary max-w-lg text-center lg:text-left">
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
              className="rounded-3xl p-6 md:p-8"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17,17,17,0.02), rgba(17,17,17,0.01))",
                border: "1px solid #2A2A2A",
                boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-text-primary">
                    Send a message
                  </h4>

                  <p className="text-sm text-text-secondary">
                    I'll reply as soon as I can.
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
                    className="w-full px-4 py-3 rounded-3xl text-text-primary placeholder-text-secondary focus:outline-none"
                    style={{
                      background: "rgba(17,17,17,0.8)",

                      border: "1px solid #2A2A2A",

                      transition: "box-shadow 100ms ease, transform 100ms ease",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 8px 30px rgba(255, 255, 255, 0.09)")
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
                    className="w-full px-4 py-3 rounded-3xl text-text-primary placeholder-text-secondary focus:outline-none"
                    style={{
                      background: "rgba(17,17,17,0.8)",

                      border: "1px solid #2A2A2A",

                      transition: "box-shadow 100ms ease, transform 100ms ease",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 8px 30px rgba(255, 255, 255, 0.09)")
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
                  className="w-full px-4 py-3 rounded-3xl text-text-primary placeholder-text-secondary focus:outline-none resize-none"
                  style={{
                    background: "rgba(17,17,17,0.8)",

                    border: "1px solid #2A2A2A",

                    transition: "box-shadow 100ms ease, transform 100ms ease",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(58, 134, 255, 0.09)")
                  }
                  onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                />

                <div className="flex items-center justify-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-3xl font-semibold text-black"
                    style={
                      isSubmitting
                        ? {
                            background: "rgba(255, 255, 255, 0.1)",

                            cursor: "not-allowed",
                          }
                        : submitStatus === "success"
                          ? {
                              background: "rgba(34, 197, 94, 0.2)",

                              cursor: "default",
                            }
                          : { background: gradient }
                    }
                  >
                    {isSubmitting
                      ? "Sending..."
                      : submitStatus === "success"
                        ? "Message Sent!"
                        : "Send Message"}
                  </button>

                  <div className="text-sm text-text-secondary">
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
                          ? "linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))"
                          : "linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",

                      border:
                        submitStatus === "success"
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "1px solid rgba(255,255,255,0.06)",
                    }}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
