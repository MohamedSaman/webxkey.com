import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaChevronDown, FaTimes } from "react-icons/fa";

interface Section {
  id: number;
  title: string;
  content: string;
}

interface SectionData {
  [key: string]: Section[];
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 0.77, 0.47, 0.97],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// All possible section data sets
const SECTION_DATA: SectionData = {
  branding: [
    {
      id: 1,
      title: "Brand Strategy",
      content:
        "We meticulously craft a comprehensive strategy that defines your brand's values, mission, and market positioning. This strategy serves as the foundation for all branding efforts, ensuring your brand is well-positioned to thrive in the competitive landscape.",
    },
    {
      id: 2,
      title: "Brand Design",
      content:
        "Our skilled designers create visually compelling brand elements, including logos, color schemes, typography, and more. Each design is tailored to communicate your brand's identity and connect emotionally with your target audience.",
    },
    {
      id: 3,
      title: "Brand Guidelines",
      content:
        "To maintain consistency and professionalism, we provide detailed brand guidelines. These include rules for logo usage, fonts, colors, and tone of voice, ensuring that every touchpoint consistently represents your brand.",
    },
    {
      id: 4,
      title: "Brand Implementation",
      content:
        "Once your brand identity is established, we ensure its successful implementation across all digital and physical platforms, including websites, social media, packaging, and marketing materials, ensuring a cohesive brand presence.",
    },
    {
      id: 5,
      title: "Brand Repositioning",
      content:
        "For businesses looking to refresh or reinvent their brand, we offer expert repositioning services. Whether adapting to new markets or shifting brand focus, we help realign your brand with evolving trends and customer expectations to ensure continued relevance and growth.",
    },
  ],

  appDevelopment: [
    {
      id: 1,
      title: "App Strategy",
      content:
        "We develop tailored strategies that align your app's objectives with user needs, ensuring a clear roadmap for success",
    },
    {
      id: 2,
      title: "App Design",
      content:
        "Our design team creates intuitive and visually appealing interfaces, focusing on user experience (UX) and user interface (UI) to keep your users engaged.",
    },
    {
      id: 3,
      title: "App Guidelines",
      content:
        "We provide comprehensive guidelines for app functionality and design, ensuring consistency and quality throughout the development process.",
    },
    {
      id: 4,
      title: "App Implementation",
      content:
        "We execute the development process using the latest technologies and methodologies, delivering a robust and scalable application.",
    },
    {
      id: 5,
      title: "App Repositioning",
      content:
        "If your app needs a refresh, we offer repositioning services to enhance its features and improve user engagement, adapting to market trends.",
    },
  ],

  webDevelopment: [
    {
      id: 1,
      title: "Full stack web development",
      content:
        "We provide end-to-end web development solutions, creating dynamic and responsive websites that deliver an engaging user experience. Our expertise spans across front-end and back-end development, ensuring a seamless integration of visual design and robust functionality. From simple landing pages to complex web applications, we have the skills to bring your vision to life.",
    },
    {
      id: 2,
      title: "eCommerce Builds",
      content:
        "Our eCommerce solutions are designed to help your business sell more online. We build custom, scalable online stores with user-friendly interfaces and secure payment gateways, ensuring a smooth shopping experience for your customers. Whether you need a complete online store or specific enhancements, our eCommerce builds drive conversions and support your growth.",
    },
    {
      id: 3,
      title: "Web & Mobile Apps",
      content:
        "Expand your digital presence with our tailored web and mobile app development services. We specialize in creating intuitive, feature-rich apps that work seamlessly across devices. Our team develops custom apps that meet your business needs, providing a responsive and engaging experience for users, whether they are on desktop or mobile.",
    },
    {
      id: 4,
      title: "Integrations (CRM & API)",
      content:
        "Streamline your business processes with our custom integrations, connecting your website with CRM systems, third-party applications, and APIs. We simplify data flow and improve efficiency, allowing you to focus on what matters most. Our integration services ensure that your systems communicate effortlessly, enhancing productivity and operational capabilities.",
    },
    {
      id: 5,
      title: "On-page SEO",
      content:
        "Boost your website's visibility with our on-page SEO services. We optimize your site's structure, content, and technical elements to ensure search engines can easily index and rank your pages. From keyword optimization to meta tags and URL structuring, our on-page SEO strategies improve your site's performance and help you reach your target audience effectively",
    },
  ],

  blockchain: [
    {
      id: 1,
      title: "Solana Blockchain Network",
      content:
        "We specialize in developing and integrating solutions on the Solana blockchain, known for its high speed and low transaction costs. Our expertise ensures seamless deployment and scalability for your projects on the Solana network.",
    },
    {
      id: 2,
      title: "Blockchain App",
      content:
        "Create custom blockchain applications tailored to your needs. From secure data management to smart contract development, we deliver robust blockchain apps that enhance trust and transparency in your business.",
    },
    {
      id: 3,
      title: "Telegram APP",
      content:
        "Develop powerful Telegram apps to enhance communication and automate processes. Our Telegram solutions include custom bots and integrations, enabling businesses to streamline interactions and engage effectively with their audience.",
    },
    {
      id: 4,
      title: "Bot Creating",
      content:
        "Automate repetitive tasks and improve efficiency with custom-built bots. We design and develop bots for a variety of platforms, ensuring they meet your specific requirements and provide value through automation.",
    },
    
  ],

  uiUx: [
    {
      id: 1,
      title: "UI/UX Strategy",
      content:
        "We create detailed strategies to optimize user experiences, aligning design with business goals to ensure smooth interactions and satisfaction.",
    },
    {
      id: 2,
      title: "UI Design",
      content:
        "Our design team crafts visually appealing interfaces that are both modern and functional, ensuring an intuitive flow and aesthetic consistency.",
    },
    {
      id: 3,
      title: "UX Design",
      content:
        "We focus on delivering a seamless user experience, ensuring that every interaction on your site or app is smooth, efficient, and enjoyable.",
    },
    {
      id: 4,
      title: "UI/UX Guidelines",
      content:
        "We provide comprehensive guidelines that help maintain a consistent design language across all digital platforms, ensuring brand cohesion and user familiarity.",
    },
    {
      id: 5,
      title: "UI/UX Implementation",
      content:
        "From concept to execution, we ensure that our designs are perfectly implemented, delivering fully functional interfaces that elevate the user experience.",
    },
  ],

  SMM: [
    {
      id: 1,
      title: "Target Audience Research",
      content:
        "We develop customized social media strategies tailored to your brand's goals, ensuring that your messaging reaches the right audience at the right time.",
    },
    {
      id: 2,
      title: "Platform-Specific Strategies",
      content:
        "Not all platforms are the same. We craft tailored strategies for each social media platform (Facebook, Instagram, LinkedIn, Twitter, TikTok) to ensure your brand message is optimized for each channel's unique strengths.",
    },
    {
      id: 3,
      title: "Content Calendar Planning",
      content:
        "Consistency is key to maintaining engagement. We design a detailed content calendar that outlines what, when, and where content will be posted, keeping your brand in the spotlight while aligning with your business goals.",
    },
    {
      id: 4,
      title: "Engaging Content Creation",
      content:
        "We develop high-quality, visually appealing, and interactive content that resonates with your audience. This includes posts, stories, reels, videos, and more, designed to captivate users and encourage interaction.",
    },
    {
      id: 5,
      title: "Social Media Advertising",
      content:
        "Our targeted advertising campaigns are designed to maximize reach and conversion, helping you get the most out of your social media marketing budget.",
    },
    {
      id: 6,
      title: "Analytics & Reporting",
      content:
        "We track and analyze performance metrics to provide you with detailed insights, helping you make informed decisions and optimize future campaigns.",
    },
    {
      id: 7,
      title: "Email Marketing",
      content:
        "Reach your potential clients with us — connect with them efficiently through our experts",
    },
  ],

  SEO: [
    {
      id: 1,
      title: "SEO Strategy",
      content:
        "Crafting data-driven strategies to enhance search engine rankings and drive organic traffic.",
    },
    {
      id: 2,
      title: "SEO Strategies",
      content:
        "At WebxKey, we create customized SEO strategies that boost your website's visibility and rankings. Through keyword research, content optimization, and link building, we help drive targeted organic traffic while adapting to search engine changes for long-term success",
    },
    {
      id: 3,
      title: "SEO Guidelines",
      content:
        "Providing clear, actionable guidelines for maintaining ongoing SEO best practices.",
    },
    {
      id: 4,
      title: "SEO Implementation",
      content:
        "Applying effective on-page and off-page SEO techniques to boost rankings and visibility.",
    },
    {
      id: 5,
      title: "SEO Repositioning",
      content:
        "Adjusting and refreshing SEO efforts to align with changing market trends and algorithm updates.",
    },
  ],

  WebScraping: [
    {
      id: 1,
      title: "What is Web Scraping?",
      content:
        "Web scraping is the automated process of extracting data from websites, transforming unstructured web content into structured, usable formats for analysis and business insights.",
    },
    {
      id: 2,
      title: "How We Extract Data Safely and Legally",
      content:
        "At WebxKey, we follow strict ethical guidelines and legal compliance to ensure our web scraping practices respect website terms, privacy policies, and data protection laws.",
    },
    {
      id: 3,
      title: "Supported Websites (eCommerce, Real Estate, Social Media, etc.)",
      content:
        "We specialize in scraping data from diverse platforms, including eCommerce sites (Amazon, eBay), real estate listings (Zillow), social media (Twitter, LinkedIn), and more.",
    },
    {
      id: 4,
      title: "Delivery Format Options (CSV, JSON, Excel, API)",
      content:
        "Receive your scraped data in multiple formats—CSV for spreadsheets, JSON for developers, Excel for reporting, or via API for real-time integration.",
    },
    {
      id: 5,
      title: "Live Project Examples or Case Studies",
      content:
        "Explore real-world applications of our web scraping services, from competitive price monitoring to lead generation and sentiment analysis.",
    },
  ],
  WordPressFAQs: [
    {
      id: 1,
      title: "What makes your WordPress development services different?",
      content:
        "As a professional WordPress development agency, we focus on creating custom solutions rather than using pre-made themes. Our WordPress web design services are tailored to each client's specific needs, with attention to performance, security, and user experience.",
    },
    {
      id: 2,
      title: "How much does a custom WordPress website cost?",
      content:
        "The cost of WordPress website development varies based on complexity, features, and design requirements. Our WordPress development company offers transparent pricing with packages starting from $250 for basic sites. Contact us for a detailed quote based on your specific needs.",
    },
    {
      id: 3,
      title: "Do you provide ongoing WordPress support?",
      content:
        "Yes, our WordPress support agency offers comprehensive maintenance plans including security updates, performance optimization, backups, and technical support. Many of our clients choose to retain us for ongoing WordPress developer services after their site launches.",
    },
    {
      id: 4,
      title: "How long does it take to develop a WordPress website?",
      content:
        "The timeline for WordPress web development depends on the project scope. A basic website typically takes 4-6 weeks, while more complex eCommerce sites or custom applications may take 8-12 weeks. As a leading WordPress design agency, we prioritize quality while working efficiently to meet deadlines.",
    },
  ],
};

