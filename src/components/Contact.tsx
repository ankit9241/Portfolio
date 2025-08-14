
'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_c4bz07r';
      const templateId = 'template_yr9gqb3';
      const publicKey = 'GAyorinfHSZ0EIyrB';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ankitkumar.iitp09@gmail.com',
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "ankitkumar.iitp09@gmail.com",
      link: "mailto:ankitkumar.iitp09@gmail.com"
    },
    {
      icon: HiPhone,
      title: "Phone",
      value: "+91 92412 72626",
      link: "tel:+919241272626"
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Jamshedpur, Jharkhand, India",
      link: "https://maps.google.com?q=Jamshedpur,India"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/ankit-kumar-0435b8257/",
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      hoverBgColor: 'hover:bg-blue-200 dark:hover:bg-blue-800/50',
      iconColor: 'text-blue-600 dark:text-blue-400',
      hoverIconColor: 'group-hover:text-blue-700 dark:group-hover:text-blue-300',
      shadowColor: 'shadow-blue-500/30'
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/ankit9241",
      bgColor: 'bg-gray-100 dark:bg-gray-800/30',
      hoverBgColor: 'hover:bg-gray-200 dark:hover:bg-gray-700/50',
      iconColor: 'text-gray-700 dark:text-gray-300',
      hoverIconColor: 'group-hover:text-gray-800 dark:group-hover:text-gray-200',
      shadowColor: 'shadow-gray-500/30'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.title === "Location" ? "_blank" : undefined}
                  rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-200">
                      <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">{info.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`group w-12 h-12 ${social.bgColor} rounded-xl shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer`}
                  >
                    <social.icon className={`w-6 h-6 ${social.iconColor} ${social.hoverIconColor} transition-colors duration-200`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form id="contact-form" onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Send Me a Message
              </h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 text-sm"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 text-sm"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    maxLength={500}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200 resize-none text-sm"
                    placeholder="Tell me about your project or just say hello!"
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      } text-white`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </motion.div>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl text-center font-medium ${submitStatus === 'success'
                      ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                      }`}
                  >
                    {submitStatus === 'success'
                      ? '✅ Message sent successfully! I\'ll get back to you soon.'
                      : '❌ Failed to send message. Please try again.'}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
