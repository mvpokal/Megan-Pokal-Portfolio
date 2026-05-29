import type { FC } from 'react';


export const Home: FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-light mb-6 tracking-wide text-white">
          Megan Pokal
        </h1>
        <h2 className="text-2xl font-light mb-8 tracking-wide text-gray-200">
          Data Science and Financial Analysis Professional.
        </h2>
        <p className="text-lg font-light mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Passionate about using data-driven insights to solve real-world business problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            className="px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors font-medium text-sm tracking-wide uppercase"
            href={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <button 
            className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors font-medium text-sm tracking-wide uppercase"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
