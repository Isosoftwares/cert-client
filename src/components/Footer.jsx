import React from "react";
import logo from "../assets/navlogo.svg";

const Footer = () => {
  const [cookieBanner, setCookieBanner] = React.useState(true);
  const handleCookieBanner = () => {
    setCookieBanner(!cookieBanner);
  };
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <img className="h-[60px] w-[300px] px-20 mb-4 " src={logo} alt="" />
      <div className="xl:px-[200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4">
              Issue Credentials
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.accredible.com/issuing-with-accredible"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  About Accredible
                </a>
              </li>
              <li>
                <a
                  href="https://www.accredible.com/contact"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Request a Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Middle column */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4">
              Credential Recipients
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://v2.accounts.accredible.com/retrieve-credentials"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Retrieve a Credential
                </a>
              </li>
              <li>
                <a
                  href="https://help.accredible.com"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="https://coursefinder.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Coursefinder
                </a>
              </li>
            </ul>
          </div>

          {/* Right column */}
          <div className="">
            <ul className="space-y-3  flex flex-col lg:flex-row lg:space-x-1 lg:space-y-0 divide-x-2 ">
              <li>
                <a
                  href="https://www.accredible.com/terms"
                  target="_blank"
                  className="text-primary hover:underline px-2"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://www.accredible.com/data-privacy"
                  target="_blank"
                  className="text-primary hover:underline px-2"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://help.accredible.com/s/article/accessibility"
                  target="_blank"
                  className="text-primary hover:underline px-2"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="https://www.credential.net/site-map"
                  target="_blank"
                  className="text-primary hover:underline px-2"
                >
                  Site Map
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cookie consent banner - this would typically be in its own component, but including it here */}
      {cookieBanner && (
        <div className="bg-gray-800 text-white py-3 px-4 mt-8 fixed bottom-0 w-full z-50">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
            <p className="text-sm">
              This website uses cookies to ensure you get the best experience on
              our website.{" "}
              <a href="#" className="text-primary hover:underline">
                Learn more
              </a>
            </p>
            <button
              onClick={handleCookieBanner}
              className="mt-2 sm:mt-0 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
