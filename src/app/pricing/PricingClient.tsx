"use client";

import React, { useState } from "react";
import "../styles/home.css";

type Plan = {
  name: string;
  price: string;
  lkrPrice?: string;
  delivery: string;
  features: string[];
  isRecommended?: boolean;
  category: "digital-marketing" | "website-development";
  postCount?: number;
  platforms?: number;
};

type Currency = "USD" | "LKR";

// Define digital marketing features with clear tier progression
const digitalMarketingFeatures = {
  basic: [
    "Basic Analytics",
    "3 Platform Management",
    "5 Monthly Posts",
    "Community Engagement",
    "Basic Content Creation",
  ],
  advanced: [
    "Advanced Analytics",
    "Ad Management",
    "Ad Credits",
    "Performance Reports",
    "Community Engagement",
    "Strategy Calls",
    "3 Platform Management",
    "10 Monthly Posts",
    "Advanced Content Creation",
  ],
  premium: [
    "Advanced Analytics",
    "Ad Management",
    "Ad Credits",
    "Community Engagement",
    "Performance Reports",
    "Strategy Calls",
    "Competitor Analysis",
    "5 Platform Management",
    "15 Monthly Posts",
    "Premium Support",
    "Custom Strategy",
    "Premium Content Creation",
  ],
};

const allWebsiteFeatures = [
  "5-Page Responsive Website",
  "10-Page Responsive Website",
  "Custom UI/UX Design",
  "WordPress CMS",
  "Advanced CMS Options",
  "Basic SEO Setup",
  "Advanced SEO Optimization",
  "1 Month Support",
  "3 Months Support",
  "Lifetime Support",
  "Basic E-commerce Functionality",
  "Advanced E-commerce Features",
  "Payment Gateway Integration",
  "Performance Optimization",
  "Security Enhancements",
  "Multi-language Support",
  "Blog Setup",
  "SSL Certificate Setup",
  "API Integration",
  "Speed Optimization",
];

const plans: Plan[] = [
  // Digital Marketing Packages
  {
    name: "Starter",
    price: "$75",
    lkrPrice: "LKR 10,000",
    delivery: "1 month campaign",
    postCount: 5,
    platforms: 3,
    features: digitalMarketingFeatures.basic,
    category: "digital-marketing",
  },
  {
    name: "Growth",
    price: "$100",
    lkrPrice: "LKR 25,000",
    delivery: "3 month campaign",
    isRecommended: true,
    postCount: 10,
    platforms: 3,
    features: digitalMarketingFeatures.advanced,
    category: "digital-marketing",
  },
  {
    name: "Premium",
    price: "$150",
    lkrPrice: "LKR 50,000",
    delivery: "6 month campaign",
    postCount: 15,
    platforms: 5,
    features: digitalMarketingFeatures.premium,
    category: "digital-marketing",
  },

  // Website Development Packages
  {
    name: "WordPress Website Development",
    price: "Starting From $200",
    lkrPrice: "Starting From LKR 50,000",
    delivery: "1-2 weeks",
    features: [
      "5-Page Responsive Website",
      "Custom UI/UX Design",
      "WordPress CMS",
      "Basic SEO Setup",
      "1 Month Support",
      "Basic E-commerce Functionality",
      "E-commerce Integration",
      "Speed Optimization",
      "SSL Certificate Setup",
    ],
    category: "website-development",
  },
  {
    name: "Custom Coded Website Development",
    price: "Starting From $300",
    lkrPrice: "Starting From LKR 75,000",
    delivery: "2-3 weeks",
    features: [
      "10-Page Responsive Website",
      "Custom UI/UX Design",
      "Advanced CMS Options",
      "Advanced SEO Optimization",
      "3 Months Support",
      "Basic E-commerce Functionality",
      "Performance Optimization",
      "Security Enhancements",
    ],
    category: "website-development",
  },
  {
    name: "Systems Development",
    price: "Starting From $400",
    lkrPrice: "Starting From LKR 100,000",
    delivery: "3-4 weeks",
    features: [
      "10-Page Responsive Website",
      "Custom UI/UX Design",
      "Advanced CMS Options",
      "Advanced SEO Optimization",
      "Lifetime Support",
      "Advanced E-commerce Features",
      "Payment Gateway Integration",
      "API Integration",
      "Speed Optimization",
    ],
    category: "website-development",
  },
];

