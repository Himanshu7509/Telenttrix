import React from "react";
import {
  FaLinkedin,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#222] text-[#f4f4f4] py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">OUR SOLUTIONS</h3>
          <ul className="space-y-2">
            <li>Contingent Staffing</li>
            <li>Recruitment Process Outsourcing (RPO)</li>
            <li>Direct Hire</li>
            <li>Master Vendor Program</li>
            <li>Payroll & Transition Services</li>
            <li>Managed Services and Project Delivery</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">DIVERSITY & INCLUSION</h3>
          <h3 className="font-semibold text-lg mb-4">CAREERS</h3>
          <ul className="space-y-2">
            <li>Corporate Jobs</li>
            <li>Consultant Jobs</li>
          </ul>
          <h3 className="font-semibold text-lg mt-6">
            COMMUNITY FIRST INITIATIVES
          </h3>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li>Articles</li>
            <li>Blogs</li>
            <li>Case Studies</li>
            <li>Notices</li>
            <li>FAQs</li>
            <li>Web Stories</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">ABOUT US</h3>
          <ul className="space-y-2">
            <li>Artech Advantage</li>
            <li>Great Place to Work</li>
            <li>Awards</li>
            <li>Certifications & Accolades</li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className="font-semibold text-lg flex items-center">CONTACT US
          <ul className="flex space-x-4 mt-2">
            <li className="flex items-center justify-between gap-2">
              <MdLocationOn /> USA
            </li>
            <li className="flex items-center justify-between gap-2">
              <MdLocationOn /> Canada
            </li>
            <li className="flex items-center justify-between gap-2">
              <MdLocationOn /> India
            </li>
            <li className="flex items-center justify-between gap-2">
              <MdLocationOn /> Philippines
            </li>
          </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4">
          <FaLinkedin className="w-6 h-6 cursor-pointer" />
          <FaFacebookF className="w-6 h-6 cursor-pointer" />
          <FaXTwitter className="w-6 h-6 cursor-pointer" />
          <FaInstagram className="w-6 h-6 cursor-pointer" />
        </div>
        <p className="text-gray-400 text-sm mt-4 md:mt-0">
          © 2025 - Artech LLC.
        </p>
        <div className="flex space-x-4 text-sm text-gray-400">
          <span className="cursor-pointer">Sitemap</span>
          <span className="cursor-pointer">Privacy Policy</span>
          <span className="cursor-pointer">Terms of Use</span>
          <span className="cursor-pointer">
            Artech Employee Online Forum Policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
