import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface CardItem {
  title: string;
  icon: string;
  description: string;
}

const GridCardAbout = () => {
  const cards: CardItem[] = [
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
        "Understanding your audience is key to success, and at Webxkey, we provide the tools and expertise to unveil impactful insights about your target market. Through in-depth analysis and innovative methodologies, we help you connect with your audience on a deeper level, ensuring your strategies are both precise and effective. Partner with Webxkey to decode your audience's preferences and elevate your engagement to new heights.",
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
      transition: { duration: 0.6, ease: [0.16, 0.77, 0.47, 0.97] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-16 bg-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={staggerContainer}
    >
      {/* Section Title */}
      <motion.div className="text-center max-w-4xl mx-auto mb-16">
        <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-indigo-600/30 border border-indigo-400/30 text-white shadow-lg mb-4">
          💎 OUR VALUE
        </span>
        <h2 className="text-white text-4xl md:text-5xl font-bold leading-snug">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            We believe
          </span>{" "}
          the best work emerges from{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            collaboration
          </span>{" "}
          and communication. By following our curiosity,{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            we spark innovation
          </span>
        </h2>
      </motion.div>

      {/* Grid Layout - full width and aligned */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="rounded-2xl p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-2"
            style={{
              background:
                "linear-gradient(135deg, rgba(60,60,180,0.7) 0%, rgba(20,20,60,0.9) 100%)",
              border: "1px solid rgba(128,0,255,0.3)",
            }}
          >
            <div className="w-14 h-14 mb-4 relative">
              <Image
                src={card.icon}
                alt={card.title}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GridCardAbout;
