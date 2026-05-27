import type { FC } from 'react';
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium">
              Megan Pokal
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Data Science Graduate | Analytics | Machine Learning
            </p>

            <p className="text-gray-500 text-sm mt-2">
              © {currentYear} Megan Pokal. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">

            <a
              href="https://www.linkedin.com/in/megan-pokal/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://github.com/mvpokal"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="mailto:mvpm10@icloud.com"
              title="Email"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SiGmail size={22} />
            </a>

          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wide"
          >
            Back to Top
            <FaArrowUp className="ml-2" size={12} />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
