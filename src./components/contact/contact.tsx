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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Simulated form success
    setSuccess(
      'Thank you for reaching out. I will get back to you soon!'
    );

    setName('');
    setEmail('');
    setMessage('');

    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 max-w-5xl">

        <h2
          className="text-4xl font-light mb-10 text-center tracking-wide"
          style={{
            color: '#2d3748',
            fontWeight: '300'
          }}
        >
          Let's Connect
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-light text-lg leading-relaxed">
          I'm always interested in discussing data science,
          analytics, machine learning, and new opportunities.
          Feel free to reach out.
        </p>

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

        <div className="max-w-2xl mx-auto">

          {showConfetti && (
            <Confetti
              numberOfPieces={150}
              gravity={0.2}
            />
          )}

          {success && (
            <p className="text-green-600 text-center mb-6">
              {success}
            </p>
          )}

          <form
            className="space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-500 transition-colors"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-500 transition-colors"
                required
              />

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-500 transition-colors h-32 resize-none"
                required
              />

            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase"
              >
                Send Message
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
