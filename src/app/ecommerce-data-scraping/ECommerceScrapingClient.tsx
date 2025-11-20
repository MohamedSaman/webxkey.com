"use client";

import { useLayoutEffect, useState } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import CollapsibleSections from "../../components/layouts/CollapsibleSections";
import Faqs from "../../components/layouts/Faqs";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import ScrapingContactForm from "@/components/ScrapingContactForm";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

const scrapingServices = [
  {
    id: 1,
    title: "Web Data Scraping Services",
    description:
      "Secure and scalable web scraping services tailored to your business needs. Extract data from websites easily with our professional solutions.",
    url: "/web-data-scraping-services",
    gradientFrom: "#1d86ff",
    gradientTo: "#3dd8ff",
  },
  {
    id: 2,
    title: "Data Scraping Service",
    description:
      "Custom data scraping services to empower your business with personalized solutions for business data collection.",
    url: "/data-scraping-services",
    gradientFrom: "#ff7e1d",
    gradientTo: "#ffd43d",
  },
  {
    id: 4,
    title: "Web Scraping API",
    description:
      "Integrate our powerful web scraping API into your apps for seamless automation and data integration.",
    url: "/web-scraping-api",
    gradientFrom: "#1dff8a",
    gradientTo: "#3dffd4",
  },
  {
    id: 5,
    title: "Price Monitoring",
    description:
      "Real-time price monitoring using web scraping technology to track competitors and market trends.",
    url: "/price-monitoring-scraping",
    gradientFrom: "#ff1d8a",
    gradientTo: "#ff3dd4",
  },
];

const ECommerceScrapingClient: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleViewDetailsClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();

    // Only show loader if we're not already on the target page
    if (pathname !== url) {
      setLoading(true);
      router.push(url);
    }
  };

  return (
    <div className="overflow-x-hidden">
      {loading && <Loading />}

      <div className="max-w-7xl mx-auto my-[80px] px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-transparent text-white pb-8 flex flex-col items-center text-center">
          <div className="max-w-4xl h-full bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white font-semibold px-4 pb-3 sm:px-6 sm:pb-4 md:mt-[-20px] rounded-lg flex items-center justify-center gap-2 sm:gap-3">
            <span className="text-4xl sm:text-6xl md:text-7xl">
              E-Commerce Data Scraping Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold mt-4 sm:mt-6 px-2 sm:px-4 leading-snug sm:leading-tight max-w-6xl">
            Extract. Analyze.Elevate{" "}
            <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
              <br className="hidden sm:block" />
              Next Level{" "}
            </span>
            Web Scraping for Your Business.
          </h2>

          <motion.div className="w-full mt-10 md:mt-14 lg:mt-16 space-y-16 lg:space-y-20">
            {/* First Row - Image Left / Text Right */}
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 w-full max-w-7xl mx-auto items-center">
              {/* Image on left for desktop */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/Images/web scraping 1.jpg"
                  alt="E-Commerce Product Data Scraping"
                  className="w-full h-auto rounded-lg md:rounded-xl lg:rounded-2xl border-2 border-gray-200/10 shadow-2xl hover:scale-[1.01] transition-all duration-300"
                  width={600}
                  height={400}
                  priority
                  fetchPriority="high"
                  quality={85}
                />
              </motion.div>

              {/* Text content on right for desktop */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  E-Commerce Product Data Extraction
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Extract accurate, real-time product data from any e-commerce
                  platform including Amazon, eBay, Walmart, and Shopify stores.
                  We handle complex product variants, dynamic pricing, and
                  inventory tracking.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>
                      Complete product details (titles, descriptions, specs)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Pricing history and discount monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Customer reviews and ratings extraction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Inventory status and stock level tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Product image and media download</span>
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
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Competitive Price Intelligence
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Gain the competitive edge with real-time price monitoring
                  across multiple marketplaces and regions. Our solutions track
                  pricing strategies, promotions, and market positioning of
                  competitors.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Daily price change monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>
                      MAP (Minimum Advertised Price) compliance tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Regional price variations analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Promotion and discount strategy insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Automated price change alerts</span>
                  </li>
                </ul>
              </motion.div>

              {/* Image - right on desktop */}
              <motion.div
                className="w-full lg:w-1/2 order-first lg:order-last"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Image
                  src="/Images/web scraping 2.jpg"
                  alt="Competitive Price Monitoring Dashboard"
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
                viewport={{ once: false, amount: 0.2 }}
              >
                <Image
                  src="/Images/web scraping 1.jpg"
                  alt="E-Commerce Market Analysis"
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
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Market Trend Analysis
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Transform raw e-commerce data into actionable market
                  intelligence with our advanced analytics platform.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Best-selling product tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Category performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Seasonal demand forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Competitor product assortment analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Custom reports and API integration</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.section
        className="bg-transparent text-white px-4 sm:px-6 lg:px-8 py-6 md:py-10 w-full mb-[60px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-center text-3xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff]">
              Other Web Scraping Services
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scrapingServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${service.gradientFrom}, ${service.gradientTo})`,
                    }}
                  >
                    {service.title}
                  </span>
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <motion.button
                  onClick={(e) => handleViewDetailsClick(e, service.url)}
                  className="inline-block px-4 py-2 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${service.gradientFrom}, ${service.gradientTo})`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details <FaArrowRight className="inline ml-1" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <CollapsibleSections
        dataSet="WebScraping"
        headerIcon="💡"
        headerText="OUR EXPERTISE"
      />
      <motion.h1
        className="text-3xl sm:text-5xl md:text-7xl font-semibold mt-4 sm:mt-6 px-4 sm:px-6 lg:px-8 leading-snug sm:leading-tight text-center text-white max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Request a{" "}
        <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
          Quote{" "}
        </span>
        Now
      </motion.h1>

      <motion.div
        className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <ScrapingContactForm />
      </motion.div>

      <Faqs />
    </div>
  );
};

export default ECommerceScrapingClient;
