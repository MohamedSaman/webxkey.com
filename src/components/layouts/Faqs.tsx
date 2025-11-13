import { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";

interface ContentItem {
  title: string;
  description: string;
}

interface Section {
  id: number;
  title: string;
  content: string | ContentItem[];
}

const sections: Section[] = [
  {
    id: 1,
    title: "Why use Webxkey for my Branding project?",
    content:
      "At WebxKey, we bring together the best designers and a skilled UI/UX team to create compelling brand identities. Our commitment to excellent customer support ensures a seamless experience from start to finish. Plus, we offer competitive pricing without compromising on quality, delivering outstanding results that elevate your brand.",
  },
  {
    id: 2,
    title: "What separates Webxkey from other design agencies?",
    content:
      "WebxKey stands out with a unique blend of creativity, technical expertise, and personalized service. Our team focuses on understanding your brand's vision and target audience, ensuring every design is tailored to your goals. We combine innovation with practicality, offering high-quality designs at competitive prices, backed by exceptional customer support throughout the project.",
  },
  {
    id: 3,
    title: "How much does Branding cost?",
    content: "At WebxKey, we offer affordable branding solutions without sacrificing quality. Our competitive pricing is designed to fit various budgets. Additionally, we provide discounts for international customers from Canada, the USA, and Europe, ensuring you receive exceptional value along with outstanding customer service.",
  },
  {
    id: 4,
    title: "What Branding Services do you offer?",
    content: [
      {
        title: "Brand Identity Design",
        description: "Custom logos, color schemes, and typography that reflect your brand's essence.",
      },
      {
        title: "UI/UX Design",
        description: "User-centered designs that enhance the customer experience across digital platforms.",
      },
      {
        title: "Brand Strategy Development",
        description: "Tailored strategies to position your brand effectively in the market.",
      },
      {
        title: "Marketing Collateral",
        description: "Design of business cards, brochures, and other promotional materials.",
      },
      {
        title: "Social Media Branding",
        description: "Consistent branding across social media platforms to enhance your online presence.",
      },
    ],
  },
  {
    id: 5,
    title: "We have a limited budget, will you still work with us?",
    content: "Absolutely! At WebxKey, we understand that budget constraints can be a concern for many businesses. That's why we offer flexible pricing options tailored to fit your needs. We are committed to delivering high-quality branding solutions at affordable rates. Additionally, we provide special discounts for our international clients from Canada, the USA, and Europe, ensuring you receive exceptional value for your investment without compromising quality. Let us help you create a strong brand identity that fits within your budget!",
  },
];

export default function Faqs() {
  const [activeSections, setActiveSections] = useState<number[]>([]);

  const toggleSection = (id: number) => {
    setActiveSections((prev) =>
      prev.includes(id) ? prev.filter((sectionId) => sectionId !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 text-white mb-15">
      <div className="max-w-7xl mx-auto lg:flex lg:gap-8">
        {/* Left column - 25% width on large screens */}
        <div className="w-full lg:w-3/8">
        <div className="flex flex-col items-center sm:items-start space-y-4 px-4 sm:px-6 lg:px-8">
            <button className="flex items-center space-x-3 text-white px-4 py-3 rounded-xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/20">
                <span className="text-yellow-300 text-xl">📰</span>
                <span className="text-lg font-medium">FAQ Questions</span>
            </button>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white max-w-3xl text-center sm:text-left mb-8 sm:mb-4">
                Frequently Asked Brand{" "}
                <span className="text-transparent bg-gradient-to-r from-[#038ed3] to-[#72e3ff] bg-clip-text">
                Questions
                </span>
            </h2>
        </div>
        </div>

        {/* Right column - 75% width on large screens */}
        <div className="lg:w-5/8">
          <div className="space-y-2">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-600/50 pb-2">
                <div
                  className="flex justify-between items-center py-4 cursor-pointer group"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="text-xl font-semibold lg:text-2xl group-hover:text-blue-300 transition-colors duration-300">
                    <span className="mr-3 text-gray-400">{`0${section.id}`}</span>
                    {section.title}
                  </div>
                  <button className="p-2 rounded-lg bg-gray-700/50 transition-all duration-300 group-hover:bg-blue-600/50 group-hover:scale-110">
                    {activeSections.includes(section.id) ? (
                      <FaTimes className="text-green-400 text-lg" />
                    ) : (
                      <FaChevronDown className="text-gray-300 text-lg transition-transform duration-300 group-hover:text-white" />
                    )}
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeSections.includes(section.id) ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="bg-gray-800/30 p-4 rounded-xl backdrop-blur-sm">
                    {/* Render content as a list if it's an array */}
                    {Array.isArray(section.content) ? (
                      <ul className="list-disc pl-6 text-gray-300 lg:text-lg leading-relaxed">
                        {(section.content as ContentItem[]).map((item, index) => (
                          <li key={index}>
                            <span className="font-bold">{item.title}:</span> {item.description}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 lg:text-lg leading-relaxed">
                        {section.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}