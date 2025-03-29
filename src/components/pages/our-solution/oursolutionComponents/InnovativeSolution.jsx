import React from 'react';

const InnovativeSolution = () => {
  return (
    <div className="text-center mt-12 mb-6 w-full">
      <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900">Innovative Solutions</h2>
      <div className="w-24 sm:w-36 h-1 bg-[#fba91e] mx-auto my-2"></div>
      <p className="text-gray-600 text-sm sm:text-lg">Enhance Your Business with Artech</p>

      {/* Header Section */}
      <div className="bg-blue-900 text-white py-6 mt-6 sm:mt-8 w-full">
        <h3 className="text-lg sm:text-xl font-semibold">
          Expertise Across Professional Verticals
        </h3>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-6xl mx-auto mt-6 sm:mt-8 text-[13px] sm:text-[14px] font-semibold text-gray-800 px-4">
        <ul className="space-y-2">
          <li>◦ IT</li>
          <li>◦ Contracts & Claims</li>
          <li>◦ Sales & Account Management</li>
          <li>◦ Branding & Marketing</li>
          <li>◦ Underwriting & Claims</li>
        </ul>
        <ul className="space-y-2">
          <li>◦ Administrative & Clerical</li>
          <li>◦ Creative</li>
          <li>◦ Business Operations Support</li>
          <li>◦ Human Resources</li>
          <li>◦ Procurement</li>
        </ul>
        <ul className="space-y-2">
          <li>◦ Call Center Support</li>
          <li>◦ Communications</li>
          <li>◦ Legal</li>
          <li>◦ Data Analysis & Documentation</li>
          <li>◦ Training & Development</li>
        </ul>
        <ul className="space-y-2">
          <li>◦ Quality Assurance</li>
          <li>◦ Accounting & Finance</li>
          <li>◦ Benefits & Compensation Support</li>
          <li>◦ Compliance</li>
          <li>◦ Loan Processing</li>
        </ul>
      </div>
    </div>
  );
};

export default InnovativeSolution;
