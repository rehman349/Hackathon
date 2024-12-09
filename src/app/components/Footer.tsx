import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="container mx-auto px-5 py-16">
        <div className="flex flex-wrap text-left">
          {/* Company Info */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-lg text-gray-900 mb-3">Furniro.</h2>
            <p className="text-sm">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-sm text-gray-900 mb-3">Links</h2>
            <nav className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </nav>
          </div>

          {/* Help */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-sm text-gray-900 mb-3">Help</h2>
            <nav className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Payment Options
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policies
                </a>
              </li>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-sm text-gray-900 mb-3">Newsletter</h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-gray-100 border border-gray-300 rounded-l-md py-2 px-4 text-sm focus:outline-none"
              />
              <button className="bg-gray-900 text-white text-sm py-2 px-4 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2023 Furniro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




