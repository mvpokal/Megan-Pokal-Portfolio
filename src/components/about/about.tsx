import type { FC } from 'react';
import { useState, useEffect } from 'react';
import IMG from "../images/profilephoto.jpg";
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

// MUST be in /public folder
const Resume = "/Megan_Pokal_Resume.pdf";

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
    let newIndex = 0;

    do {
      newIndex = Math.floor(Math.random() * hobbies.length);
    } while (newIndex === currentHobbyIndex && hobbies.length > 1);

    return newIndex;
  };

  const changeText = () => {
    setCurrentHobbyIndex(getRandomIndex());
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(changeText, 1500);
    return () => clearInterval(interval);
  }, [isPaused, currentHobbyIndex]);

  return (
    <section id="about" className="w-full py-12 md:py-16 bg-gray-50">

      <div className="container mx-auto px-6 md:px-4 max-w-6xl">

        <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 items-center">

          {/* IMAGE */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src={IMG}
              alt="Megan Pokal"
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* TEXT */}
          <div className="md:w-1/2 flex flex-col justify-center text-left px-4 md:px-0">

            <h1 className="text-5xl md:text-6xl font-light mb-8 tracking-wide text-gray-800">
              Hello
            </h1>

            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wide text-gray-600">
              I'm{" "}
              <span className="font-medium text-gray-800">
                Megan Pokal
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-xl min-h-40">

              A recent{" "}
              <span className="font-medium text-gray-800">
                Master of Science in Data Science graduate
              </span>{" "}
              with experience in{" "}
              <span className="font-medium text-gray-800">
                Python, SQL, Tableau, Power BI, machine learning, and big data
              </span>.

              I enjoy turning raw data into insights and building visual stories from data.

              Outside of work, I enjoy{" "}

              <span
                className="font-medium text-gray-800 cursor-pointer px-2 py-1 rounded"
                style={{
                  backgroundColor: isPaused
                    ? 'rgba(45,55,72,0.08)'
                    : 'transparent'
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={changeText}
                title="Click to change"
              >
                {hobbies[currentHobbyIndex]}
              </span>

              .
            </p>

            {/* LINKS */}
            <div className="flex gap-6">

              <a
                href="https://www.linkedin.com/in/megan-pokal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={26} />
              </a>

              <a
                href="https://github.com/mvpokal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={26} />
              </a>

              {/* FIXED: download works properly in production */}
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <FaFileDownload size={26} />
              </a>

              <a href="mailto:mvpm10@icloud.com">
                <SiGmail size={26} />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
