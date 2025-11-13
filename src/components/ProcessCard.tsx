import React from 'react';
import { motion } from 'framer-motion';
import { BiShuffle } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import { SlLayers } from "react-icons/sl";
import { BiSolidGrid } from "react-icons/bi";

interface ProcessStep {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ProcessCard: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      title: "Discovery",
      icon: <BiShuffle className="text-2xl" />,
      description:
        "We collaborate to understand your business goals, challenges, and needs, gathering insights to create a tailored solution.",
    },
    {
      title: "Design",
      icon: <GoPencil className="text-2xl" />,
      description:
        "Our team transforms ideas into intuitive, user-friendly designs that reflect your brand and engage your audience effectively.",
    },
    {
      title: "Development",
      icon: <SlLayers className="text-2xl" />,
      description:
        "Using the latest technologies, we bring the designs to life, ensuring seamless functionality, performance, and scalability across platforms.",
    },
    {
      title: "Launch",
      icon: <BiSolidGrid className="text-2xl" />,
      description:
        "Once testing is complete, we deploy your solution with precision, ensuring a smooth transition and ongoing support for long-term success.",
    },
  ];

  return (
    <motion.div 
      className="bg-gradient-to-b from-[#000a29] to-[#0a2574] p-6 md:p-12 text-white rounded-3xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut"
            }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -5 }}
          >
            {/* Icon and Title Container with center alignment */}
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.2 }}
            >
              <motion.div 
                className="p-2 bg-blue-500 text-white rounded-full mr-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-bold">{step.title}</h3>
            </motion.div>
            {/* Description with increased line spacing */}
            <motion.p 
              className="text-gray-300 leading-relaxed pl-14"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              {step.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProcessCard;