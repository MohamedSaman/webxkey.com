"use client";

import { useState } from "react";
import { Folder, X } from "lucide-react";
import { FaArrowRight, FaExpand } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

interface ProjectsSectionProps {
  hideMoreProjects?: boolean;
  showOnlyTwoRows?: boolean; // New prop to control row display
}

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

const projects = [
  {
    title: "AI Therapy In Your Pocket",
    category: "Web Development",
    tech: "(NLP + Express + React)",
    url: "https://abby.gg",
    image: "/Images/Project 01.png",
  },
  {
    title: "Server Configurator",
    category: "Web Development",
    tech: "(WordPress + Python Django Backend)",
    url: "https://computer.com/",
    image: "/Images/Project 02.png",
  },
  {
    title: "Expert Onsite & Remote IT Services",
    category: "Web Development",
    tech: "(WordPress + CSS)",
    url: "https://sontech.co.nz/",
    image: "/Images/Project 03.png",
  },
  {
    title: "AI-native customer support System",
    category: "Web Development",
    tech: "(Next.js + TailwindCSS)",
    url: "https://www.markprompt.com/",
    image: "/Images/Project 04.png",
  },
  {
    title: "Online jewelry E-Commerce",
    category: "Web Development",
    tech: "(WordPress + CSS)",
    url: "https://jaffnagold.com/",
    image: "/Images/Project 05.png",
  },
  {
    title: "Online E-Commerce Shop",
    category: "Web Development",
    tech: "(WordPress + CSS)",
    url: "https://dynamicacelanka.com/",
    image: "/Images/Project 06.png",
  },
  {
    title: "Next-Gen Solutions",
    category: "Web Development",
    tech: "(WordPress + CSS)",
    url: "https://nextgensolutionspng.com/",
    image: "/Images/Project 07.png",
  },
  {
    title: "FineGroupsFine Group of Company",
    category: "Web Development",
    tech: "(WordPress + CSS)",
    url: "https://fine.lk/",
    image: "/Images/Project 08.png",
  },
  {
    title: "Miracle Vision",
    category: "Web Development",
    tech: "(WordPress + CSS)",
    url: "https://mvmiracle.com/",
    image: "/Images/Project 09.png",
  },
  {
    title: "Freightways PNG ",
    category: "Web Development",
    tech: "(WordPress + CSS)",
    url: "https://freightwayspng.com/",
    image: "/Images/Project 10.png",
  },
  {
    title: "Onlinewatchshop",
    category: "Web Development",
    tech: "(WordPress + CSS)",
    url: "https://onlinewatchuk.com/",
    image: "/Images/Project 11.png",
  },
  {
    title: "Crowe MacKay Website",
    category: "Web Development",
    tech: "(ASP.NET + CSS)",
    url: "https://www.crowe.com/ca/crowemackay",
    image: "/Images/Project 12.png",
  },
  {
    title: "k9casino Website",
    category: "Web Development",
    tech: "(Next.js + TailwindCSS)",
    url: "https://play.k9casino.io/",
    image: "/Images/Project 13.png",
  },
  {
    title: "Global Tattoo Wewbsite",
    category: "Web Development",
    tech: "(Wix + GSAP)",
    url: "https://www.globaltattoo.be/",
    image: "/Images/Project 14.png",
  },
  {
    title: "Mice Asia Website",
    category: "Web Development",
    tech: "(Laravel + TailwindCSS)",
    url: "https://miceasia.asia/homepage",
    image: "/Images/Project 15.png",
  },
  {
    title: "ImageFree Website",
    category: "Web Development",
    tech: "(jQuery + Bootstrap)",
    url: "https://imagefree.com/en",
    image: "/Images/Project 16.png",
  },
  {
    title: "United Portraits Website",
    category: "Web Development",
    tech: "(WordPress + CSS)",
    url: "https://unitedportraits.com/",
    image: "/Images/Project 17.png",
  },
  {
    title: "Twiport Website",
    category: "Web Development",
    tech: "(Laravel + TailwindCSS)",
    url: "https://twiport.com/homepage",
    image: "/Images/Project 18.png",
  },
];

export default function ProjectsSection({
  hideMoreProjects = false,
  showOnlyTwoRows = false, // Default to false for backward compatibility
}: ProjectsSectionProps) {
  const [popup, setPopup] = useState({ open: false, url: "", title: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Calculate the number of projects to show (6 for two rows in a 3-column grid)
  const projectsToShow = showOnlyTwoRows ? projects.slice(0, 6) : projects;

  const handleMoreProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Only show loader if we're not already on the projects page
    if (pathname !== "/project") {
      setLoading(true);
      router.push("/project");
    }
  };

  const openPopup = (url: string, title: string) => {
    setPopup({ open: true, url, title });
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopup({ open: false, url: "", title: "" });
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <motion.div
        className="bg-transparent text-white py-8 md:py-16 px-4 sm:px-6 md:px-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* Popup Modal */}
        {popup.open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col">
              <div className="flex justify-between items-center bg-gray-900 p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold text-white">
                  {popup.title}
                </h3>
                <button
                  onClick={closePopup}
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Close popup"
                >
                  <X className="w-6 h-6 cursor-pointer" />
                </button>
              </div>
              <div className="flex-1 bg-gray-800 rounded-b-lg overflow-hidden">
                <iframe
                  src={popup.url}
                  className="w-full h-full border-0"
                  title={`${popup.title} - Fullscreen`}
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          className="flex justify-center md:justify-start items-center gap-2 mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Folder className="text-yellow-400 w-5 h-5 md:w-6 md:h-6 ml-8" />
          <motion.span
            className="bg-blue-700 text-white px-3 md:px-4 py-1 rounded-lg text-xs md:text-sm font-semibold"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            OUR WORK
          </motion.span>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-10 text-center md:text-left leading-tight mx-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
            Projects,{" "}
          </span>
          <span className="text-white">we are proud of</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 md:gap-9 px-6 sm:px-10 md:px-16 lg:px-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{
            once: false,
            amount: 0.05,
            margin: "0px 0px -150px 0px",
          }}
        >
          {projectsToShow.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg border-2 border-transparent
                        hover:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-[1.02] cursor-pointer w-full relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{
                once: false,
                amount: 0.1,
                margin: "0px 0px -100px 0px",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-[240px] overflow-hidden rounded-t-xl relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                  className="rounded-t-xl"
                  priority={index < 3} // Prioritize first 3 images
                />
                <button
                  onClick={() => openPopup(project.url, project.title)}
                  className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all cursor-pointer"
                  aria-label="Expand project view"
                >
                  <FaExpand className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5 sm:p-6 md:p-7">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-xs sm:text-sm text-gray-400">
                    {project.category}
                  </p>
                  <span className="text-xs sm:text-sm text-gray-500">•</span>
                  <p className="text-xs sm:text-sm text-orange-400">
                    {project.tech}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!hideMoreProjects && (
          <motion.div
            className="text-center mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.button
              className="bg-blue-500 text-white py-2 px-5 sm:px-6 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition cursor-pointer flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMoreProjectsClick}
            >
              More Projects <FaArrowRight />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
      {loading && <Loading />}
    </>
  );
}
