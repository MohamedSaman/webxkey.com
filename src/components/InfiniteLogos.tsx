import Image from "next/image";

const InfiniteLogos = () => {
  const logos = [
    "/Images/1",
    "/Images/2",
    "/Images/3",
    "/Images/4",
    "/Images/5",
    "/Images/6",
    "/Images/7",
    "/Images/8",
    "/Images/9",
    "/Images/10",
    "/Images/11",
    "/Images/12",
    "/Images/13",
    "/Images/14",
    "/Images/15",
    "/Images/16",
    "/Images/17",
  ].map((logo) => ({
    src: `${logo}.svg`,
    alt: logo.replace("/", ""),
  }));

  return (
    <div className="overflow-hidden w-full relative h-[280px] sm:h-[360px] -mb-10">
      {" "}
      {/* Reduced container height */}
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-black/30 to-transparent rounded-r-lg z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-black/30 to-transparent rounded-l-lg z-10 pointer-events-none" />
      {/* First row - Made logos bigger and removed extra spacing */}
      <div className="flex w-max animate-marquee">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={`first-${index}`} className="px-4 sm:px-6 flex-shrink-0">
            {" "}
            {/* Reduced horizontal padding */}
            <Image
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={180}
              className="!h-28 !w-28 sm:!h-36 sm:!w-36"
              unoptimized
            />
          </div>
        ))}
      </div>
      {/* Second row - Tighter spacing */}
      <div className="flex w-max animate-marquee-reverse -mt-1">
        {" "}
        {/* Reduced vertical spacing */}
        {[...logos, ...logos, ...logos].reverse().map((logo, index) => (
          <div key={`second-${index}`} className="px-4 sm:px-6 flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={180}
              className="!h-28 !w-28 sm:!h-36 sm:!w-36"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogos;
