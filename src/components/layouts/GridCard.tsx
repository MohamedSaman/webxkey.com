import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Card {
  title: string;
  icon: string;
  description: string;
}

// Create a motion version of the Image component
const MotionImage = motion(Image);

const GridCard: React.FC = () => {
  const cards: Card[] = [
    {
      title: "Expert Direction",
      icon: "/Images/Asset-038.png",
      description:
        "At Webxkey, we specialize in providing tailored solutions that empower your business to thrive in a dynamic digital landscape. With unparalleled expertise and innovative strategies, we guide our clients toward achieving their goals with precision and confidence. Whether you're seeking cutting-edge technology, insightful direction, or transformative ideas, Webxkey is here to unlock your potential and propel you to success.",
    },
    {
      title: "Audience Insights",
      icon: "/Images/Asset-039.png",
      description:
        "Understanding your audience is key to success, and at Webxkey, we provide the tools and expertise to unveil impactful insights about your target market. Through in-depth analysis and innovative methodologies, we help you connect with your audience on a deeper level, ensuring your strategies are both precise and effective. Partner with Webxkey to decode your audience’s preferences and elevate your engagement to new heights.",
    },
    {
      title: "Integrated Approach",
      icon: "/Images/Asset-040.png",
      description:
        "At Webxkey, we believe that seamless integration is the foundation of impactful solutions. Our integrated approach combines diverse strategies, innovative technologies, and collaborative expertise to deliver results that drive success. By harmonizing every element of your business, we ensure efficiency, consistency, and a unified path toward your goals. Experience the power of integration with Webxkey as your trusted partner.",
    },
    {
      title: "Management",
      icon: "/Images/Asset-041.png",
      description:
        "At Webxkey, effective management is at the heart of everything we do. Our management strategies are designed to foster innovation, enhance collaboration, and drive exceptional outcomes. With a focus on leadership, accountability, and adaptability, we ensure that every project is executed with precision and excellence. Trust Webxkey to lead your initiatives and transform challenges into opportunities for growth.",
    },
    {
      title: "Experienced Remotely",
      icon: "/Images/Asset-042.png",
      description:
        "At Webxkey, distance is never a limitation—it's an opportunity. With a wealth of experience in remote collaboration, we seamlessly integrate talent, technology, and strategy to deliver exceptional results, no matter where you are. Our flexible and efficient approach ensures that you receive unwavering support and expertise, fostering success in a connected world. Trust Webxkey to transform remote challenges into boundless opportunities.",
    },
    {
      title: "Measure & Iterate",
      icon: "/Images/Asset-043.png",
      description:
        "At Webxkey, we understand that success is a journey of continuous improvement. Our approach emphasizes measuring performance with precision, gathering actionable insights, and iterating strategies to optimize results. By refining each step of the process, we ensure your goals are not just met but exceeded. Partner with Webxkey to embrace a culture of progress and adaptability, driving sustained success.",
    },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97], // Using cubic-bezier values
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8 bg-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={staggerContainer}
    >
     {/* Section Title */}
<div className="py-20 flex flex-col items-center justify-center text-center">
  {/* Increased vertical padding */}
  <motion.div
    className="flex flex-col items-center gap-4 mb-6 text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, margin: "-100px 0px -100px 0px" }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    }}
  >
    {/* Button with enhanced animation */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
          },
        },
      }}
    >
      <motion.span
        className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold 
                   backdrop-blur-md bg-blue-700/30 border border-blue-400/30 
                   shadow-lg shadow-blue-500/20 text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="text-xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          👨‍💻
        </motion.span>{" "}
        HOW WE WORK
      </motion.span>
    </motion.div>

    {/* Heading with staggered animation */}
    <motion.h2
      className="text-white text-5xl font-bold text-center max-w-4xl leading-snug"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 60,
          },
        },
      }}
    >
      Our <span className="text-blue-400">methodology</span> has been
      tested and proven <span className="text-blue-400">successful</span>
    </motion.h2>
  </motion.div>
</div>


      {/* First row - left-aligned on large screens */}
      <motion.div
        className="flex flex-col lg:flex-row lg:justify-start gap-6 mb-6"
        variants={staggerContainer}
      >
        {cards.slice(0, 3).map((card) => (
          <motion.div
            key={card.title}
            variants={fadeInUp}
            className="w-full lg:w-1/4 rounded-lg shadow-lg p-6 text-white"
            style={{
              background:
                "linear-gradient(135deg, rgba(100, 100, 220, 0.8) 0%, rgba(25, 25, 25, 0.9) 100%)",
              border: "1px solid rgba(128, 0, 128, 0.3)",
              cursor: "pointer",
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(128, 0, 128, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MotionImage
              width={1200}
              height={1200}
              src={card.icon}
              alt={card.title}
              className="w-12 h-12 mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            />
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-300">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Second row - right-aligned on large screens */}
      <motion.div
        className="flex flex-col lg:flex-row lg:justify-end gap-6"
        variants={staggerContainer}
      >
        {cards.slice(3).map((card) => (
          <motion.div
            key={card.title}
            variants={fadeInUp}
            className="w-full lg:w-1/4 rounded-lg shadow-lg p-6 text-white"
            style={{
              background:
                "linear-gradient(135deg, rgba(100, 100, 220, 0.8) 0%, rgba(25, 25, 25, 0.9) 100%)",
              border: "1px solid rgba(128, 0, 128, 0.3)",
              cursor: "pointer",
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(128, 0, 128, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MotionImage
              width={1200}
              height={1200}
              src={card.icon}
              alt={card.title}
              className="w-12 h-12 mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            />
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-300">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GridCard;
