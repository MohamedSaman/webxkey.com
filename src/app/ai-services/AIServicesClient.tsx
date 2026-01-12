"use client";
import React, { JSX, useLayoutEffect } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import {
  FaRobot,
  FaChartLine,
  FaLanguage,
  FaEye,
  FaCog,
  FaCloud,
  FaPalette,
  FaCheckCircle,
} from "react-icons/fa";

const AIServicesClient = (): JSX.Element => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aiCapabilities = [
    {
      icon: <FaRobot className="text-5xl md:text-6xl text-cyan-400" />,
      title: "AI-Powered Customer Experience & Support",
      description:
        "Transform the way you interact with customers using intelligent AI assistants that work 24/7.",
      services: [
        "AI Chatbots & Virtual Assistants (Web, Mobile, WhatsApp, Messenger)",
        "Automated Helpdesk & Ticketing Bots",
        "AI-Driven Voice Assistants & Call Center Bots",
        "Multilingual & NLP-powered conversations",
      ],
      benefits: [
        "Faster customer response",
        "Reduced support costs",
        "Improved customer satisfaction",
      ],
      idealFor: "Ecommerce, telecom, insurance, healthcare, service industries",
    },
    {
      icon: <FaChartLine className="text-5xl md:text-6xl text-cyan-400" />,
      title: "Predictive Analytics & Data Intelligence",
      description:
        "Turn your business data into actionable insights and future predictions.",
      services: [
        "Sales & demand forecasting",
        "Customer churn prediction",
        "Risk & fraud detection models",
        "AI-powered business intelligence dashboards",
        "Recommendation engines for personalization",
      ],
      benefits: [
        "Data-driven decision making",
        "Reduced operational risks",
        "Improved revenue forecasting",
      ],
      idealFor: "Retail, finance, logistics, marketing, manufacturing",
    },
    {
      icon: <FaLanguage className="text-5xl md:text-6xl text-cyan-400" />,
      title: "Natural Language Processing (NLP) & Language AI",
      description:
        "Leverage AI that understands, analyzes, and generates human language.",
      services: [
        "Document summarization & intelligent search",
        "AI-powered content generation",
        "Semantic search & machine translation",
        "Sentiment analysis & text classification",
      ],
      benefits: [
        "Faster document processing",
        "Improved knowledge management",
        "Automated content workflows",
      ],
      idealFor: "Media, education, consulting, legal, enterprises",
    },
    {
      icon: <FaEye className="text-5xl md:text-6xl text-cyan-400" />,
      title: "Computer Vision & Image / Video AI",
      description:
        "Enable AI systems that see, analyze, and understand visual data.",
      services: [
        "Image recognition & object detection",
        "Automated video analytics",
        "Face & biometric recognition systems",
        "Quality inspection & damage detection solutions",
      ],
      benefits: [
        "Enhanced security & monitoring",
        "Improved quality control",
        "Reduced manual inspection costs",
      ],
      idealFor: "Manufacturing, retail, healthcare, security",
    },
    {
      icon: <FaCog className="text-5xl md:text-6xl text-cyan-400" />,
      title: "Intelligent Automation & Workflow AI",
      description:
        "Automate repetitive and decision-based tasks using AI-driven workflows.",
      services: [
        "AI-powered Robotic Process Automation (RPA)",
        "Intelligent workflow automation",
        "AI workforce agents for operations & support",
        "AI-enhanced CRM & ERP systems",
      ],
      benefits: [
        "Increased productivity",
        "Faster business processes",
        "Lower operational costs",
      ],
      idealFor: "Enterprises, BPOs, operations teams",
    },
    {
      icon: <FaCloud className="text-5xl md:text-6xl text-cyan-400" />,
      title: "End-to-End AI Platforms & Custom AI Development",
      description: "We handle everything from data to deployment.",
      services: [
        "Custom machine learning & deep learning models",
        "Cloud AI platform integration (AWS, Azure, Google Cloud)",
        "AI deployment, monitoring & optimization",
        "AI governance, compliance & performance tracking",
      ],
      benefits: [
        "Scalable & future-ready AI systems",
        "Secure & compliant deployments",
        "Continuous model improvement",
      ],
      idealFor: "Large enterprises, regulated industries, tech platforms",
    },
    {
      icon: <FaPalette className="text-5xl md:text-6xl text-cyan-400" />,
      title: "AI-Assisted Creative & Generative AI Solutions",
      description:
        "Enhance creativity and marketing with AI-powered generation tools.",
      services: [
        "AI-generated marketing content & copy",
        "Automated design & UI assistance",
        "AI-powered audio, video & voice generation",
        "Custom generative AI tools for business use",
      ],
      benefits: [
        "Faster content creation",
        "Consistent brand messaging",
        "Reduced creative costs",
      ],
      idealFor: "Agencies, media companies, creators",
    },
  ];

  const whyChooseUs = [
    "Custom-built AI solutions (not generic tools)",
    "Industry-ready & scalable architectures",
    "Secure, compliant & production-grade systems",
    "Seamless integration with existing software",
    "Continuous support & optimization",
    "Experienced team of AI & business experts",
  ];

  const techStack = [
    { category: "Languages", items: "Python, JavaScript, Java, Kotlin" },
    {
      category: "AI Frameworks",
      items: "TensorFlow, PyTorch, Scikit-learn",
    },
    {
      category: "LLMs & NLP",
      items: "OpenAI, Hugging Face, LangChain",
    },
    { category: "Computer Vision", items: "OpenCV, YOLO" },
    {
      category: "Cloud Platforms",
      items: "AWS, Azure, Google Cloud",
    },
    {
      category: "Databases",
      items: "SQL, NoSQL, Vector Databases",
    },
  ];

  const developmentProcess = [
    "Business requirement analysis",
    "Data collection & preparation",
    "AI model design & training",
    "System integration & deployment",
    "Monitoring, optimization & support",
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          tagline="🤖 AI Services"
          heading="Intelligent AI Solutions That Drive"
          highlightedText="Business Growth"
          description="At Webxkey, we deliver end-to-end AI solutions that help businesses automate operations, improve customer experiences, and make smarter decisions using data. From AI chatbots and predictive analytics to computer vision and intelligent automation, we design, build, and deploy AI systems tailored to your business needs. We don't just build AI — we solve business problems with AI."
          imageSrc="/Images/AII.jpg"
          imageAlt="AI Services - Intelligent Solutions"
        />

        {/* Description Section */}
        <motion.section
          className="bg-transparent text-white py-6 md:py-10 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-col items-center gap-4 mb-8">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A team of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff]">
                AI experts
              </span>{" "}
              that can help you build intelligent solutions you&apos;re proud of
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-gray-400 text-center max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At <b>Webxkey</b>, we specialize in transforming businesses through
              cutting-edge artificial intelligence. Whether you need intelligent
              chatbots, predictive analytics, or custom AI models, our expert team
              delivers production-ready solutions that drive real business value.
            </motion.p>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="py-10 md:py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              🚀 Why Choose Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff]">
                AI Services
              </span>
              ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-[#0a1628] to-[#0d1b2a] p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <FaCheckCircle className="text-white text-lg" />
                  </div>
                  <p className="text-gray-200 text-base font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AI Capabilities Section */}
        <motion.section
          className="py-10 md:py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              🧠 Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff]">
                AI Capabilities
              </span>
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6 w-full">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#0f2744] to-[#1a1f3a] p-4 md:p-6 lg:p-8 rounded-lg md:rounded-xl border border-cyan-500/30 hover:border-cyan-500/50 transition-colors duration-300 w-full"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/40">
                    {capability.icon}
                  </div>
                  <div className="flex-1 min-w-0 w-full">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 break-words">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
                  <div className="space-y-2 md:space-y-3 w-full">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 md:h-5 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                      <h4 className="text-sm md:text-base font-semibold text-cyan-400">
                        What We Offer
                      </h4>
                    </div>
                    <ul className="space-y-1.5 md:space-y-2 w-full">
                      {capability.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="text-gray-200 text-xs md:text-sm flex items-start gap-2"
                        >
                          <span className="text-cyan-400 mt-0.5 text-sm flex-shrink-0">•</span>
                          <span className="leading-relaxed break-words">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 md:space-y-3 w-full">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 md:h-5 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                      <h4 className="text-sm md:text-base font-semibold text-green-400">
                        Business Benefits
                      </h4>
                    </div>
                    <ul className="space-y-1.5 md:space-y-2 mb-3 md:mb-4 w-full">
                      {capability.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="text-gray-200 text-xs md:text-sm flex items-start gap-2"
                        >
                          <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0 text-xs md:text-sm" />
                          <span className="leading-relaxed break-words">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-800/40 p-3 rounded-lg border border-cyan-500/20 w-full">
                      <p className="text-xs md:text-sm text-gray-300">
                        <span className="font-semibold text-cyan-400 block mb-1">
                          💼 Ideal for:
                        </span>
                        <span className="text-gray-200 break-words">{capability.idealFor}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology Stack Section */}
        <motion.section
          className="py-10 md:py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              🛠️ Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff]">
                Technology Stack
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              We use modern, enterprise-grade AI technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  {tech.category}
                </h3>
                <p className="text-gray-300">{tech.items}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Development Process Section */}
        <motion.section
          className="py-10 md:py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              🧪 Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff]">
                AI Development Process
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {developmentProcess.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 rounded-xl border border-gray-700/50">
                  <p className="text-gray-200 text-lg">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-10 md:py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              🤝 Let&apos;s Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff]">
                Intelligent Solutions Together
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Whether you need a simple AI chatbot or a full-scale AI platform,
              our team is ready to help you transform your business with
              intelligent technology.
            </p>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <section className="py-10">
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-semibold mb-10 leading-snug sm:leading-tight text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s Start Your{" "}
            <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
              AI Project
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AIServicesClient;
