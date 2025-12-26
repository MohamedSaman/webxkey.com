"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaArrowRight,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  
} from "react-icons/fa";
import {
  MdDesignServices,
  MdOutlineApps,
  MdWeb,
  MdWallet,
} from "react-icons/md";
import { TbSeo, TbBrandWordpress } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiCodeCurly } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi";
import Image from "next/image";
import MeetingPopup from "./MeetingPopup";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMeetingPopup, setShowMeetingPopup] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownOpen &&
        !(event.target as Element).closest(".dropdown-container")
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  const NavItem = ({
    href,
    label,
    closeMenu = false,
    className = "",
    icon,
  }: {
    href: string;
    label: string;
    closeMenu?: boolean;
    className?: string;
    icon?: React.ReactNode;
  }) => {
    const isActive =
      pathname === href ||
      (href === "/services" && pathname.startsWith("/services"));
    return (
      <Link
        href={href}
        className={`flex items-center gap-2 px-3 py-2 transition-colors ${
          isActive ? "text-blue-400" : "text-white hover:text-gray-300"
        } ${className}`}
        onClick={(e) => {
          if (closeMenu) {
            setMobileMenuOpen(false);
            setDropdownOpen(false);
          }
          if (pathname !== href) {
            setLoading(true);
          }
          e.stopPropagation();
        }}
      >
        {icon && icon} <span>{label}</span>
      </Link>
    );
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (pathname !== "/") {
      setLoading(true);
      window.location.href = "/";
    }
  };

  return (
    <>
      <nav
        className={`w-full z-50 text-white p-4 flex flex-col md:flex-row justify-center items-center transition-all ${
          scrolled
            ? "bg-gray-900 bg-opacity-90 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="w-full md:w-auto flex justify-between items-center px-2 md:absolute md:left-4">
          {/* Logo on the left */}
          <div className="text-2xl font-bold">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="hover:opacity-80 transition-opacity w-[180px] md:w-[220px]"
            >
              <Image
                src="/Images/logo.png"
                alt="Logo"
                width={220}
                height={220}
              />
            </Link>
          </div>

          {/* Menu Icon on the right */}
          <button
            className="md:hidden text-white text-2xl z-50 -mt-5"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>

        {/* Updated Desktop Navigation with proper list structure */}
        <ul className="hidden md:flex items-center space-x-4 text-[15px] font-medium">
          <li>
            <NavItem href="/" label="Home" />
          </li>
          <li
            className="relative dropdown-container"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavItem href="/services" label="Services" />
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-0 w-[600px] bg-[#052b91] rounded-lg shadow-2xl grid grid-cols-2 gap-4 p-4 z-50">
                <NavItem
                  href="/brand-identity/"
                  label="Brand Identity"
                  icon={<MdDesignServices />}
                />
                <NavItem
                  href="/app-development/"
                  label="App Development"
                  icon={<MdOutlineApps />}
                />
                <NavItem
                  href="/website-development/"
                  label="Website Development"
                  icon={<MdWeb />}
                />
                <NavItem
                  href="/blockchain/"
                  label="Blockchain"
                  icon={<MdWallet />}
                />
                <NavItem
                  href="/ui-ux-design/"
                  label="UI/UX Design"
                  icon={<SiAdobexd />}
                />
                <NavItem
                  href="/social-media-marketing/"
                  label="Social Media Marketing"
                  icon={<RiCustomerService2Fill />}
                />
                <NavItem
                  href="/seo-services/"
                  label="SEO Services"
                  icon={<TbSeo />}
                />
                <NavItem
                  href="/web-data-scraping-services/"
                  label="Web Data Scraping"
                  icon={<BiCodeCurly />}
                />
                <NavItem
                  href="/ai-services/"
                  label="AI Services"
                  icon={<HiSparkles />}
                />
                <NavItem
                  href="/wordpress-website-designing-services/"
                  label="WordPress Services"
                  icon={<TbBrandWordpress />}
                />
              </div>
            )}
          </li>
          <li>
            <NavItem href="/ai-services/" label="AI Services"  />
          </li>
          <li>
            <NavItem href="/careers/" label="Careers" />
          </li>
          {/* <li>
            <NavItem href="/team/" label="Team" />
          </li> */}
          <li>
            <NavItem href="/about-us/" label="About Us" />
          </li>
          <li>
            <NavItem href="/contact/" label="Contact Us" />
          </li>
          <li>
            <NavItem href="/blog/" label="Blog" />
          </li>
        </ul>

        <div className="hidden md:block md:absolute md:right-4">
          <button
            className="bg-gradient-to-r from-teal-500 to-cyan-500 font-medium text-[15px] px-5 py-2 rounded gap-2 flex items-center transition-colors hover:from-cyan-500 hover:to-teal-500 cursor-pointer"
            onClick={() => setShowMeetingPopup(true)}
          >
            Schedule a Meeting <FaArrowRight />
          </button>
        </div>

        {/* Mobile Menu with left-aligned items and indented subcategories */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gray-900/95 backdrop-blur-sm text-white flex flex-col pt-16 pb-8 space-y-4 z-50 transition-all duration-300 ease-in-out overflow-y-auto ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
          onClick={() => {
            setMobileMenuOpen(false);
            setDropdownOpen(false);
          }}
        >
          <button
            className="absolute top-4 right-4 text-2xl p-2"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(false);
            }}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <ul className="w-full flex flex-col px-4">
            <li className="w-full">
              <NavItem
                href="/"
                label="Home"
                closeMenu={true}
                className="text-lg"
              />
            </li>

            <li className="relative w-full dropdown-container">
              <div className="flex items-center w-full">
                <NavItem
                  href="/services/"
                  label="Services"
                  closeMenu={true}
                  className="text-lg flex"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className="p-2"
                  aria-label={
                    dropdownOpen ? "Close services menu" : "Open services menu"
                  }
                >
                  {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              {dropdownOpen && (
                <ul
                  className="bg-gray-800/90 py-2 w-full rounded-md mt-1 ml-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <li className="w-full">
                    <NavItem
                      href="/brand-identity/"
                      label="Brand Identity"
                      closeMenu
                      className="text-base pl-4"
                      icon={<MdDesignServices />}
                    />
                  </li>
                  <li className="w-full">
                    <NavItem
                      href="/app-development/"
                      label="App Development"
                      closeMenu
                      className="text-base pl-4"
                      icon={<MdOutlineApps />}
                    />
                  </li>
                  <li className="w-full">
                    <NavItem
                      href="/website-development/"
                      label="Website Development"
                      closeMenu
                      className="text-base pl-4"
                      icon={<MdWeb />}
                    />
                  </li>
                  <li className="w-full">
                    <NavItem
                      href="/blockchain/"
                      label="Blockchain"
                      closeMenu
                      className="text-base pl-4"
                      icon={<MdWallet />}
                    />
                  </li>
                  <li className="w-full">
                    <NavItem
                      href="/ui-ux-design/"
                      label="UI/UX Design"
                      closeMenu
                      className="text-base pl-4"
                      icon={<SiAdobexd />}
                    />
                  </li>
                  <li className="w-full">
                    <NavItem
                      href="/social-media-marketing/"
                      label="Social Media Marketing"
                      closeMenu
                      className="text-base pl-4"
                      icon={<RiCustomerService2Fill />}
                    />
                  </li>
                  <li className="w-full">
                    <NavItem
                      href="/seo-services/"
                      label="SEO Services"
                      closeMenu
                      className="text-base pl-4"
                      icon={<TbSeo />}
                    />
                  </li>
                  <li className="w-full">
                    <NavItem
                      href="/web-data-scraping-services/"
                      label="Web Data Scraping Services"
                      closeMenu
                      className="text-base pl-4"
                      icon={<BiCodeCurly />}
                    />
                  </li>
                  <li className="w-full">
                    <NavItem
                      href="/ai-services/"
                      label="AI Services"
                      closeMenu
                      className="text-base pl-4"
                      icon={<HiSparkles />}
                    />
                  </li>
                  <li className="w-full">
                    <NavItem
                      href="/wordpress-website-designing-services/"
                      label="WordPress Designing Services"
                      closeMenu
                      className="text-base pl-4"
                      icon={<TbBrandWordpress />}
                    />
                  </li>
                </ul>
              )}
            </li>

            <li className="w-full">
              <NavItem
                href="/ai-services/"
                label="AI Services"
                closeMenu
                className="text-lg"
                
              />
            </li>

            <li className="w-full">
              <NavItem
                href="/careers/"
                label="Careers"
                closeMenu
                className="text-lg"
              />
            </li>
            {/* <li className="w-full">
              <NavItem
                href="/team/"
                label="Team"
                closeMenu
                className="text-lg"
              />
            </li> */}
            <li className="w-full">
              <NavItem
                href="/about-us/"
                label="About Us"
                closeMenu
                className="text-lg"
              />
            </li>
            <li className="w-full">
              <NavItem
                href="/contact/"
                label="Contact Us"
                closeMenu
                className="text-lg"
              />
            </li>
            <li className="w-full">
              <NavItem
                href="/blog/"
                label="Blog"
                closeMenu
                className="text-lg"
              />
            </li>
          </ul>

          <div className="px-4 mt-4">
            <button
              className="bg-gradient-to-r from-teal-500 to-cyan-500 font-bold px-4 py-2 rounded gap-2 flex items-center w-full justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setShowMeetingPopup(true);
                setMobileMenuOpen(false);
              }}
            >
              Schedule a Meeting <FaArrowRight />
            </button>
          </div>
        </div>
      </nav>
      {loading && <Loading />}
      {showMeetingPopup && (
        <MeetingPopup onClose={() => setShowMeetingPopup(false)} />
      )}
    </>
  );
};

export default Navbar;
