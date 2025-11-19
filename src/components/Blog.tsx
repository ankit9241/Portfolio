"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCalendar, HiClock, HiArrowRight } from "react-icons/hi";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const blogPosts = [
    {
      title: "How I Built My First Full Stack App",
      excerpt:
        "A detailed journey of creating my first complete web application using the MERN stack. From planning and design to deployment and optimization, here's everything I learned along the way.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Development",
      image:
        "https://readdy.ai/api/search-image?query=Developer%20working%20on%20laptop%20coding%20a%20web%20application%2C%20modern%20workspace%20setup%20with%20multiple%20monitors%2C%20clean%20desk%2C%20professional%20programming%20environment%2C%20warm%20lighting&width=400&height=250&seq=blog-fullstack&orientation=landscape",
      tags: ["React", "Node.js", "MongoDB", "Tutorial"],
      slug: "how-i-built-my-first-full-stack-app",
    },
    {
      title: "Why React + Tailwind is a Power Combo",
      excerpt:
        "Exploring the perfect synergy between React's component-based architecture and Tailwind CSS's utility-first approach. Learn how this combination accelerates development and improves maintainability.",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Frontend",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20web%20development%20setup%20with%20React%20and%20Tailwind%20CSS%20logos%2C%20colorful%20UI%20components%2C%20design%20system%20elements%2C%20developer%20tools%20interface%2C%20vibrant%20colors&width=400&height=250&seq=blog-react-tailwind&orientation=landscape",
      tags: ["React", "Tailwind CSS", "UI/UX", "Best Practices"],
      slug: "why-react-tailwind-is-a-power-combo",
    },
    {
      title: "Frontend vs Backend - My Learning Journey",
      excerpt:
        "From choosing between frontend and backend development to becoming a full-stack developer. My personal experience, challenges faced, and insights gained during this transformative journey.",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Career",
      image:
        "https://readdy.ai/api/search-image?query=Split%20screen%20showing%20frontend%20UI%20design%20on%20one%20side%20and%20backend%20server%20architecture%20on%20the%20other%2C%20technology%20stack%20visualization%2C%20developer%20career%20path%20illustration&width=400&height=250&seq=blog-frontend-backend&orientation=landscape",
      tags: ["Career", "Learning", "Full Stack", "Experience"],
      slug: "frontend-vs-backend-my-learning-journey",
    },
  ];

  return (
    <section id="blog" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #49BFC9 0%, #5F8DFF 50%, #9A8DFF 100%)' }}>
            Latest Blog Posts
          </h2>
          <div
            className="w-28 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg,#49BFC9,#5F8DFF,#9A8DFF)' }}
          />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
            Sharing thoughts, experiences, and practical guides on web development,
            tools, and my learning journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              animate={
                isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.98 }
              }
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 120 }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(10,12,30,0.6)" }}
              className="group bg-[#071026] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(30,30,60,0.25)] transition-all duration-300 border"
              style={{ borderColor: "rgba(95,141,255,0.08)" }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.45 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: "linear-gradient(180deg, rgba(10,12,24,0.0) 0%, rgba(7,16,38,0.5) 60%)",
                     }} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://medium.com/@ankitkumar.iitp09/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full font-medium flex items-center space-x-2 text-sm"
                    style={{ background: "linear-gradient(90deg,#49BFC9,#5F8DFF)" }}
                  >
                    <span className="text-white">Read More</span>
                    <HiArrowRight className="w-4 h-4 text-white" />
                  </motion.a>
                </div>

                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 text-sm font-semibold rounded-full"
                    style={{ background: "linear-gradient(90deg,#49BFC9,#5F8DFF)", color: "#061026" }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.55, delay: index * 0.15 + 0.15 }}
                  className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-[#5F8DFF] transition-colors"
                >
                  {post.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.55, delay: index * 0.15 + 0.25 }}
                  className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3"
                >
                  {post.excerpt}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.55, delay: index * 0.15 + 0.35 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{ background: "rgba(95,141,255,0.06)", color: "#C7D6FF" }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.55, delay: index * 0.15 + 0.45 }}
                  className="flex items-center justify-between text-sm text-gray-400 mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <HiCalendar className="w-4 h-4 text-gray-300" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <HiClock className="w-4 h-4 text-gray-300" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.55, delay: index * 0.15 + 0.55 }}
                  className="flex items-center justify-between"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium"
                    style={{
                      background: "linear-gradient(90deg,#49BFC9,#5F8DFF)",
                      color: "#021021",
                      boxShadow: "0 8px 30px rgba(79,70,255,0.12)",
                    }}
                  >
                    <span>Read More</span>
                    <HiArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 30px rgba(79,70,255,0.18)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-xl font-semibold whitespace-nowrap"
            style={{
              background: "linear-gradient(90deg,#49BFC9,#5F8DFF,#9A8DFF)",
              color: "#021021",
            }}
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
