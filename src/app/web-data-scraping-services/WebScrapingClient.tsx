"use client";

import { useLayoutEffect, useState } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import Image from "next/image";
import CollapsibleSections from "../../components/layouts/CollapsibleSections";
import Faqs from "../../components/layouts/Faqs";
import PageHeader from "@/components/PageHeader";
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
    title: "Web Scraping Services",
    description:
      "Secure and scalable web scraping services tailored to your business needs. Extract data from websites easily with our professional solutions.",
    url: "/web-scraping-services",
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
    id: 3,
    title: "eCommerce Data Scraping",
    description:
      "eCommerce web scraping for product, price & reviews. Perfect for dropshipping, pricing intelligence, and catalog creation.",
    url: "/ecommerce-data-scraping",
    gradientFrom: "#8a1dff",
    gradientTo: "#d43dff",
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

const WebScrapingClient: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleViewDetailsClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    if (pathname !== url) {
      setLoading(true);
      router.push(url);
    }
  };

  return (
    <div className="overflow-x-hidden">
      {loading && <Loading />}

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          tagline="Web Scraping Services"
          heading="Extract. Analyze. Elevate Next Level"
          highlightedText="Web Scraping for Your Business."
          description="Our advanced web scraping services deliver high-quality, structured data from websites, helping your business gain actionable insights and stay ahead of the competition."
          imageSrc="/Images/web scraping 1.jpg"
          imageAlt="Web Scraping Services"
        />

        {/* ===== Content Section (unchanged) ===== */}
        <motion.div className="w-full mt-10 md:mt-14 lg:mt-16 space-y-16 lg:space-y-20">
          {/* First Row - Image Left / Text Right */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 w-full max-w-7xl mx-auto items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src="/Images/web scraping 1.jpg"
                alt="Comprehensive Web Scraping Services"
                className="w-full h-auto rounded-lg md:rounded-xl lg:rounded-2xl border-2 border-gray-200/10 shadow-2xl hover:scale-[1.01] transition-all duration-300"
                width={600}
                height={400}
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Enterprise-Grade Web Scraping Solutions
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our advanced web scraping services deliver high-quality,
                structured data from even the most complex websites. We specialize
                in large-scale data extraction with 99.9% accuracy while fully
                complying with legal requirements.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Custom-built scrapers for any website complexity</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Headless browser automation for JavaScript-heavy sites</span>
                </li> 
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Advanced proxy rotation and CAPTCHA solving</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Real-time monitoring and alert systems</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>GDPR and data privacy compliance</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Second Row - Text Left / Image Right */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 w-full max-w-7xl mx-auto items-center">
            <motion.div
              className="w-full lg:w-1/2 lg:order-first order-last"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Intelligent Data Processing
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Transform raw data into business-ready insights with our
                comprehensive data processing pipeline. We apply machine learning
                and AI techniques to enhance, categorize, and validate your
                scraped data.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>AI-powered data enrichment and normalization</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Automated deduplication and error correction</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Custom data transformation rules</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Sentiment analysis and entity recognition</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>API integration and database storage</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 order-first lg:order-last"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src="/Images/web scraping 2.jpg"
                alt="Data Processing Pipeline"
                className="w-full h-auto rounded-lg md:rounded-xl lg:rounded-2xl border-2 border-gray-200/10 shadow-2xl hover:scale-[1.01] transition-all duration-300"
                width={600}
                height={400}
              />
            </motion.div>
          </div>

          {/* Third Row - Image Left / Text Right */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 w-full max-w-7xl mx-auto items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src="/Images/web scraping 1.jpg"
                alt="Data Analytics Dashboard"
                className="w-full h-auto rounded-lg md:rounded-xl lg:rounded-2xl border-2 border-gray-200/10 shadow-2xl hover:scale-[1.01] transition-all duration-300"
                width={600}
                height={400}
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Actionable Insights & Analytics
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Go beyond raw data with our comprehensive analytics solutions. We
                help you uncover patterns, trends, and opportunities hidden in
                your scraped data.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Custom dashboards and visualizations</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Competitor intelligence reports</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Price monitoring and trend analysis</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Automated alerts for significant changes</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Historical data archiving and comparison</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* ===== Services Section ===== */}
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
                Our Web Scraping Services
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
    </div>
  );
};

export default WebScrapingClient;