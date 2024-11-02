import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-gray-900 py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Get in <span className="text-orange-500">Touch</span></h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="text-orange-500 w-6 h-6" />
                  <div>
                    <p className="text-white">Visit Us</p>
                    <p className="text-gray-400">123 Burger Street, Food City, FC 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-orange-500 w-6 h-6" />
                  <div>
                    <p className="text-white">Call Us</p>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-orange-500 w-6 h-6" />
                  <div>
                    <p className="text-white">Email Us</p>
                    <p className="text-gray-400">contact@burgercraft.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Opening Hours</h3>
              <div className="space-y-2">
                <p className="text-gray-400">Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p className="text-gray-400">Saturday - Sunday: 12:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-black/50 p-8 rounded-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}