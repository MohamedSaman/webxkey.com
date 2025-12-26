"use client";
import React, { JSX, useLayoutEffect } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
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
        {/* Header Section */}
        <section className="my-[60px] md:my-[80px] relative">
          {/* Decorative background shapes */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side Content */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              {/* Tagline */}
              <motion.div
                className="inline-block bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white font-semibold px-5 py-2 rounded-full shadow-lg"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                🤖 AI Services
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Intelligent AI Solutions That Drive{" "}
                <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
                  Business Growth
                </span>
              </motion.h1>

              {/* Supporting Paragraph */}
              <motion.p
                className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                At <b>Webxkey</b>, we deliver end-to-end AI solutions that help
                businesses automate operations, improve customer experiences,
                and make smarter decisions using data. From AI chatbots and
                predictive analytics to computer vision and intelligent
                automation, we design, build, and deploy AI systems tailored to
                your business needs.
              </motion.p>

              <motion.p
                className="text-xl font-semibold text-cyan-400 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                We don't just build AI — we solve business problems with AI.
              </motion.p>
            </div>

            {/* Right Side Image with Glow & Blur Backgrounds */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
              <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl -z-10"></div>

              <motion.div
                className="relative group"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Floating Background Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-xl rotate-45 -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-400/20 rounded-full -z-10"></div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 -z-10"></div>
                  <Image
                    src="/Images/AII.jpg"
                    alt="AI Services - Intelligent Solutions"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    width={800}
                    height={600}
                    quality={85}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
              that can help you build intelligent solutions you're proud of
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              🧠 Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d86ff] to-[#3dd8ff]">
                AI Capabilities
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-[#0a1628]/80 to-[#0d1b2a]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-start gap-4 md:gap-6 mb-6">
                    {/* Icon with gradient background */}
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                      {capability.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {capability.title}
                      </h3>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                        <h4 className="text-lg font-semibold text-cyan-400">
                          What We Offer
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {capability.services.map((service, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 flex items-start gap-3 group/item hover:text-white transition-colors duration-200"
                          >
                            <span className="text-cyan-400 mt-1 text-lg">•</span>
                            <span className="leading-relaxed">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                        <h4 className="text-lg font-semibold text-green-400">
                          Business Benefits
                        </h4>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {capability.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 flex items-start gap-3 group/item hover:text-white transition-colors duration-200"
                          >
                            <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                            <span className="leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 rounded-xl border border-gray-700/50">
                        <p className="text-sm text-gray-400">
                          <span className="font-semibold text-cyan-400 block mb-1">
                            💼 Ideal for:
                          </span>
                          <span className="text-gray-300">{capability.idealFor}</span>
                        </p>
                      </div>
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
              🤝 Let's Build{" "}
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
            Let's Start Your{" "}
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
