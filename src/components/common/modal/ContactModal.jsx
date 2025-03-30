import React, { useEffect } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div>
      <div
        className="fixed inset-0 top-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-6 md:p-10"
        onClick={onClose}
      >
        <div
          className="bg-white w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-xl rounded-lg shadow-2xl p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
          >
            ✕
          </button>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 pb-4">
            Contact Us
          </h2>

          <form className="space-y-4 max-w-md mt-8 mb-8">
            <div>
              <label className="font-bold text-md mb-2">
                Which country are you interested in?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option value="">Choose country of interest</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="india">India</option>
                <option value="china">China</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-md mb-2">
                Looking for solutions or career opportunities with us?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option value="">Please select from dropdown</option>
                <option value="solutions">Solutions</option>
                <option value="career">Job Opportunities</option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <label className="font-bold">
                  Your Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg"
                  required
                />
                <label> First</label>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full mt-7 p-2 border rounded-lg"
                  required
                />
                <label> Last</label>
              </div>
            </div>

            <div>
              <label className="font-bold">
                Your Email ID: <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full mt-1 p-2 mb-6 border rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 px-4 py-2 border bg-gray-100 text-lg rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
