import type { FC } from 'react';

const RESUME_PATH = "/Megan_Pokal_Resume.pdf";

export const Home: FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')" // only works if file exists in /public
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">

        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Megan Pokal
        </h1>

        <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wide text-gray-200">
          Data Science Graduate | Analytics | Machine Learning
        </h2>

        <p className="text-lg font-light mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Master of Science in Data Science graduate with experience in
          Python, SQL, machine learning, data visualization, and big data technologies.
          Passionate about turning data into actionable insights and solving real-world business problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Resume */}
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors font-medium text-sm tracking-wide uppercase"
          >
            View Resume
          </a>

          {/* Contact */}
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors font-medium text-sm tracking-wide uppercase"
          >
            Contact Me
          </button>

        </div>

      </div>
    </section>
  );
};

export default Home;
