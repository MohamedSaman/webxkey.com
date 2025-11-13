"use client";

import { useEffect, useLayoutEffect, useState, useRef, JSX } from "react";
import { motion, useInView } from "framer-motion";
import { X } from "lucide-react";
import "../styles/home.css";
import ProjectsSection from "@/components/ProjectsSection";

interface CounterProps {
  end: number;
  duration: number;
  className?: string;
  showPlus?: boolean;
}

interface PopupState {
  open: boolean;
  url: string;
  title: string;
}

const Counter = ({
  end,
  duration,
  className = "",
  showPlus = false,
}: CounterProps): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 1000 / 60);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [end, duration, isInView]);

  return (
    <motion.span
      ref={ref}
      className={`${className} inline-block`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {count}
      {showPlus && "+"}
    </motion.span>
  );
};

export default function ProjectClient(): JSX.Element {
  const [popup, setPopup] = useState<PopupState>({
    open: false,
    url: "",
    title: "",
  });

  const closePopup = (): void => {
    setPopup({ open: false, url: "", title: "" });
    document.body.style.overflow = "auto";
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent text-white py-8 md:py-16 px-4 sm:px-6 md:px-10">
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

      <div className="min-h-[50vh] md:min-h-[70vh] flex flex-col justify-center items-center">
        {/* Gradient Title with Icon */}
        <div className="max-w-2xl bg-gradient-to-r from-[#013e84] to-[#0ea0c4] text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 md:mt-[-20px] rounded-lg flex items-center justify-center gap-2 sm:gap-3">
          <span className="text-2xl sm:text-4xl md:text-5xl">Projects</span>
        </div>
        <h2 className="text-5xl xs:text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-10 text-center leading-tight mx-4 sm:mx-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
            Projects,{" "}
          </span>
          <span className="text-white">we are proud of</span>
        </h2>

        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-normal mb-6 md:mb-10 text-center leading-tight mx-4 sm:mx-10">
          Unlock the Future with WebxKey&#39;s Digital Expertise
        </h2>
      </div>

      <div className="mb-[25vh]">
        <motion.hr
          className="border-t border-gray-700 my-6 md:my-8 w-full md:w-[93%] mx-auto"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        />

        <motion.div
          className="mt-6 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 font-semibold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Counter
              end={20}
              duration={1.5}
              className="text-4xl md:text-5xl font-bold"
              showPlus
            />
            <p className="text-lg md:text-xl mt-2">Successful Projects</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Counter
              end={2}
              duration={1}
              className="text-4xl md:text-5xl font-bold"
            />
            <span className="text-4xl md:text-5xl font-bold">Y</span>
            <p className="text-lg md:text-xl mt-2">Years in Business</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Counter
              end={10}
              duration={1.2}
              className="text-4xl md:text-5xl font-bold"
              showPlus
            />
            <p className="text-lg md:text-xl mt-2">Team Members</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Counter
              end={10}
              duration={1.2}
              className="text-4xl md:text-5xl font-bold"
              showPlus
            />
            <p className="text-lg md:text-xl mt-2">Freelancers</p>
          </motion.div>
        </motion.div>

        <motion.hr
          className="border-t border-gray-700 my-6 md:my-8 w-full md:w-[93%] mx-auto"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        />
      </div>

      <ProjectsSection hideMoreProjects={true} />
    </div>
  );
}
