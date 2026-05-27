import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import Confetti from 'react-confetti';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export const Contact: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!name || !email || !message) return;

    setIsSubmitting(true);

    try {
      // Simulated success (no backend required)
      setSuccess('Thank you for reaching out. I will respond soon!');
      
      setName('');
      setEmail('');
      setMessage('');

      setShowConfetti(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 4000);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">

        <h2 className="text-4xl font-light mb-10 text-center text-gray-800">
          Let's Connect
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          I'm always open to discussing data science, analytics,
          machine learning, and new opportunities.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-12">

          <a
            href="https://www.linkedin.com/in/megan-pokal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/mvpokal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="mailto:mvpm10@icloud.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <SiGmail size={28} />
          </a>

        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">

          {showConfetti && (
            <Confetti numberOfPieces={120} gravity={0.2} />
          )}

          {success && (
            <p className="text-green-600 text-center mb-6">
              {success}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-500"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-500"
              required
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-500 h-32 resize-none"
              required
            />

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors uppercase text-sm font-medium tracking-wide disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
