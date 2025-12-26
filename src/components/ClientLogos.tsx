import Image from "next/image";

const ClientLogos = () => {
  // Add your client company logos here
  const clientLogos = [
    {
      src: "/Images/us.png",
      alt: "Client 1",
    },
    {
      src: "/Images/IB1.png",
      alt: "Client 2",
    },
    {
      src: "/Images/nexd.png",
      alt: "Client 3",
    },
    {
      src: "/Images/metro.png",
      alt: "Client 4",
    },
    {
      src: "/Images/miracle1.png",
      alt: "Client 5",
    },
    {
      src: "/Images/jaffna.png",
      alt: "Client 6",
    },
    {
      src: "/Images/dynamic.png",
      alt: "Client 7",
    },
    {
      src: "/Images/sevena1.png",
      alt: "Client 9",
    },
     {
      src: "/Images/Fine.png",
      alt: "Client 10",
    },

    {
      src: "/Images/frieght.png",
      alt: "Client 11",
    },

    {
      src: "/Images/plus.png",
      alt: "Client 12",
    },
    {
      src: "/Images/sahar.png",
      alt: "Client 12",
    },
    // Add more client logos here
  ];

  return (
    <div className="overflow-hidden w-full relative">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-black/30 to-transparent rounded-r-lg z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-black/30 to-transparent rounded-l-lg z-10 pointer-events-none" />

      {/* First row - Moving logos */}
      <div className="flex w-max animate-marquee items-center">
        {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
          <div key={`first-${index}`} className="px-4 sm:px-6 flex-shrink-0 flex items-center justify-center h-32 sm:h-40">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={180}
              className="!h-24 !w-24 sm:!h-32 sm:!w-32 object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
