"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaLayerGroup } from "react-icons/fa";
import { IoMdLaptop } from "react-icons/io";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

interface CounterProps {
  end: number;
  duration: number;
  className?: string;
  showPlus?: boolean;
}

// Utility function to check if device is mobile
/* const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isMobile;
}; */

// New utility function to check if screen is very small (less than 400px)
const useIsVerySmallScreen = () => {
  const [isVerySmall, setIsVerySmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsVerySmall(window.innerWidth < 400);
      const handleResize = () => {
        setIsVerySmall(window.innerWidth < 400);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isVerySmall;
};

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

const cardData = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Create responsive, high-performance websites tailored to your business needs. From simple landing pages to complex web applications, we deliver seamless digital experiences.",
    image: "/Images/website.png",
    experience: 2,
    completed: 20,
    route: "/website-development",
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Build custom mobile applications for iOS and Android platforms. Our solutions focus on intuitive design, smooth functionality, and scalability to grow with your business.",
    image: "/Images/app.png",
    experience: 2,
    completed: 20,
    route: "/app-development",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Craft visually stunning and user-friendly interfaces that enhance engagement. We combine aesthetics with usability to create memorable digital experiences.",
    image: "/Images/uiux.png",
    experience: 2,
    completed: 10,
    route: "/ui-ux-design",
  },
  {
    id: 4,
    title: "Blockchain",
    description:
      "Implement secure blockchain solutions including smart contracts, dApps, and decentralized systems. Leverage cutting-edge technology for transparent and tamper-proof operations.",
    image: "/Images/block.png",
    experience: 2,
    completed: 10,
    route: "/blockchain",
  },
  {
    id: 5,
    title: "SEO Services",
    description:
      "Boost your online visibility and organic traffic with proven SEO strategies. We optimize content, technical setup, and backlink profiles to improve search rankings.",
    image: "/Images/seo.png",
    experience: 2,
    completed: 20,
    route: "/seo-services",
  },
  {
    id: 6,
    title: "Social Media Marketing",
    description:
      "Maximize your brand's social media presence with targeted campaigns. We create engaging content and data-driven strategies to connect with your ideal audience.",
    image: "/Images/social.png",
    experience: 2,
    completed: 20,
    route: "/social-media-marketing",
  },
  {
    id: 7,
    title: "Brand Identity",
    description:
      "Develop a cohesive brand identity that resonates with your audience. From logos to style guides, we create visual systems that communicate your unique value.",
    image: "/Images/brand.png",
    experience: 2,
    completed: 20,
    route: "/brand-identity",
  },
];

