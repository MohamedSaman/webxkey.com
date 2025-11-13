"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FiMonitor,
  FiCode,
  FiSmartphone,
  FiTrendingUp,
  FiLayers,
  FiShoppingBag,
  FiAward,
  FiDatabase,
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import { FaWordpress } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FiMonitor className="w-8 h-8" />,
    title: "Website Development",
    description:
      "Create responsive, high-performance websites tailored to your business needs. From simple landing pages to complex web applications, we deliver seamless digital experiences.",
    route: "/website-development",
  },
  {
    id: 2,
    icon: <FiSmartphone className="w-8 h-8" />,
    title: "App Development",
    description:
      "Build custom mobile applications for iOS and Android platforms. Our solutions focus on intuitive design, smooth functionality, and scalability to grow with your business.",
    route: "/app-development",
  },
  {
    id: 3,
    icon: <FiLayers className="w-8 h-8" />,
    title: "UI/UX Design",
    description:
      "Craft visually stunning and user-friendly interfaces that enhance engagement. We combine aesthetics with usability to create memorable digital experiences.",
    route: "/ui-ux-design",
  },
  {
    id: 4,
    icon: <FiCode className="w-8 h-8" />,
    title: "Blockchain",
    description:
      "Implement secure blockchain solutions including smart contracts, dApps, and decentralized systems. Leverage cutting-edge technology for transparent and tamper-proof operations.",
    route: "/blockchain",
  },
  {
    id: 5,
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: "SEO Services",
    description:
      "Boost your online visibility and organic traffic with proven SEO strategies. We optimize content, technical setup, and backlink profiles to improve search rankings.",
    route: "/seo-services",
  },
  {
    id: 6,
    icon: <FiShoppingBag className="w-8 h-8" />,
    title: "Social Media Marketing",
    description:
      "Maximize your brand's social media presence with targeted campaigns. We create engaging content and data-driven strategies to connect with your ideal audience.",
    route: "/social-media-marketing",
  },
  {
    id: 7,
    icon: <FiAward className="w-8 h-8" />,
    title: "Brand Identity",
    description:
      "Develop a cohesive brand identity that resonates with your audience. From logos to style guides, we create visual systems that communicate your unique value.",
    route: "/brand-identity",
  },
  {
    id: 8,
    icon: <FaWordpress className="w-8 h-8" />,
    title: "WordPress Website Development",
    description:
      "Build high-performance, responsive WordPress websites tailored to your business goals. From custom themes to plugin integration, we deliver scalable and SEO-optimized solutions.",
    route: "/wordpress-website-designing-services",
  },
  {
    id: 9,
    icon: <FiDatabase className="w-8 h-8" />,
    title: "Web Data Scraping",
    description:
      "Extract valuable insights from websites with our powerful web scraping services. We automate data collection from multiple sources, ensuring accuracy and efficiency at scale.",
    route: "/web-data-scraping-services",
  },
];

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

const ServicesCards = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const handleNavigation = (route: string) => {
    setLoading(true);
    setTimeout(() => {
      router.push(route);
    }, 500); // Small delay to ensure loading spinner is visible
  };

  return (
    <>
      <section className="py-0 -mt-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-transparent relative">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -20% 0px" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-blue-200/50 flex flex-col h-full"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <button
                  onClick={() => handleNavigation(service.route)}
                  className="text-blue-600 mb-4 p-3 bg-white rounded-lg w-fit hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
                  aria-label={`${service.title} icon link`}
                >
                  {service.icon}
                </button>
                <button
                  onClick={() => handleNavigation(service.route)}
                  className="text-xl font-bold mb-3 text-white hover:text-blue-200 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded cursor-pointer"
                  aria-label={`Navigate to ${service.title}`}
                >
                  {service.title}
                </button>
                <p className="text-gray-100 mb-4 flex-grow text-justify">
                  {service.description}
                </p>
                <button
                  onClick={() => handleNavigation(service.route)}
                  className="mt-auto text-white font-bold hover:text-[#4D62FF] transition-colors text-sm cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
                  aria-label={`Read more about ${service.title}`}
                >
                  Read More →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {loading && <Loading />}
    </>
  );
};

export default ServicesCards;
