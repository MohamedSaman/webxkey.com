import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
}

const MotionImage = motion.create(Image);

const teamMembers: TeamMember[] = [
  {
    name: "Farhan Ahmed",
    title: "Co-Founder",
    image: "/Images/defaultProfile.png",
    linkedin: "https://www.linkedin.com/in/farhan-nazar-212480107/",
  },
  {
    name: "Mohamed Saman",
    title: "Software Engineer Bsc & BEng",
    image: "/Images/Mohamed Saman.png",
    linkedin: "https://www.linkedin.com/in/mohamed-saman-linked/",
  },

   {
    name: "Suhaib Malik",
    title: "HR",
    image: "/Images/defaultProfile.png",
    linkedin: "https://www.linkedin.com/in/shuaib-malik-4755812a3/",
  },
 
 
 
  {
    name: "Mohammed Akmal",
    title: "Web Developer Intern",
    image: "/Images/defaultProfile.png",
    linkedin: "https://www.linkedin.com/in/mohamed-akmal",
  },
  
 
  {
    name: "Mohammed Minhaj",
    title: "Web Developer Intern",
    image: "/Images/defaultProfile.png",
    linkedin: "https://www.linkedin.com/in/mohammed-minhaj-a5721a29a/",
  },

 {
    name: "Mohamad Sahan",
    title: "Web Developer Intern",
    image: "/Images/defaultProfile.png",
    linkedin: "https://www.linkedin.com/in/mohamad-sahan",
  },
  {
    name: "Basith Ahamad",
    title: "Web Developer Intern",
    image: "/Images/defaultProfile.png",
    linkedin: "https://www.linkedin.com/in/basith-ahamad-59591630a",
  },

   {
    name: "Wang Xing",
    title: "Blockchain Developer",
    image: "/Images/defaultProfile.png",
    linkedin: "",
  },

   {
    name: "Fazeen Nasar",
    title: "Senior Software Engineer",
    image: "/Images/defaultProfile.png",
    linkedin: "",
  },

];

const TeamGrid = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [, setColumns] = useState(4); // Default to 4 columns for larger screens
  const [initialVisibleCount, setInitialVisibleCount] = useState(8); // 2 rows of 4

  // Update columns and initial visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;

      if (window.innerWidth < 640) {
        // Mobile: 1 column
        setColumns(1);
        setInitialVisibleCount(2); // 2 rows of 1
      } else if (window.innerWidth < 1024) {
        // Tablet: 2 columns
        setColumns(2);
        setInitialVisibleCount(4); // 2 rows of 2
      } else {
        // Desktop: 4 columns
        setColumns(4);
        setInitialVisibleCount(8); // 2 rows of 4
      }
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
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

  const visibleMembers = isExpanded
    ? teamMembers
    : teamMembers.slice(0, initialVisibleCount);

  const showViewMore = teamMembers.length > initialVisibleCount;

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Expert Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the talented professionals driving innovation forward
          </p>
        </motion.div>

        <motion.div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {visibleMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
              whileHover="hover"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-gray-800 border border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
                <MotionImage
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-200 font-medium">
                    {member.title}
                  </p>
                </div>
              </div>

              <div className="mt-4 px-2 text-center">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400">{member.title}</p>

                {member.linkedin && (
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 mt-3 rounded-full bg-gray-700 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="text-lg" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {showViewMore && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? "View Less" : "View More"}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamGrid;
