import type { FC } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className=" flex flex-row  justify-between items-center">
          <p className="text-gray-500 text-sm font-light">
            © {currentYear} Megan Pokal. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide"
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
