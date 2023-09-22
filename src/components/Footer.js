import React from "react";

const Footer = () => {
  return (
    <div className="relative top-0 w-full left-0 bottom-0">
      <footer className="text-gray-700 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a
            href="https://ruperth.netlify.app"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 hover:underline"
          >
            <span className="ml-3 text-xl">Made by Ruperth Nyagesoa</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 pathsonthego —
            <a
              href="https://ruperth.netlify.app"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Ru
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
