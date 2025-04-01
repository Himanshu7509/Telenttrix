import React, { useState, useEffect, useRef } from "react"; // Import useRef
import { Search, Menu, X, ChevronDown } from "lucide-react";
import logo from "../../../assets/headerimg.png";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({}); // Simplified initial state
  const [hoverDropdown, setHoverDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navbarRef = useRef(null); // Ref for the navbar element

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden"; // Prevent scrolling when the menu is open
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleItem = (item) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const menuItems = [
    {
      name: "About Us",
      hasDropdown: true,
      link: "/about",
      dropdownItems: [
        { name: "Artech Advantage", link: "/about" },
        { name: "Great Place to Work", link: "/about" },
        { name: "Awards", link: "/about/awards" },
        { name: "Certifications and Accolades", link: "/about" },
      ],
    },
    {
      name: "Our Solutions",
      hasDropdown: true,
      link: "/our-solutions",
      dropdownItems: [
        { name: "Contingent Staffing Solutions", link: "/our-solutions" },
        {
          name: "Managed Services and Project Delivery",
          link: "/our-solutions",
        },
        { name: " Adobe Platform Services", link: "/our-solutions" },
        { name: "Diversity and Inclusion", link: "/our-solutions" },
        { name: "Case Studies", link: "/our-solutions" },
      ],
    },
    {
      name: "Careers",
      hasDropdown: true,
      link: "/career",
      dropdownItems: [
        { name: "Open Positions", link: "/career" },
        { name: "Career Growth", link: "/career" },
        { name: "Benefits", link: "/career" },
      ],
    },
    {
      name: "Community First Initiatives",
      hasDropdown: false,
      link: "/community",
    },
    {
      name: "Resources",
      hasDropdown: true,
      link: "/resources",
      dropdownItems: [
        { name: "Blog", link: "/resources" },
        { name: "Case Studies", link: "/resources" },
        { name: "Whitepapers", link: "/resources" },
      ],
    },
    { name: "Contact Us", hasDropdown: false, link: "/contact" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const headerClasses = clsx(
    "fixed top-0 left-0 w-full bg-white shadow-sm z-40 transition-all duration-300", // Fixed positioning
    {
      "py-3": !isScrolled,
      "py-0": isScrolled,
    }
  );

  return (
    <>
      {/* Main Header */}
      <header className={headerClasses} ref={navbarRef}>
        <div className="px-4 py-2 flex justify-between items-center">
          {" "}
          {/* Added items-center */}
          {/* Logo Section */}
          <div className="">
            <Link to="/">
              <img
                src={logo}
                alt="ARTECH Intelligence is Human"
                className={clsx("transition-all duration-300", {
                  "h-16 w-48 sm:h-16 sm:w-52": !isScrolled,
                  "h-10 w-32 sm:h-12 sm:w-36": isScrolled,
                  "hidden sm:block": true,
                })}
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6">
            <Link
              to="/"
              className={clsx(
                "px-3 py-2 text-sm lg:text-xs xl:text-base rounded-full transition-colors duration-200",
                {
                  "bg-[#293b95] text-white": isActive("/"),
                  "text-gray-700 hover:bg-[#293b95] hover:text-white":
                    !isActive("/"),
                }
              )}
            >
              Home
            </Link>
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setHoverDropdown(item.name)
                }
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <Link
                  to={item.link}
                  className={clsx(
                    "px-2 lg:px-3 py-2 text-sm lg:text-xs xl:text-base rounded-full flex items-center transition-colors duration-200",
                    {
                      "bg-[#293b95] text-white": isActive(item.link),
                      "text-gray-700 hover:bg-[#293b95] hover:text-white":
                        !isActive(item.link),
                    }
                  )}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown size={14} className="ml-1" />
                  )}
                </Link>

                {/* Desktop Dropdown Menu */}
                {item.hasDropdown && hoverDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 lg:w-56 xl:w-64 bg-black/90 shadow-lg rounded-md overflow-hidden z-50 ">
                    {item.dropdownItems &&
                      item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.link}
                          className="font-semibold block px-4 py-2 lg:py-3 text-xs lg:text-sm text-white hover:bg-[#293b95] hover:text-white border-b-[0.5px] last:border-b-0"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Social Icons */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex space-x-3">
              <Link
                to="/search"
                className="text-[#293b95] hover:text-opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.707 22.293l-6.364-6.364a9.5 9.5 0 1 0-1.414 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414zM10.5 18a7.5 7.5 0 1 1 7.5-7.5 7.508 7.508 0 0 1-7.5 7.5z" />
                </svg>
              </Link>

              <Link
                to="/linkedin"
                className="text-[#293b95] hover:text-opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                to="/facebook"
                className="text-[#293b95] hover:text-opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </Link>
              <Link
                to="/twitter"
                className="text-[#293b95] hover:text-opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                to="/instagram"
                className="text-[#293b95] hover:text-opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
          {/* Mobile/Tablet Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none z-50"
              aria-label="Toggle Menu" // Accessibility: Add an aria-label
            >
              <Menu size={29} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Menu Overlay - Background Mask */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300"
          style={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          onClick={toggleMobileMenu}
          aria-hidden="true" // Accessibility: Hide from screen readers
        ></div>
      )}

      {/* Sliding Mobile/Tablet Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-[#222222] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:w-1/2 w-full`}
      >
        {/* Search and Close Button */}
        <div className="flex bg-black justify-between items-center p-4 border-b border-[#333333]">
          <input
            type="text"
            placeholder="Search"
            className="bg-black text-gray-400 text-md font-semibold w-full h-full focus:outline-none"
          />
          <button
            className="text-white"
            onClick={toggleMobileMenu}
            aria-label="Close Menu"
          >
            {" "}
            {/* Accessibility */}
            <X size={24} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto">
          <div className="flex flex-col">
            {/* Home Item */}
            <Link
              to="/"
              className={clsx("px-6 py-3 border-b border-[#333333]", {
                "bg-[#293b95]": isActive("/"),
                "hover:bg-[#293b95]": !isActive("/"),
              })}
              onClick={toggleMobileMenu} // close the mobile menu on item click
            >
              Home
            </Link>

            {/* Menu Items */}
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-[#333333]">
                {item.hasDropdown ? (
                  <div
                    className={clsx(
                      "px-6 py-3 flex justify-between items-center cursor-pointer",
                      {
                        "bg-[#293b95]": isActive(item.link),
                        "hover:bg-[#293b95]": !isActive(item.link),
                      }
                    )}
                    onClick={() => toggleItem(item.name)}
                    aria-expanded={expandedItems[item.name]} // Accessibility
                    role="button" // Accessibility
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={24}
                      className={clsx("transition-transform duration-300", {
                        "rotate-180": expandedItems[item.name],
                      })}
                    />
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    className={clsx("px-6 py-4 block", {
                      "bg-[#293b95]": isActive(item.link),
                      "hover:bg-[#293b95]": !isActive(item.link),
                    })}
                    onClick={toggleMobileMenu} // close the mobile menu on item click
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Content */}
                {item.hasDropdown && expandedItems[item.name] && (
                  <div className="bg-[#333333] px-6 py-3">
                    <ul className="space-y-2">
                      {item.dropdownItems &&
                        item.dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <Link
                              to={dropdownItem.link}
                              className="text-gray-300 hover:text-white hover:bg-[#293b95] block py-1 px-2 rounded"
                              onClick={toggleMobileMenu} // close the mobile menu on item click
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
      {/* Add padding to the top of the content to avoid it being hidden by the fixed navbar */}
      <div
        style={{
          paddingTop: navbarRef.current
            ? navbarRef.current.offsetHeight
            : "80px",
        }}
      >
        {/* Your page content here */}
      </div>
    </>
  );
};

export default Header;