// Helper to get excluded features for digital marketing plans
function getExcludedFeatures(planName: string) {
  if (planName === "Starter") {
    return [
      "Advanced Analytics",
      "Ad Management",
      "Ad Credits",
      "Performance Reports",
      "Strategy Calls",
      "Competitor Analysis",
      "Custom Strategy",
    ];
  } else if (planName === "Growth") {
    return [
      "Competitor Analysis",
      "Premium Support",
      "Custom Strategy",
      "5 Platform Management",
    ];
  }
  return []; // Premium has no excluded features
}

const PricingPage = () => {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [showForm, setShowForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [showCustomForm, setShowCustomForm] = useState(false);

  const toggleCurrency = () => {
    setCurrency(currency === "USD" ? "LKR" : "USD");
  };

  const openForm = (packageName: string) => {
    setSelectedPackage(packageName);
    setShowForm(true);
  };

  const openCustomForm = () => {
    setShowCustomForm(true);
  };

  // Function to get all features for a category
  const getAllFeaturesForCategory = (category: string) => {
    return category === "digital-marketing"
      ? [
          ...digitalMarketingFeatures.basic,
          ...digitalMarketingFeatures.advanced,
          ...digitalMarketingFeatures.premium,
        ]
      : allWebsiteFeatures;
  };

  return (
    <section className="bg-transparent py-16 px-4 text-white">
      <div className="text-center mb-24">
        <span className="bg-blue-900 px-4 py-2 rounded-full text-sm text-blue-300 font-medium tracking-wide">
          🔖 PRICING
        </span>
        <h2 className="text-5xl md:text-6xl font-bold mt-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Our <span className="font-extrabold">Pricing</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Currency Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#111827] p-1 rounded-full border border-blue-900">
          <button
            onClick={toggleCurrency}
            className={`px-6 py-2 cursor-pointer rounded-full font-medium transition-all ${currency === "USD" ? "bg-blue-700 text-white" : "text-gray-400"}`}
          >
            USD
          </button>
          <button
            onClick={toggleCurrency}
            className={`px-6 py-2 cursor-pointer rounded-full font-medium transition-all ${currency === "LKR" ? "bg-blue-700 text-white" : "text-gray-400"}`}
          >
            LKR
          </button>
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Digital Marketing Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans
            .filter((plan) => plan.category === "digital-marketing")
            .map((plan, index) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                currency={currency}
                index={index}
                onSelect={() => openForm(plan.name)}
                allFeatures={getAllFeaturesForCategory(plan.category)}
                showExcluded={true}
                excludedFeatures={getExcludedFeatures(plan.name)}
              />
            ))}
        </div>
      </div>

      {/* Website Development Section */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Website Development Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans
            .filter((plan) => plan.category === "website-development")
            .map((plan, index) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                currency={currency}
                index={index}
                onSelect={() => openForm(plan.name)}
                allFeatures={getAllFeaturesForCategory(plan.category)}
                showExcluded={false}
              />
            ))}
        </div>
      </div>

      {/* Custom Package Section */}
      <div className="mt-20 bg-[#111827] rounded-3xl max-w-7xl mx-auto p-8 text-center border-2 border-blue-900 relative overflow-hidden hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-500">
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-900 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-cyan-900 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>

        <h3 className="text-2xl md:text-3xl font-semibold relative z-10">
          Looking for a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            customized package?
          </span>
        </h3>
        <p className="text-sm md:text-base text-gray-300 mt-4 max-w-2xl mx-auto relative z-10">
          If our plans don&#39;t match your project or you want to talk it over
          first, let&#39;s have a call or let&#39;s talk while having a coffee.
        </p>
        <button
          onClick={openCustomForm}
          className="mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-black font-semibold py-3 px-8 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 relative z-10"
        >
          Get in touch →
        </button>
      </div>

      {/* Package Inquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111827] rounded-2xl p-8 max-w-md w-full border border-blue-900 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">
              Inquire About {selectedPackage}
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-[#1a2235] border border-blue-900 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#1a2235] border border-blue-900 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-[#1a2235] border border-blue-900 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea className="w-full bg-[#1a2235] border border-blue-900 rounded-lg px-4 py-2 h-24"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-black font-semibold py-3 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Custom Package Inquiry Form Modal */}
      {showCustomForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111827] rounded-2xl p-8 max-w-md w-full border border-blue-900 relative">
            <button
              onClick={() => setShowCustomForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">Custom Package Inquiry</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-[#1a2235] border border-blue-900 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#1a2235] border border-blue-900 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-[#1a2235] border border-blue-900 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Project Requirements
                </label>
                <textarea className="w-full bg-[#1a2235] border border-blue-900 rounded-lg px-4 py-2 h-32"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Budget ({currency})
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1a2235] border border-blue-900 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Timeline
                </label>
                <select className="w-full bg-[#1a2235] border border-blue-900 rounded-lg px-4 py-2">
                  <option>Urgent (1-2 weeks)</option>
                  <option>Standard (3-4 weeks)</option>
                  <option>Flexible (1-2 months)</option>
                  <option>Long-term (3+ months)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-black font-semibold py-3 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

