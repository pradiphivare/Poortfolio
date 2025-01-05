import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch('http://localhost:5000/contact', { // Update the URL to your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send the message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Details */}
          <div className="space-y-8 text-gray-700">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-100 rounded-full">
                <Mail className="text-blue-500 w-6 h-6" />
              </div>
              <span className="text-lg font-medium">pradiphivare2510@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-100 rounded-full">
                <Phone className="text-blue-500 w-6 h-6" />
              </div>
              <span className="text-lg font-medium">+91 9552959743</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-100 rounded-full">
                <MapPin className="text-blue-500 w-6 h-6" />
              </div>
              <span className="text-lg font-medium">Pune, India</span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows={4}
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all font-semibold"
            >
              Send Message
            </button>
            {status && <p className="text-center mt-4 text-gray-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
