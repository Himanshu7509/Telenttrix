import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiChevronDown, FiSearch, FiX, FiMenu } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../../assets/headerlogo.png";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    about: false,
    solutions: false,
    careers: false,
  });

  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 bg-white shadow-md z-50 mb-8 ${
        isScrolled ? "h-8 md:h-12" : "h-16 md:h-24"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="h-full w-52">
          <img src={logo} alt="Artech Logo" className="h-full" />
        </div>

        <nav className="hidden lg:flex space-x-6 items-center">
          <Link
            to="/"
            className={` ${
              currentPath === "/"
                ? "bg-[#293b95] text-white px-4 py-2 rounded-full"
                : "hover:bg-[#293b95] hover:text-white hover:px-4 hover:py-2 hover:rounded-full"
            }`}
          >
            Home
          </Link>

          <div className="relative group">
            <Link
              to="/about"
              className={`flex items-center gap-1 ${
                currentPath === "/about"
                  ? "bg-[#293b95] text-white px-4 py-2 rounded-full"
                  : "hover:bg-[#293b95] hover:text-white hover:px-4 hover:py-2 hover:rounded-full"
              }`}
            >
              About Us <FiChevronDown />
            </Link>
            <div className="absolute left-0 mt-2 px-2 hidden group-hover:block bg-[#222] text-white shadow-md w-52">
              <Link
                to="#"
                className="block px-4 py-2 text-[14px] border-b border-gray-400 hover:bg-[#222]"
              >
                Artech Advantage
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-[14px] border-b border-gray-400 hover:bg-[#222]"
              >
                Great Place to Work
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-[14px] border-b border-gray-400 hover:bg-[#222]"
              >
                Awards
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-[14px] border-b border-gray-400 hover:bg-[#222]"
              >
                Certifications and Accolades
              </Link>
            </div>
          </div>

          <div className="relative group">
            <Link
              to="/our-solution"
              className={`flex items-center gap-1 ${
                currentPath === "/solution"
                  ? "bg-[#293b95] text-white px-4 py-2 rounded-full"
                  : "hover:bg-[#293b95] hover:text-white hover:px-4 hover:py-2 hover:rounded-full"
              }`}
            >
              Our Solutions <FiChevronDown />
            </Link>
            <div className="absolute left-0 mt-2 px-2 hidden group-hover:block bg-[#222] text-white shadow-md w-52">
              <Link
                to="#"
                className="block px-4 py-2 text-[14px] border-b border-gray-400 hover:bg-[#222]"
              >
                IT Solutions
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-[14px] border-b border-gray-400 hover:bg-[#222]"
              >
                Consulting Services
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-[14px] border-b border-gray-400 hover:bg-[#222]"
              >
                Project Management
              </Link>
            </div>
          </div>

          <div className="relative group">
            <Link
              to="/career"
              className={`flex items-center gap-1 ${
                currentPath === "/careers"
                  ? "bg-[#253e91] text-white px-4 py-2 rounded-full"
                  : "hover:bg-[#253e91] hover:text-white hover:px-4 hover:py-2 hover:rounded-full"
              }`}
            >
              Careers <FiChevronDown />
            </Link>
            <div className="absolute left-0 mt-2 px-2 hidden group-hover:block bg-[#222] text-white shadow-md w-52">
              <Link
                to="#"
                className="block px-4 py-2 text-[14px] border-b border-gray-400 hover:bg-[#222]"
              >
                Corporate Jobs
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-[14px] border-b border-gray-400 hover:bg-[#222]"
              >
                Consultant Jobs
              </Link>
            </div>
          </div>

          <Link
            to="/community"
            className={` ${
              currentPath === "/community"
                ? "bg-[#293b95] text-white px-4 py-2 rounded-full"
                : "hover:bg-[#293b95] hover:text-white hover:px-4 hover:py-2 hover:rounded-full"
            }`}
          >
            Community First Initiatives
          </Link>
          <Link
            to="/resources"
            className={` ${
              currentPath === "/resources"
                ? "bg-[#293b95] text-white px-4 py-2 rounded-full"
                : "hover:bg-[#293b95] hover:text-white hover:px-4 hover:py-2 hover:rounded-full"
            }`}
          >
            Resources
          </Link>
          <Link
            to="/contact"
            className={` ${
              currentPath === "/contact"
                ? "bg-[#293b95] text-white px-4 py-2 rounded-full"
                : "hover:bg-[#293b95] hover:text-white hover:px-4 hover:py-2 hover:rounded-full"
            }`}
          >
            Contact Us
          </Link>

          <FiSearch className="text-gray-600 text-lg cursor-pointer" />
          <FaLinkedinIn className="text-[#293b95] text-lg" />
          <FaFacebookF className="text-[#293b95] text-lg" />
          <FaInstagram className="text-[#293b95] text-lg" />
        </nav>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-[85%] md:w-[55%] h-full bg-neutral-800 text-white z-50"
        >
          <div className="flex justify-between h-16 items-center bg-black border-b border-gray-600">
            <input
              type="text"
              placeholder="Search"
              className="text-[#222] font-md w-[85%] bg-transparent h-full px-4 border-r border-gray-500"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white w-[15%] h-full flex items-center justify-center text-2xl"
            >
              <FiX />
            </button>
          </div>

          <nav className="mt-4 px-5">
            <div className="border-b border-gray-600 py-3">
              <Link to="/" className="text-lg flex justify-between">
                Home
              </Link>
            </div>

            <div className="border-b border-gray-600 py-3">
              <button
                onClick={() => toggleDropdown("about")}
                className="text-lg flex justify-between w-full text-left"
              >
                About Us <FiChevronDown />
              </button>
              {dropdowns.about && (
                <div className="pl-4 mt-2">
                  <Link to="#" className="block border-b border-[#222] py-2">
                    Artech Advantage
                  </Link>
                  <Link to="#" className="block border-b border-[#222] py-2">
                    Great Place to Work
                  </Link>
                  <Link to="#" className="block border-b border-[#222] py-2">
                    Awards
                  </Link>
                  <Link to="#" className="block py-2">
                    Certifications and Accolades
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b border-gray-600 py-3">
              <button
                onClick={() => toggleDropdown("solutions")}
                className="text-lg flex justify-between w-full text-left"
              >
                Our Solutions <FiChevronDown />
              </button>
              {dropdowns.solutions && (
                <div className="pl-4 mt-2">
                  <Link to="#" className="block border-b border-[#222] py-2">
                    IT Solutions
                  </Link>
                  <Link to="#" className="block border-b border-[#222] py-2">
                    Consulting Services
                  </Link>
                  <Link to="#" className="block py-2">
                    Project Management
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b border-gray-600 py-3">
              <button
                onClick={() => toggleDropdown("careers")}
                className="text-lg flex justify-between w-full text-left"
              >
                Careers <FiChevronDown />
              </button>
              {dropdowns.careers && (
                <div className="pl-4 mt-2">
                  <Link to="#" className="block border-b border-[#222] py-2">
                    Corporate Jobs
                  </Link>
                  <Link to="#" className="block py-2">
                    Consultant Jobs
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b border-gray-600 py-3">
              <Link to="/community" className="text-lg flex justify-between">
                Community First Initiatives
              </Link>
            </div>
            <div className="border-b border-gray-600 py-3">
              <Link to="#" className="text-lg flex justify-between">
                Resources
              </Link>
            </div>
            <div className="border-b border-gray-600 py-3">
              <Link to="#" className="text-lg flex justify-between">
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;