const PlanCard = ({
  plan,
  currency,
  index,
  onSelect,
  showExcluded,
  excludedFeatures = [],
}: {
  plan: Plan;
  currency: Currency;
  index: number;
  onSelect: () => void;
  allFeatures: string[];
  showExcluded: boolean;
  excludedFeatures?: string[];
}) => {
  //const isDigitalMarketing = plan.category === "digital-marketing";

  return (
    <div
      className={`rounded-3xl border-2 border-blue-900 shadow-lg ${
        plan.isRecommended ? "scale-105 md:scale-110" : ""
      } transition-all duration-300 relative mt-6 hover:shadow-xl hover:shadow-blue-900/20 ${
        plan.isRecommended ? "hover:shadow-cyan-900/30" : ""
      }`}
    >
      {/* Recommended badge */}
      {plan.isRecommended && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-full flex justify-center z-10">
          <span className="text-black text-sm font-bold px-6 py-2 rounded-full shadow-lg whitespace-nowrap animate-color-pulse bg-[#a2f5bf]">
            🌟 RECOMMENDED
          </span>
        </div>
      )}

      {/* Top colored section */}
      <div
        className={`p-6 ${
          plan.isRecommended ? "bg-[#0891F9]" : "bg-[#111827]"
        } relative z-0 rounded-3xl transition-colors duration-500`}
      >
        <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
        <p className="text-center text-sm text-gray-300 mt-1">
          {plan.category === "digital-marketing"
            ? "Digital Marketing Package"
            : "Website Development Package"}
        </p>

        <div className="bg-gradient-to-br from-cyan-300 to-blue-500 text-black mt-6 p-6 rounded-xl text-center hover:from-blue-400 hover:to-cyan-400 transition-all duration-500">
          <div className="text-4xl font-extrabold">
            {currency === "USD" ? plan.price : plan.lkrPrice}
          </div>
          <div className="text-sm mt-1">{plan.delivery}</div>
        </div>
      </div>

      {/* Features section */}
      <div
        className={`px-6 py-8 space-y-4 rounded-b-3xl ${
          index % 3 === 0
            ? "bg-[#1a2235]"
            : index % 3 === 1
              ? "bg-[#1d273a]"
              : "bg-[#202b40]"
        }`}
      >
        {/* Show post count and platforms first for digital marketing */}
        {plan.category === "digital-marketing" && plan.postCount && (
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">✔</span>
            <p>{plan.postCount} posts per platform per month</p>
          </div>
        )}

        {plan.category === "digital-marketing" && plan.platforms && (
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">✔</span>
            <p>Social Media Management ({plan.platforms} platforms)</p>
          </div>
        )}

        {/* Show included features */}
        {plan.features.map((feature, i) => (
          <div
            key={`inc-${i}`}
            className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300"
          >
            <span className="text-blue-400">✔</span>
            <p>{feature}</p>
          </div>
        ))}

        {/* Show excluded features for digital marketing */}
        {showExcluded &&
          excludedFeatures.map((feature, i) => (
            <div
              key={`exc-${i}`}
              className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300"
            >
              <span className="text-red-500">✕</span>
              <p className="text-gray-500">{feature}</p>
            </div>
          ))}

        <button
          onClick={onSelect}
          className="w-full mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-black font-semibold py-3 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20"
        >
          Select package →
        </button>
      </div>
    </div>
  );
};

export default PricingPage;
