import type { FC } from 'react';
import { useState, useEffect } from 'react';
import IMG from "../images/profilephoto.jpg";
import Resume from "./Joanna_Sierra_Mendoza_Resume.pdf";
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export const About: FC = () => {
  const hobbies = [
    "baking",
    "watching Padres games",
    "snorkeling",
    "spending time at the beach"
  ];
const [currentHobbyIndex, setCurrentHobbyIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const getRandomIndex = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * hobbies.length);
    } while (newIndex === currentHobbyIndex && hobbies.length > 1);
    return newIndex;
  };
  
  const changeText = () => {
    setCurrentHobbyIndex(getRandomIndex());
  };
  
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(changeText, 1500);
      return () => clearInterval(interval);
    }
  }, [currentHobbyIndex, isPaused]);

  return (
    <section 
      id="about" 
      className="w-full py-12 md:py-16 bg-gray-50"
    >
      <div className="container mx-auto px-6 md:px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 items-center">
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <div className="relative">
              <img 
                src={IMG} 
                alt="Profile" 
                className="w-80 h-80 md:w-96 md:h-96 object-cover "
              />
              <div className="absolute inset-0 "></div>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col justify-center text-left px-4 md:px-0">
            <h1 className='text-5xl md:text-6xl font-light mb-8 tracking-wide' style={{ 
              color: '#2d3748',
              fontWeight: '300'
            }}>
              Hello
            </h1>

            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wide" style={{ color: '#4a5568' }}>
              I'm <span style={{ color: '#2d3748', fontWeight: '400' }}>Joanna</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-xl min-h-40 md:min-h-36">
              A data professional focused on <span style={{ color: '#2d3748', fontWeight: '500' }}>Data Science</span> and <span style={{ color: '#2d3748', fontWeight: '500' }}>Financial Anlysis</span> with a strong focus on <span style={{ color: '#2d3748', fontWeight: '500' }}>machine learning</span>, <span style={{ color: '#2d3748', fontWeight: '500' }}>machine learning</span>, and using data to drive informed business decisions <span style={{ color: '#2d3748', fontWeight: '500' }}>code</span>. In my spare time, I enjoy <span  
                style={{ 
                  color: '#2d3748', 
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  padding: '2px 2px 2px 6px',
                  marginLeft: '4px',
                  borderRadius: '3px',
                  backgroundColor: isPaused ? 'rgba(45, 55, 72, 0.05)' : 'transparent'
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={changeText}
                title="Click to change • Hover to pause"
              >
                {hobbies[currentHobbyIndex]}
              </span>.
            </p>
            <div className="flex gap-6 justify-start">
              <a href="https://linkedin.com/in/megan-pokal/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 title="LinkedIn Profile"
                 className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
              
              <a href="https://github.com/mvpokal" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 title="GitHub Profile"
                 className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <FaGithub size={24} />
              </a>
              
              <a href={Resume}
                 download="Megan_Pokal_Resume.pdf"
                 title="Download Resume"
                 className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <FaFileDownload size={24} />
              </a>
              
              <a href="mailto:mvpm10@icloud.com" 
                 title="Send Email"
                 className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <SiGmail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