interface CollapsibleSectionsProps {
  dataSet?: keyof typeof SECTION_DATA;
  headerIcon?: string;
  headerText?: string;
}

export default function CollapsibleSections({
  dataSet = "webDevelopment",
  headerIcon = "💡",
  headerText = "OUR EXPERTISE",
}: CollapsibleSectionsProps) {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());
  const sections = SECTION_DATA[dataSet] || SECTION_DATA.webDevelopment;

  const toggleSection = (id: number) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <motion.div
      className="p-6 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto lg:flex lg:gap-8">
        {/* Left column - 25% width on large screens */}
        <motion.div className="lg:w-1/4" variants={sectionVariants}>
          <motion.button
            className="flex items-center space-x-3 text-white px-6 py-4 rounded-xl mb-4 lg:mb-0 lg:sticky lg:top-6 transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-yellow-300 text-xl">{headerIcon}</span>
            <span className="text-lg font-medium">{headerText}</span>
          </motion.button>
        </motion.div>

        {/* Right column - 75% width on large screens */}
        <motion.div className="lg:w-3/4" variants={sectionVariants}>
          <div className="space-y-2">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                className="border-b border-gray-600/50 pb-2"
                variants={sectionVariants}
              >
                <motion.div
                  className="flex justify-between items-center py-4 cursor-pointer group"
                  onClick={() => toggleSection(section.id)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="text-xl font-semibold lg:text-2xl group-hover:text-blue-300 transition-colors duration-300">
                    <span className="mr-3 text-gray-400">{`0${section.id}`}</span>
                    {section.title}
                  </div>
                  <motion.button
                    className="p-2 rounded-lg bg-gray-700/50 transition-all duration-300 group-hover:bg-blue-600/50 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {openSections.has(section.id) ? (
                      <FaTimes className="text-green-400 text-lg" />
                    ) : (
                      <FaChevronDown className="text-gray-300 text-lg transition-transform duration-300 group-hover:text-white" />
                    )}
                  </motion.button>
                </motion.div>
                <motion.div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.has(section.id) ? "max-h-96" : "max-h-0"
                  }`}
                  initial={false}
                  animate={{
                    opacity: openSections.has(section.id) ? 1 : 0.8,
                    y: openSections.has(section.id) ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gray-800/30 p-4 rounded-xl backdrop-blur-sm">
                    <p className="text-gray-300 lg:text-lg leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
