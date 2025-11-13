import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  duration: number;
  className?: string;
  showPlus?: boolean;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration,
  className = "",
  showPlus = false,
}) => {
  const [count, setCount] = useState(0);
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

const DigitalBrandSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  //const isSectionInView = useInView(sectionRef, { amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      className="bg-transparent text-white p-6 md:p-10 w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="w-full md:w-[93%] mx-auto flex flex-col items-center justify-center text-center gap-6 md:gap-10 mb-8 md:mb-15">
  <motion.h2
    className="text-3xl md:text-5xl font-bold leading-snug"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    Using Design, Technology, and
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-300 to-white">
      {" "}Marketing
    </span>
    , we shape
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-300 to-white">
      {" "}Digital Brand
    </span>{" "}
    Experiences that propel your{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-300 to-white">
      success
    </span>{" "}
    in the digital realm.
  </motion.h2>
</div>


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
    </motion.section>
  );
};

export default DigitalBrandSection;
