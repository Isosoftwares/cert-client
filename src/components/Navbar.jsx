import React, { useState } from "react";
import icon from "../assets/user.png";
import logo2 from "../assets/navlogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white  px-6 shadow relative">
      <div className=" lg:px-4 xl:px-[340px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and brand */}
          <div className="flex items-center">
            <img className="h-[38px] w-auto" src={logo2} alt="Accredible" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://www.credential.net/suggestions?groupIds=393041&issuerIds=87963"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-gray-900 text-lg font-medium py-5 hover:bg-gray-100 px-2 cursor-pointer">
                Suggested Credentials
              </span>
            </a>
            <a
              href="https://v2.accounts.accredible.com/login?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center  py-5 px-6 hover:bg-gray-100 cursor-pointer ">
                <div className=" bg-gray-200 rounded-full flex items-center justify-center mr-2">
                  <img src={icon} alt="" />
                </div>
                <span className="text-gray-900 text-lg font-medium">
                  Sign in
                </span>
              </div>
            </a>
          </div>

          {/* Mobile view */}
          <div className="md:hidden flex items-center py-5">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800"
            >
              <GiHamburgerMenu size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute right-3 w-48 mt-2 py-2 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <a
            href="#"
            className="block px-4 py-4 border-b text-sm text-gray-800 hover:bg-gray-100"
          >
            Suggested Credentials
          </a>
          <a
            href="#"
            className="block px-4 py-4 text-sm text-gray-800 hover:bg-gray-100"
          >
            Sign in
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
