import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedBurgers from './components/FeaturedBurgers';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <FeaturedBurgers />
      <ContactForm />
    </div>
  );
}

export default App;