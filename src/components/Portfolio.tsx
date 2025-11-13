import { motion } from "framer-motion";
import Image from "next/image";

const Portfolio = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16 bg-transparent mb-16">
      <div className="container mx-auto px-4">
        {/* Animated h2 - will trigger every time it comes into view */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff] mb-7 pb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          Our WordPress Design Portfolio
        </motion.h2>

        {/* Grid Portfolio Section - will trigger every time it comes into view */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {/* Portfolio Item 1 */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            variants={itemVariants}
          >
            <Image
              src="/Images/Project 06.png"
              alt="Ecommerce WordPress Website"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">
                Online Store
              </h3>
              <p className="text-gray-400">
                Custom WooCommerce development with advanced product filtering
                and checkout optimization.
              </p>
            </div>
          </motion.div>

          {/* Portfolio Item 2 */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            variants={itemVariants}
          >
            <Image
              src="/Images/Project 03.png"
              alt="Corporate WordPress Website"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">
                Corporate Business Website
              </h3>
              <p className="text-gray-400">
                Professional WordPress design with custom CMS integration and
                multilingual support.
              </p>
            </div>
          </motion.div>

          {/* Portfolio Item 3 */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            variants={itemVariants}
          >
            <Image
              src="/Images/Project 02.png"
              alt="Membership WordPress Website"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">
                Membership Portal
              </h3>
              <p className="text-gray-400">
                Custom WordPress development with member-only content and
                subscription management.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Alternating Layout Section - updated to trigger every time */}
        <motion.div className="w-full space-y-16 lg:space-y-20">
          {/* First Row - Image Left / Text Right */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 w-full max-w-7xl mx-auto items-center">
            {/* Image on left for desktop */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ amount: 0.2 }}
            >
              <Image
                src="/Images/Project 04.png"
                alt="Custom Theme Development"
                className="w-full h-auto rounded-lg md:rounded-xl lg:rounded-2xl border-2 border-gray-200/10 shadow-2xl hover:scale-[1.01] transition-all duration-300"
                width={600}
                height={400}
              />
            </motion.div>

            {/* Text content on right for desktop */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ amount: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Custom Theme Development
              </h3>
              <p className="text-gray-300 font-semibold text-lg leading-relaxed">
                We create bespoke WordPress themes tailored to your brand
                identity and business requirements, ensuring pixel-perfect
                designs across all devices.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">
                    Fully responsive and mobile-optimized
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">
                    Custom page templates and layouts
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">Performance-optimized code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">SEO-friendly structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">
                    Easy-to-use customizer options
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Second Row - Text Left / Image Right */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 w-full max-w-7xl mx-auto items-center">
            {/* Text content - left on desktop */}
            <motion.div
              className="w-full lg:w-1/2 lg:order-first order-last"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ amount: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Plugin Development & Integration
              </h3>
              <p className="text-gray-300 font-semibold text-lg leading-relaxed">
                Extend WordPress functionality with custom plugins or seamless
                integration of existing solutions to meet your specific business
                needs.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">Custom plugin development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">
                    Third-party API integrations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">E-commerce functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">Security enhancements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">Performance optimization</span>
                </li>
              </ul>
            </motion.div>

            {/* Image - right on desktop */}
            <motion.div
              className="w-full lg:w-1/2 order-first lg:order-last"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ amount: 0.2 }}
            >
              <Image
                src="/Images/Project 05.png"
                alt="Plugin Development"
                className="w-full h-auto rounded-lg md:rounded-xl lg:rounded-2xl border-2 border-gray-200/10 shadow-2xl hover:scale-[1.01] transition-all duration-300"
                width={600}
                height={400}
              />
            </motion.div>
          </div>

          {/* Third Row - Image Left / Text Right */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 w-full max-w-7xl mx-auto items-center">
            {/* Image on left for desktop */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ amount: 0.2 }}
            >
              <Image
                src="/Images/Project 01.png"
                alt="Maintenance Services"
                className="w-full h-auto rounded-lg md:rounded-xl lg:rounded-2xl border-2 border-gray-200/10 shadow-2xl hover:scale-[1.01] transition-all duration-300"
                width={600}
                height={400}
              />
            </motion.div>

            {/* Text content on right for desktop */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ amount: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ongoing Maintenance & Support
              </h3>
              <p className="text-gray-300 font-semibold text-lg leading-relaxed">
                Keep your WordPress site secure, updated, and performing at its
                best with our comprehensive maintenance plans.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">
                    Regular core and plugin updates
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">
                    Security monitoring and hardening
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">Backup management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span className="text-white">Emergency support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
