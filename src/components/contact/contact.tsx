import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import Confetti from 'react-confetti';

export const Contact: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3333/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (response.ok) {
        setSuccess('Message was sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setError('');
        setShowConfetti(true);
        setTimeout(() => { setShowConfetti(false);}, 10000); 
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Message failed to send. Please try again.');
    }
  }

  return (
    <section
     id="contact" 
     className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-light mb-16 text-center tracking-wide" style={{ 
          color: '#2d3748',
          fontWeight: '300'
        }}>
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-light text-lg leading-relaxed">
          Please reach out if you need additional information. Thank You.
        </p>
        <div className="max-w-2xl mx-auto">
          {showConfetti && (
            <Confetti
              numberOfPieces={200}
              gravity={0.2}
            />
          )}
          {error && <p className="text-red-500 text-center mb-4 font-light">{error}</p>}
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors font-light"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors font-light"
                required
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors font-light h-32 resize-none"
                required
              ></textarea>
            </div>
            {success && <p className="text-green-600 text-center font-light">{success}</p>}
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