const CardSection = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isVerySmallScreen = useIsVerySmallScreen();

  const handleNavigation = (route: string) => {
    if (pathname !== route) {
      setLoading(true);
      router.push(route);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 overflow-hidden">
        {/* Desktop layout */}
        <div className="hidden lg:flex flex-col gap-8 xl:gap-12">
          {[0, 2, 4, 6].map((startIndex, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex justify-center gap-6 xl:gap-12"
              initial={!isVerySmallScreen ? { opacity: 0 } : undefined}
              whileInView={!isVerySmallScreen ? { opacity: 1 } : undefined}
              transition={!isVerySmallScreen ? { duration: 0.5 } : undefined}
              viewport={
                !isVerySmallScreen ? { once: false, amount: 0.1 } : undefined
              }
            >
              {cardData.slice(startIndex, startIndex + 2).map((card) => (
                <Card
                  key={card.id}
                  {...card}
                  onNavigate={() => handleNavigation(card.route)}
                  isVerySmallScreen={isVerySmallScreen}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden grid grid-cols-1 gap-6 px-2 sm:px-4">
          {cardData.map((card) => (
            <div key={card.id}>
              <MobileCard
                {...card}
                onNavigate={() => handleNavigation(card.route)}
              />
            </div>
          ))}
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
};

interface CardProps {
  title: string;
  description: string;
  image: string;
  experience: number;
  completed: number;
  route: string;
  onNavigate: () => void;
  isVerySmallScreen?: boolean;
}

const Card = ({
  title,
  description,
  image,
  experience,
  completed,
  onNavigate,
  isVerySmallScreen = false,
}: CardProps) => {
  return (
    <motion.div
      className="w-full max-w-xl"
      whileHover={!isVerySmallScreen ? { y: -5 } : undefined}
      initial={!isVerySmallScreen ? { opacity: 0, y: 20 } : undefined}
      whileInView={!isVerySmallScreen ? { opacity: 1, y: 0 } : undefined}
      transition={!isVerySmallScreen ? { duration: 0.5 } : undefined}
      viewport={
        !isVerySmallScreen
          ? {
              once: false,
              amount: 0.1,
              margin: "0px 0px -50px 0px",
            }
          : undefined
      }
    >
      <div className="rounded-2xl bg-transparent border-1 border-blue-300 overflow-hidden h-full flex flex-col">
        <motion.div
          className="flex flex-col md:flex-row pb-0 mb-4 md:mb-6 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl flex-grow"
          onClick={onNavigate}
        >
          {/* Image part (left) */}
          <div className="w-full md:w-1/2 h-48 md:h-64 relative">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>

          {/* Description part (right) */}
          <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">
                {title}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm">{description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate();
                }}
                className="inline-block mt-3 md:mt-4 text-white font-semibold hover:text-[#4D62FF] transition-colors text-xs md:text-sm cursor-pointer"
              >
                View Details →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats section */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-stretch">
          {/* Years Experience card */}
          <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-lg shadow-lg px-4 md:px-8 py-3 md:py-4 flex items-center flex-1">
            <FaLayerGroup
              color="#4D62FF"
              className="w-8 h-8 md:w-10 md:h-10 mr-4 md:mr-6"
            />
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                <Counter end={experience} duration={1.5} showPlus />
              </p>
              <p className="text-xs md:text-sm text-white mt-1">
                Years Experience
              </p>
            </div>
          </div>

          {/* Completed Projects card */}
          <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-lg shadow-lg px-4 md:px-8 py-3 md:py-4 flex items-center flex-1">
            <IoMdLaptop
              color="#4D62FF"
              className="w-8 h-8 md:w-10 md:h-10 mr-4 md:mr-6"
            />
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                <Counter end={completed} duration={1.5} showPlus />
              </p>
              <p className="text-xs md:text-sm text-white mt-1">
                Completed Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MobileCard = ({
  title,
  description,
  image,
  experience,
  completed,
  onNavigate,
}: CardProps) => {
  return (
    <div className="w-full h-full min-w-[260px]">
      {" "}
      {/* Add min-width */}
      <div className="rounded-2xl bg-transparent overflow-hidden h-full flex flex-col">
        <div
          className="flex flex-col pb-0 mb-3 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl flex-grow"
          onClick={onNavigate}
        >
          {/* Image part (top on mobile) */}
          <div className="w-full aspect-video relative">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center rounded-t-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>
          {/* Description part */}
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-white">
                {title}
              </h3>
              <p className="text-gray-300 text-xs line-clamp-3">
                {description}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate();
                }}
                className="inline-block mt-2 text-white font-bold hover:text-[#4D62FF] transition-colors text-xs cursor-pointer"
              >
                View Details →
              </button>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="flex gap-3">
          {/* Years Experience card */}
          <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-lg shadow-lg p-3 flex items-center flex-1 min-w-0">
            <FaLayerGroup color="#4D62FF" className="w-5 h-5 mr-3" />
            <div className="min-w-0">
              <p className="text-base font-bold text-white whitespace-nowrap">
                <Counter end={experience} duration={1.5} showPlus />
              </p>
              <p className="text-xs text-white mt-1 whitespace-nowrap">
                Years Experience
              </p>
            </div>
          </div>

          {/* Completed Projects card */}
          <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-lg shadow-lg p-3 flex items-center flex-1 min-w-0">
            <IoMdLaptop color="#4D62FF" className="w-5 h-5 mr-3" />
            <div className="min-w-0">
              <p className="text-base font-bold text-white whitespace-nowrap">
                <Counter end={completed} duration={1.5} showPlus />
              </p>
              <p className="text-xs text-white mt-1 whitespace-nowrap">
                Completed Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Counter: React.FC<CounterProps> = ({
  end,
  duration,
  className = "",
  showPlus = false,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isVerySmallScreen = useIsVerySmallScreen();

  useEffect(() => {
    if (isVerySmallScreen) {
      // For small screens, set the final value immediately
      setCount(end);
    }
  }, [end, isVerySmallScreen]);

  useEffect(() => {
    if (!isVerySmallScreen) {
      // Animation logic for larger screens
      const onViewportEnter = () => {
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
      };

      // Trigger the animation when component mounts for larger screens
      onViewportEnter();
    }
  }, [end, duration, isVerySmallScreen]);

  if (isVerySmallScreen) {
    // For small screens - just render the number without any motion wrappers
    return (
      <span className={`${className} inline-block`}>
        {end}
        {showPlus && "+"}
      </span>
    );
  }

  // For larger screens - use the animated version
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

export default CardSection;
