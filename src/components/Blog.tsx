'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCalendar, HiClock, HiArrowRight } from 'react-icons/hi';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const blogPosts = [
    {
      title: "How I Built My First Full Stack App",
      excerpt: "A detailed journey of creating my first complete web application using the MERN stack. From planning and design to deployment and optimization, here's everything I learned along the way.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Development",
      image: "https://readdy.ai/api/search-image?query=Developer%20working%20on%20laptop%20coding%20a%20web%20application%2C%20modern%20workspace%20setup%20with%20multiple%20monitors%2C%20clean%20desk%2C%20professional%20programming%20environment%2C%20warm%20lighting&width=400&height=250&seq=blog-fullstack&orientation=landscape",
      tags: ["React", "Node.js", "MongoDB", "Tutorial"],
      slug: "how-i-built-my-first-full-stack-app"
    },
    {
      title: "Why React + Tailwind is a Power Combo",
      excerpt: "Exploring the perfect synergy between React's component-based architecture and Tailwind CSS's utility-first approach. Learn how this combination accelerates development and improves maintainability.",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Frontend",
      image: "https://readdy.ai/api/search-image?query=Modern%20web%20development%20setup%20with%20React%20and%20Tailwind%20CSS%20logos%2C%20colorful%20UI%20components%2C%20design%20system%20elements%2C%20developer%20tools%20interface%2C%20vibrant%20colors&width=400&height=250&seq=blog-react-tailwind&orientation=landscape",
      tags: ["React", "Tailwind CSS", "UI/UX", "Best Practices"],
      slug: "why-react-tailwind-is-a-power-combo"
    },
    {
      title: "Frontend vs Backend – My Learning Journey",
      excerpt: "From choosing between frontend and backend development to becoming a full-stack developer. My personal experience, challenges faced, and insights gained during this transformative journey.",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Career",
      image: "https://readdy.ai/api/search-image?query=Split%20screen%20showing%20frontend%20UI%20design%20on%20one%20side%20and%20backend%20server%20architecture%20on%20the%20other%2C%20technology%20stack%20visualization%2C%20developer%20career%20path%20illustration&width=400&height=250&seq=blog-frontend-backend&orientation=landscape",
      tags: ["Career", "Learning", "Full Stack", "Experience"],
      slug: "frontend-vs-backend-my-learning-journey"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Sharing my thoughts, experiences, and insights about web development, 
            technology trends, and my learning journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ 
                opacity: 0, 
                y: 50,
                scale: 0.9
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                scale: 1
              } : { 
                opacity: 0, 
                y: 50,
                scale: 0.9
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://medium.com/@ankitkumar.iitp09/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium flex items-center space-x-2 text-sm"
                  >
                    <span>Read More</span>
                    <HiArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                >
                  {post.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed"
                >
                  {post.excerpt}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <HiCalendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <HiClock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  className="flex items-center justify-between"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
                  >
                    <span>Read More</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiArrowRight className="w-4 h-4" />
                    </motion.div>
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
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;